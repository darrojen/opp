"use client";

import React from "react";
import { Build } from "../types";

interface BuildDetailsProps {
  build: Build;
}

export function BuildDetails({ build }: BuildDetailsProps) {
  return (
    <article className="prose prose-gray max-w-none">
      {/* Header */}
      <h2 className="text-lg font-bold text-gray-900 mb-3 not-prose">
        {build.name} — {build.tagline.split("—")[1]?.trim() ?? build.tagline}
      </h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-8 not-prose">{build.description}</p>

      {/* Problem */}
      {build.problem && build.problem.length > 0 && (
        <section className="mb-8 not-prose">
          <h3 className="text-base font-bold text-gray-900 mb-4">Problem</h3>
          <p className="text-sm text-gray-600 mb-3">
            Traditional financial institutions want DeFi yields but face three critical barriers:
          </p>
          <ol className="space-y-3">
            {build.problem.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="shrink-0 w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-xs flex items-center justify-center font-semibold mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Solution */}
      {build.solution && build.solution.length > 0 && (
        <section className="not-prose">
          <h3 className="text-base font-bold text-gray-900 mb-4">Solution — Four Core Modules</h3>
          <div className="space-y-6">
            {build.solution.map((module, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-xs flex items-center justify-center font-semibold">
                    {i + 1}
                  </span>
                  <h4 className="text-sm font-semibold text-gray-900">{module.title}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-7 mb-2">
                  {module.description}
                </p>
                {module.bullets && (
                  <ul className="pl-7 space-y-1">
                    {module.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}