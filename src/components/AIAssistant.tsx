import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Phone, Calendar, AlertTriangle, ShieldCheck, ArrowRight, RotateCcw, Zap } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, AREAS_COVERED } from '../data/companyData';

interface Message {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  isSafetyAlert?: boolean;
  actionType?: 'call' | 'quote' | 'gas';
}

interface AIAssistantProps {
  onQuoteClick: (serviceTitle?: string) => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ onQuoteClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Hi! I'm the London Plumbers assistant. What can I help you with today? (Please note: I am an AI assistant, not a human engineer. For urgent leaks or heating breakdowns, our team is available 24/7 on 07796 345453)."
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedChips = [
    'I have a plumbing emergency.',
    "My boiler isn't working.",
    'I have a leaking pipe.',
    'I need a quote.',
    'What areas do you cover?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Client-side knowledge engine fallback adhering to all rules
  const generateLocalResponse = (query: string): { text: string; isSafetyAlert?: boolean; actionType?: 'call' | 'quote' | 'gas' } => {
    const q = query.toLowerCase();

    // 1. Critical Gas Safety Check
    if (q.includes('gas') && (q.includes('smell') || q.includes('leak') || q.includes('hiss') || q.includes('fume'))) {
      return {
        text: "⚠️ IMMEDIATE GAS SAFETY WARNING: If you suspect a gas leak or smell gas, please leave the building immediately. Do not operate electrical switches, do not use naked flames, and contact the UK National Gas Emergency Service straight away on 0800 111 999 (24 hours, free). Please do not stay on chat.",
        isSafetyAlert: true,
        actionType: 'gas'
      };
    }

    // 2. Emergency query
    if (q.includes('emergency') || q.includes('burst') || q.includes('flood') || q.includes('urgent') || q.includes('now')) {
      return {
        text: "For urgent plumbing emergencies such as burst pipes, heavy leaks, or active flooding, we strongly advise calling our 24/7 emergency telephone line directly on 07796 345453. Our dispatch team will assess the issue and coordinate assistance immediately.",
        actionType: 'call'
      };
    }

    // 3. Boiler breakdown
    if (q.includes('boiler') || q.includes('hot water') || q.includes('heating problem') || q.includes('error code') || q.includes('pressure')) {
      return {
        text: "Our Gas Safe registered engineers diagnose and repair boiler breakdowns, loss of hot water, heating faults, and system error codes. Please note: as an AI assistant, I cannot conclusively diagnose boiler faults or advise you to open gas appliances. For an expert inspection, call 07796 345453 or request a quote below.",
        actionType: 'quote'
      };
    }

    // 4. Leaks & taps
    if (q.includes('leak') || q.includes('pipe') || q.includes('tap') || q.includes('drip')) {
      return {
        text: "We provide comprehensive leak detection and repairs for dripping taps, hidden pipe joints, and ceiling leaks. If the leak is active and causing damage, please locate your main water stopcock to turn off the water, then call us on 07796 345453.",
        actionType: 'call'
      };
    }

    // 5. Quote enquiry & pricing
    if (q.includes('quote') || q.includes('price') || q.includes('cost') || q.includes('estimate') || q.includes('rate')) {
      return {
        text: "London Plumbers provides clear, upfront pricing with no hidden surprises. Because every property layout and plumbing job is unique, we encourage customers to discuss the work with our team. You can submit our online quote request form or call 07796 345453 directly.",
        actionType: 'quote'
      };
    }

    // 6. Areas covered
    if (q.includes('area') || q.includes('where') || q.includes('ealing') || q.includes('postcode') || q.includes('london')) {
      const areaList = AREAS_COVERED.map(a => a.name).join(', ');
      return {
        text: `We cover Greater London, with regular rapid attendance in ${areaList} and surrounding postcodes. Our central dispatch hub is at 43 Sunnyside Road, London, W5 5HT. Call 07796 345453 to check engineer availability in your area.`,
        actionType: 'call'
      };
    }

    // 7. Drain unblocking
    if (q.includes('drain') || q.includes('block') || q.includes('toilet') || q.includes('sink')) {
      return {
        text: "Our technicians use professional rodding and mechanical unblocking equipment to clear blocked toilets, sinks, and domestic waste pipes quickly and cleanly. Call 07796 345453 or submit an enquiry to arrange a visit.",
        actionType: 'call'
      };
    }

    // 8. General fallback
    return {
      text: "London Plumbers provides 24/7 emergency plumbing, Gas Safe boiler repairs, central heating maintenance, bathroom plumbing, and drain unblocking across Greater London. Would you like to speak to an engineer on 07796 345453 or submit an appointment enquiry?",
      actionType: 'quote'
    };
  };

  const handleSendMessage = async (userQuery?: string) => {
    const textToSend = userQuery || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend.trim()
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: textToSend,
          history: updatedMessages
        })
      });

      const data = await response.json();

      if (data && data.reply) {
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'assistant',
            text: data.reply,
            isSafetyAlert: data.isSafetyAlert,
            actionType: data.isSafetyAlert ? 'gas' : (data.reply.toLowerCase().includes('call') ? 'call' : 'quote')
          }
        ]);
      } else {
        // Fallback to local intelligent assistant engine
        const fallback = generateLocalResponse(textToSend);
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'assistant',
            text: fallback.text,
            isSafetyAlert: fallback.isSafetyAlert,
            actionType: fallback.actionType
          }
        ]);
      }
    } catch (e) {
      const fallback = generateLocalResponse(textToSend);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: fallback.text,
          isSafetyAlert: fallback.isSafetyAlert,
          actionType: fallback.actionType
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: "Hi! I'm the London Plumbers assistant. What can I help you with today? (Please note: I am an AI assistant, not a human engineer. For urgent leaks or heating breakdowns, our team is available 24/7 on 07796 345453)."
      }
    ]);
  };

  return (
    <>
      {/* Closed Floating Dock: Compact circular 54px button in bottom-right */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open London Plumbers AI Support Assistant"
          className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-40 w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#168BFA] hover:bg-[#1272CE] active:bg-[#0D62B3] text-white flex items-center justify-center shadow-xl shadow-[#168BFA]/35 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#168BFA]"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Opened Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-scaleUp">
          
          {/* Header */}
          <div className="bg-[#081526] text-white p-3.5 px-4 flex items-center justify-between border-b border-[#10263D]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#168BFA] flex items-center justify-center text-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold leading-tight">London Plumbers Assistant</span>
                  <span className="flex items-center text-[10px] text-cyan-300 font-medium">
                    <Zap className="w-2.5 h-2.5 text-cyan-400 fill-cyan-400 mr-0.5" />
                    Fast AI
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">Multi-Turn Gemini • 24/7 Support</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-[#10263D] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat assistant"
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-[#10263D] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F4F7FA]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#168BFA] text-white rounded-br-xs'
                      : m.isSafetyAlert
                      ? 'bg-amber-100 text-amber-900 border border-amber-300 rounded-bl-xs font-semibold'
                      : 'bg-white text-[#081526] border border-slate-200/90 rounded-bl-xs shadow-2xs'
                  }`}
                >
                  <p>{m.text}</p>

                  {/* Immediate Action Buttons inside Assistant Bubbles */}
                  {m.actionType === 'call' && (
                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-2">
                      <a
                        href={BUSINESS_INFO.phoneTel}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#168BFA] text-white font-bold text-[11px] hover:bg-[#1272CE]"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call 07796 345453</span>
                      </a>
                    </div>
                  )}

                  {m.actionType === 'quote' && (
                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpen(false);
                          onQuoteClick();
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#081526] text-white font-semibold text-[11px] hover:bg-[#10263D]"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>Request a Quote</span>
                      </button>
                    </div>
                  )}

                  {m.actionType === 'gas' && (
                    <div className="mt-2 pt-2 border-t border-amber-200">
                      <a
                        href="tel:0800111999"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold text-[11px] hover:bg-red-700"
                      >
                        <AlertTriangle className="w-3 h-3" />
                        <span>Call Gas Emergency 0800 111 999</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-1 text-slate-500 text-xs px-2 py-1">
                <span className="w-1.5 h-1.5 bg-[#168BFA] rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-[#168BFA] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-[#168BFA] rounded-full animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] text-slate-500 ml-1">London Plumbers assistant typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Chips (Scrollable) */}
          <div className="px-3 py-2 bg-white border-t border-slate-200 flex gap-1.5 overflow-x-auto no-scrollbar">
            {suggestedChips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(chip)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#F4F7FA] hover:bg-[#EBF3FC] text-[10px] font-medium text-slate-700 hover:text-[#168BFA] border border-slate-200 transition-colors shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Quick Action Dock in Chat */}
          <div className="px-3 py-1.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="text-[#168BFA] font-bold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>Call: 07796 345453</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onQuoteClick();
              }}
              className="text-slate-600 font-semibold hover:text-[#081526]"
            >
              Request Quote →
            </button>
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about plumbing, boilers, quotes..."
              className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#168BFA]"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="p-2 rounded-xl bg-[#168BFA] hover:bg-[#1272CE] text-white disabled:opacity-40 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
