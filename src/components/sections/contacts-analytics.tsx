"use client";

import React from 'react';
import { Users, BarChart3, ChevronDown } from 'lucide-react';

const ContactsAnalytics = () => {
  return (
    <section className="mx-auto px-6 py-24 max-w-5xl md:max-w-7xl">
      <div className="mb-16">
        <h2 className="font-serif text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] text-white mb-4">
          Go beyond editing
        </h2>
        <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-[#888888] font-normal max-w-[32rem]">
          Group and control your contacts in a simple and intuitive way. Straightforward analytics and reporting tools that will help you send better emails.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Management Column */}
        <div className="flex flex-col">
          <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/10 bg-black p-6">
            {/* Mock Dashboard UI: Contact Management */}
            <div className="h-full w-full rounded-xl bg-[#0a0a0a] border border-white/5 p-6 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                   <div className="h-10 w-10 rounded-lg bg-[#a1fcea]/10 border border-[#a1fcea]/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#a1fcea]" />
                   </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#888888] font-medium">Audience</div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium text-white">Newsletter subscribers</span>
                    <ChevronDown className="h-4 w-4 text-[#888888]" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#888888] font-medium mb-2">All Contacts</div>
                  <div className="text-xl font-medium text-white">1,034</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#888888] font-medium mb-2">Unsubscribed</div>
                  <div className="text-xl font-medium text-white">5</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#888888] font-medium mb-2">Metrics</div>
                  <div className="h-4 w-16 bg-gradient-to-r from-transparent to-[#a1fcea]/40 rounded-sm skew-x-[-20deg]" />
                </div>
              </div>
            </div>
            {/* Background Glow */}
            <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-[#a1fcea]/10 blur-[100px] pointer-events-none" />
          </div>

          <div className="flex items-center gap-3 mb-3">
            <Users className="h-5 w-5 text-white" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-white">Contact Management</h3>
          </div>
          <p className="text-[#888888] text-[15px] leading-relaxed mb-4">
            Import your list in minutes, regardless the size of your audience. Get full visibility of each contact and their personal attributes.
          </p>
          <a href="#" className="text-sm font-medium text-white hover:opacity-80 transition-opacity">
            Learn more
          </a>
        </div>

        {/* Broadcast Analytics Column */}
        <div className="flex flex-col">
          <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/10 bg-black p-6">
            {/* Mock Dashboard UI: Broadcast Analytics */}
            <div className="h-full w-full rounded-xl bg-[#0a0a0a] border border-white/5 p-6 shadow-2xl flex gap-6">
              {/* Deliverability Card */}
              <div className="flex-1 rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-5">
                 <div className="text-[10px] uppercase tracking-wider text-[#888888] font-medium mb-2">Deliverability</div>
                 <div className="text-3xl font-medium text-white mb-6">98%</div>
                 <div className="space-y-3">
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-emerald-400" />
                       <span className="text-xs text-[#888888]">Delivered</span>
                     </div>
                     <span className="text-xs text-white">3,204</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-red-400" />
                       <span className="text-xs text-[#888888]">Bounced</span>
                     </div>
                     <span className="text-xs text-white">60</span>
                   </div>
                 </div>
                 {/* Visual decoration */}
                 <div className="absolute top-1/2 right-4 h-24 w-24 bg-[#a1fcea]/20 blur-3xl pointer-events-none" />
              </div>

              {/* Engagement Card */}
              <div className="w-[120px] rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <div className="text-[10px] uppercase tracking-wider text-[#888888] font-medium mb-2">Engagement</div>
                <div className="text-2xl font-medium text-white mb-4">41%</div>
                <div className="space-y-4">
                   <div className="flex items-center gap-2">
                     <div className="h-2 w-2 rounded-full bg-blue-400" />
                     <span className="text-[10px] text-[#888888]">Opened</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="h-2 w-2 rounded-full bg-purple-400" />
                     <span className="text-[10px] text-[#888888]">Clicked</span>
                   </div>
                </div>
              </div>
            </div>
            {/* Background Glow */}
            <div className="absolute -bottom-20 -right-20 h-64 w-64 bg-[#a1fcea]/10 blur-[100px] pointer-events-none" />
          </div>

          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="h-5 w-5 text-white" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-white">Broadcast Analytics</h3>
          </div>
          <p className="text-[#888888] text-[15px] leading-relaxed mb-4">
            Unlock powerful insights and understand exactly how your audience is interacting with your broadcast emails.
          </p>
          <a href="#" className="text-sm font-medium text-white hover:opacity-80 transition-opacity">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsAnalytics;