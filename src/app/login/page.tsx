"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogIn, UserPlus, Lock, Mail, User, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(true);
  };

  return (
    <main className="flex-grow flex items-center justify-center py-20 px-6 bg-white mt-[4rem]">
      <div className="w-full max-w-sm">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Products</span>
          </Link>
        </div>

        <div className="rounded-2xl border border-neutral-100 p-8 shadow-sm bg-white">
          <div className="text-center pb-6">
            <div className="relative w-10 h-10 mx-auto mb-3">
              <Image
                src="https://benuagreen.com/storage/img/logo.png"
                alt="Benua Green Energy"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h1 className="text-xl font-medium text-neutral-900">
              {isLoginTab ? "Customer Sign In" : "Create Account"}
            </h1>
            <p className="text-xs text-neutral-400 mt-1 font-light">
              {isLoginTab
                ? "Sign in to access your portal and orders"
                : "Register for Benua Green Energy customer account"}
            </p>

            {/* Tab switch buttons */}
            <div className="flex bg-neutral-100 p-1 rounded-full mt-6">
              <button
                type="button"
                onClick={() => {
                  setIsLoginTab(true);
                  setSuccessMsg(false);
                }}
                className={`flex-1 py-1.5 text-xs font-medium rounded-full transition-all flex items-center justify-center gap-1.5 ${
                  isLoginTab ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsLoginTab(false);
                  setSuccessMsg(false);
                }}
                className={`flex-1 py-1.5 text-xs font-medium rounded-full transition-all flex items-center justify-center gap-1.5 ${
                  !isLoginTab ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                Register
              </button>
            </div>
          </div>

          <div>
            {successMsg ? (
              <div className="p-6 text-center bg-neutral-50 rounded-2xl border border-neutral-100 space-y-3">
                <CheckCircle2 className="w-8 h-8 text-neutral-900 mx-auto" />
                <h4 className="font-medium text-sm text-neutral-900">
                  {isLoginTab ? "Signed in successfully" : "Registration submitted"}
                </h4>
                <p className="text-xs text-neutral-400 font-light">
                  Welcome to Benua Green Energy.
                </p>
                <Link
                  href="/"
                  className="bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium rounded-full py-2 px-5 mt-2 inline-block transition-colors"
                >
                  Return to Products
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLoginTab && (
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-neutral-600 uppercase tracking-wider">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-9 pr-3.5 py-2 rounded-lg border border-neutral-200 text-xs focus:outline-none focus:border-neutral-400"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-neutral-600 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full pl-9 pr-3.5 py-2 rounded-lg border border-neutral-200 text-xs focus:outline-none focus:border-neutral-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-medium text-neutral-600 uppercase tracking-wider">
                      Password
                    </label>
                    {isLoginTab && (
                      <a href="#" className="text-[11px] text-neutral-400 hover:text-neutral-900">
                        Forgot?
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3.5 py-2 rounded-lg border border-neutral-200 text-xs focus:outline-none focus:border-neutral-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full text-xs transition-colors mt-2"
                >
                  {isLoginTab ? "Sign In" : "Create Account"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

