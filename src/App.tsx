import {
  ShieldAlert,
  AlertTriangle,
  Mail,
  Link2,
  Clock,
  Gift,
  Lock,
  Eye,
  ShieldCheck,
  Trash2,
  KeyRound,
  Headset,
  CheckCircle,
} from 'lucide-react';

/* ─── Aionos Logo ─── */
const AionosLogo = () => (
  <img
    src="https://www.aionos.io/__l5e/assets-v1/77d9c985-27e5-42e0-8c14-e9091ed20d58/aionos-logo-dark-v2.png"
    alt="AIONOS"
    className="h-8"
  />
);

/* ─── Phishing signs data ─── */
const signs = [
  {
    icon: Mail,
    title: 'Suspicious Sender',
    desc: 'The email came from an address that looked official but wasn\'t — like @ai0nos.io or @aionos-support.com instead of @aionos.io.',
  },
  {
    icon: Clock,
    title: 'Urgency & Threats',
    desc: 'The message pressured you to act immediately — threatening account suspension, data loss, or missed deadlines.',
  },
  {
    icon: Link2,
    title: 'Deceptive Links',
    desc: 'Links pointed to unfamiliar domains or misspelled URLs instead of the legitimate aionos.io website.',
  },
  {
    icon: Lock,
    title: 'Requests for Credentials',
    desc: 'You were asked to enter your password, OTP, credit card number, or other sensitive information.',
  },
  {
    icon: Gift,
    title: 'Too-Good-To-Be-True Offers',
    desc: 'Promises of free licenses, prizes, or exclusive deals designed to lure you into clicking.',
  },
  {
    icon: Eye,
    title: 'Generic Greetings',
    desc: 'The email used "Dear User" or "Dear Customer" instead of addressing you by your actual name.',
  },
];

/* ─── What to do steps ─── */
const steps = [
  {
    icon: ShieldCheck,
    num: '01',
    title: 'Don\'t Panic',
    desc: 'This was a controlled simulation. No credentials were captured, stored, or shared. Your accounts remain safe.',
  },
  {
    icon: Eye,
    num: '02',
    title: 'Review the Red Flags',
    desc: 'Go back and re-read the email. Try to spot the warning signs listed above — this builds your instinct for next time.',
  },
  {
    icon: Trash2,
    num: '03',
    title: 'Delete Suspicious Emails',
    desc: 'In a real scenario, never click links or download attachments. Mark the email as spam and delete it immediately.',
  },
  {
    icon: KeyRound,
    num: '04',
    title: 'Secure Your Accounts',
    desc: 'Use strong, unique passwords and enable two-factor authentication (2FA) on all your work and personal accounts.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ─── NAV BAR ─── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="px-6 sm:px-10 lg:px-16 flex items-center justify-between h-16">
          <AionosLogo />
          <span className="hidden sm:inline text-xs font-semibold tracking-widest uppercase text-teal-600">
            Security Awareness
          </span>
        </div>
      </nav>

      {/* ─── HERO – You've Been Phished ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50/60 to-cyan-50 py-20 lg:py-28">
        {/* decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-100/50 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          {/* icon */}
          <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-red-50 border-2 border-red-200 flex items-center justify-center shadow-sm">
            <ShieldAlert className="w-10 h-10 text-red-500" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            You've Been{' '}
            <span className="text-teal-600">Phished</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            …but don't worry — <strong className="text-slate-800">this was a safe, controlled simulation</strong> conducted
            by our IT Security team. No credentials were captured, stored, or misused.
          </p>

          {/* safe simulation badge */}
          <div className="mt-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium shadow-sm">
            <CheckCircle className="w-4 h-4" />
            Safe Simulation — No Data Compromised
          </div>
        </div>
      </section>

      {/* ─── WHY IT MATTERS ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-2">
              Why It Matters
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Phishing is the #1 cyber threat
            </h2>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl border border-teal-200 p-8 lg:p-10 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-teal-700" />
              </div>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Over 90% of data breaches</strong> start with a phishing email.
                  Attackers craft convincing messages that trick employees into revealing passwords, clicking malicious
                  links, or downloading infected attachments.
                </p>
                <p>
                  A single click can compromise your personal data, give attackers access to internal systems, and cost
                  the organization millions of dollars in damages and remediation.
                </p>
                <p>
                  Simulations like this one help you <strong className="text-slate-900">build awareness</strong> so you
                  can recognize and resist real phishing attempts when they arrive in your inbox.
                </p>
              </div>
            </div>
          </div>

          {/* stat pills */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '3.4 B+', label: 'phishing emails sent daily' },
              { stat: '90%', label: 'of breaches start with phishing' },
              { stat: '$4.9 M', label: 'average cost per incident' },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center rounded-xl border border-teal-200 bg-white py-5 px-4 shadow-sm"
              >
                <p className="text-2xl font-extrabold text-teal-600">{s.stat}</p>
                <p className="mt-1 text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMON SIGNS OF PHISHING ─── */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-2">
              Learn to Spot It
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Common Signs of Phishing
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Watch for these red flags the next time you receive a suspicious email.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {signs.map((s) => (
              <div
                key={s.title}
                className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-xl border border-teal-200 p-6 shadow-sm hover:shadow-md hover:border-teal-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1.5">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU SHOULD DO ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-2">
              Next Steps
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              What You Should Do
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div
                key={s.num}
                className="relative bg-gradient-to-br from-teal-50 to-gray-50 rounded-xl border border-teal-200 p-6 shadow-sm overflow-hidden"
              >
                {/* watermark number */}
                <span className="absolute -top-1 -right-1 text-6xl font-black text-teal-100/80 select-none pointer-events-none leading-none">
                  {s.num}
                </span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                    <s.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1.5">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEED HELP ─── */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-50/60 via-cyan-50/40 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <div className="mx-auto mb-5 w-14 h-14 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center">
            <Headset className="w-7 h-7 text-teal-600" />
          </div>

          <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-2">
            Need Help?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Reach Out to IT Security
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto mb-8">
            If you have any concerns, questions, or believe you may have encountered a real phishing
            attempt, please contact the IT Security team immediately. We're here to help.
          </p>

          <a
            href="mailto:it.security@aionos.ai"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Mail className="w-4 h-4" />
            Contact IT Security
          </a>

          {/* safe simulation reassurance */}
          <div className="mt-12 bg-white rounded-2xl border border-teal-200 p-6 lg:p-8 shadow-sm text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  This Was a Safe Simulation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  This phishing exercise was conducted as part of our ongoing security awareness
                  programme. <strong className="text-slate-800">No credentials, personal data, or sensitive information
                  were stored, recorded, or misused at any point.</strong> The purpose of this exercise is solely
                  to educate and help you recognise phishing attempts in the future. Your participation
                  helps strengthen our organisation's security posture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <AionosLogo />
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} AIONOS. All rights reserved. Security Awareness Programme.
          </p>
        </div>
      </footer>
    </div>
  );
}
