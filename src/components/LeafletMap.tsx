"use client";

import { useEffect, useRef } from "react";
import { PROJECT_LOCATIONS, CATEGORY_COLORS } from "./IndonesiaProjectMap";

interface LeafletMapProps {
  selectedId: string;
  hoveredId: string | null;
  onSelect: (id: string) => void;
}

export function LeafletMap({ selectedId, hoveredId, onSelect }: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});
  const LRef = useRef<any>(null);

  // Inject Leaflet CSS once
  useEffect(() => {
    if (document.getElementById("leaflet-css")) return;
    const link = document.createElement("link");
    link.id = "leaflet-css";
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(link);
  }, []);

  // Init map (once)
  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !mapRef.current) return;
      if ((mapRef.current as any)._leaflet_id) return;

      LRef.current = L;
      delete (L.Icon.Default.prototype as any)._getIconUrl;

      const map = L.map(mapRef.current, {
        center: [-2.5, 118],
        zoom: 5,
        zoomControl: true,
        scrollWheelZoom: true,
        attributionControl: true,
      });

      // Move zoom control to bottom-right for cleaner top area
      map.zoomControl.setPosition("bottomright");
      leafletMapRef.current = map;

      // OSM tiles with dark filter
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      const tp = map.getPane("tilePane");
      if (tp) {
        tp.style.filter = "invert(100%) hue-rotate(180deg) brightness(0.68) saturate(0.75) contrast(0.9)";
      }

      // Create markers
      PROJECT_LOCATIONS.forEach((proj) => {
        const isSelected = proj.id === selectedId;
        const color = CATEGORY_COLORS[proj.category] || "#6b7280";

        const icon = L.divIcon({
          html: makeMarker(color, isSelected, false),
          className: "",
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        });

        const marker = L.marker([proj.lat, proj.lng], { icon, zIndexOffset: isSelected ? 100 : 0 })
          .addTo(map)
          .on("click", () => onSelect(proj.id));

        marker.bindTooltip(
          `<div class="map-tip"><strong>${proj.clientGroup}</strong><span>${proj.locationName}</span></div>`,
          { direction: "top", offset: [0, -20], opacity: 1, className: "map-tooltip" }
        );

        markersRef.current[proj.id] = marker;
      });
    });

    return () => {
      cancelled = true;
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
        markersRef.current = {};
      }
    };
  }, []);

  // React to selectedId changes
  useEffect(() => {
    if (!leafletMapRef.current || !LRef.current) return;
    const L = LRef.current;

    PROJECT_LOCATIONS.forEach((proj) => {
      const marker = markersRef.current[proj.id];
      if (!marker) return;

      const isSelected = proj.id === selectedId;
      const isHovered = proj.id === hoveredId;
      const color = CATEGORY_COLORS[proj.category] || "#6b7280";

      marker.setIcon(L.divIcon({
        html: makeMarker(color, isSelected, isHovered),
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      }));
      marker.setZIndexOffset(isSelected ? 100 : 0);
    });

    const target = PROJECT_LOCATIONS.find((p) => p.id === selectedId);
    if (target) {
      leafletMapRef.current.flyTo([target.lat, target.lng], 7, { duration: 0.9, easeLinearity: 0.4 });
    }
  }, [selectedId]);

  // React to hoveredId changes (marker size only, no flyTo)
  useEffect(() => {
    if (!leafletMapRef.current || !LRef.current) return;
    const L = LRef.current;

    PROJECT_LOCATIONS.forEach((proj) => {
      const marker = markersRef.current[proj.id];
      if (!marker) return;

      const isSelected = proj.id === selectedId;
      const isHovered = proj.id === hoveredId;
      const color = CATEGORY_COLORS[proj.category] || "#6b7280";

      marker.setIcon(L.divIcon({
        html: makeMarker(color, isSelected, isHovered),
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      }));
    });
  }, [hoveredId]);

  return (
    <>
      <style>{`
        .map-tooltip.leaflet-tooltip {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,.10);
          padding: 0;
          overflow: hidden;
        }
        .map-tooltip.leaflet-tooltip::before {
          border-top-color: #e5e7eb;
        }
        .map-tip {
          display: flex;
          flex-direction: column;
          padding: 7px 11px;
          gap: 1px;
        }
        .map-tip strong {
          font-size: 12px;
          font-weight: 600;
          color: #111827;
          white-space: nowrap;
        }
        .map-tip span {
          font-size: 11px;
          color: #9ca3af;
          white-space: nowrap;
        }
        .leaflet-control-zoom {
          border: 1px solid #e5e7eb !important;
          border-radius: 8px !important;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,.06) !important;
          margin-bottom: 12px !important;
          margin-right: 12px !important;
        }
        .leaflet-bar a {
          background: #fff !important;
          color: #4b5563 !important;
          border-bottom-color: #e5e7eb !important;
          width: 28px !important;
          height: 28px !important;
          line-height: 28px !important;
          font-size: 15px !important;
        }
        .leaflet-bar a:hover { background: #f9fafb !important; color: #111 !important; }
        .leaflet-control-attribution {
          font-size: 10px !important;
          background: rgba(255,255,255,0.75) !important;
          padding: 2px 6px !important;
          border-radius: 4px 0 0 0 !important;
        }
      `}</style>
      <div ref={mapRef} className="w-full h-full" style={{ minHeight: 360 }} />
    </>
  );
}

function makeMarker(color: string, selected: boolean, hovered: boolean): string {
  // Size: selected = 32, hovered = 26, default = 20
  const size = selected ? 32 : hovered ? 26 : 20;
  const border = selected ? 3 : 2;
  const innerSize = Math.round(size * 0.28);

  const ring = selected
    ? `<div style="position:absolute;inset:-5px;border-radius:50%;border:1.5px solid ${color};opacity:0.22;pointer-events:none;"></div>`
    : "";

  return `
    <div style="
      position:relative;
      width:36px;height:36px;
      display:flex;align-items:center;justify-content:center;
    ">
      ${ring}
      <div style="
        width:${size}px;height:${size}px;
        border-radius:50%;
        background:${color};
        border:${border}px solid white;
        box-shadow:0 2px ${selected ? 12 : hovered ? 8 : 4}px rgba(0,0,0,${selected ? ".22" : ".15"});
        display:flex;align-items:center;justify-content:center;
        transition:all .15s ease;
      ">
        <div style="
          width:${innerSize}px;height:${innerSize}px;
          border-radius:50%;
          background:rgba(255,255,255,0.65);
        "></div>
      </div>
    </div>
  `;
}
