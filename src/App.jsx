import { useState, useEffect } from 'react';
import { Send, Sparkles, AlertCircle, RotateCcw, Star, CheckCircle, ThumbsUp, ThumbsDown, History } from 'lucide-react';

const ENHANCED_SYSTEM_PROMPT = `# Enhanced Question Refinement Engine v2.1

You are a Question Refinement Engine designed to transform vague problem formulations into precise, actionable questions through intelligent, adaptive conversation.

**CRITICAL CONSTRAINT: Target maximum of 8-10 exchanges total. Be efficient and focused.**

---

## Core Methodology

### Step 1: Initial Problem Type Recognition
When you receive a problem statement, first categorize it:

**Problem Types:**
- **Technical:** Missing knowledge, skills, or expertise
- **Interpersonal:** Relationship, communication, or team dynamics
- **Motivational:** Lack of clarity, drive, or direction
- **Resource:** Constraints around time, money, people, or tools
- **Structural:** Systems, processes, or organizational issues

**Why this matters:** Different problem types require different question approaches. Identify the primary type but remain flexible as the conversation evolves.

### Step 2: Contextual Analysis with Memory
For each user response, analyze and track:

**Vagueness Indicators:**
- Phrases like "often", "sometimes", "people say", "maybe", "probably"
- Generalizations without specifics
- Passive voice avoiding responsibility

**Mental Constraints:**
- Fixed thinking: "impossible", "never work", "too expensive", "we've tried everything"
- Hidden assumptions about resources, capabilities, or possibilities

**Response Quality:**
- Strong answers: Specific, concrete, measurable
- Weak answers: Vague, avoidant, circular
- Red flags: "I don't know", repeated deflection, emotional shutdown

**Conversation State Tracking:**
- What facts are now established
- Which assumptions have been surfaced
- What constraints have been identified
- Any circular patterns (same vague language repeated 2+ times)
- Emotional indicators: Frustration, anxiety, avoidance, or defensiveness
- **Exchange counter:** Track number of meaningful exchanges (TARGET: 8-10 max)

### Step 3: Adaptive Question Selection

Choose from the Harvard 5-Type Framework based on current needs:

**1. Investigative Questions** - When facts are missing or statements are vague
- Purpose: Gather concrete, specific information
- Use when: Initial problem statement is unclear, user gives non-specific answers
- Example: "What specific metrics are you currently using to measure this?"

**2. Speculative Questions** - When thinking appears constrained or limited
- Purpose: Challenge assumptions and open possibilities
- Use when: User expresses "impossibility" or fixed constraints
- Example: "What would become possible if that constraint didn't exist?"

**3. Productive Questions** - When discussion remains abstract
- Purpose: Move toward concrete, actionable steps
- Use when: Enough clarity exists but no action pathway identified
- Example: "What's one specific step you could take this week to test this?"

**4. Interpretative Questions** - When patterns emerge or deeper issues surface
- Purpose: Explore underlying meanings, connections, and recurring themes
- Use when: User repeats similar language, avoids certain topics, or shows patterns
- Example: "This is the third time you've mentioned time pressure—what does that pattern reveal?"

**5. Subjective Questions** - When emotional/human dimensions are avoided
- Purpose: Surface feelings, personal perspectives, and emotional blocks
- Use when: User is purely analytical, avoiding how they feel, or emotionally stuck
- Example: "How do you feel when you think about this situation?"

**6. Constraint-Mapping Questions** (NEW)
- Purpose: Explicitly surface hidden assumptions and limiting beliefs
- Use when: Early in conversation or when user seems stuck
- Examples:
  - "What would you need to believe was false for this to be solvable?"
  - "What resources are you assuming you don't have access to?"
  - "If someone solved this problem, what rule did they probably break?"

---

## Advanced Response Protocols

### Handling Weak Responses
If user gives vague or avoidant answer to your precise question:

**Don't:** Move to next question immediately
**Do:** Use a follow-up probe
- "I notice that's still fairly general. Can you give me a concrete example?"
- "Help me understand - when you say 'sometimes', can you recall the last specific time this happened?"

### Detecting Circular Thinking
If user returns to the same vague formulation 2+ times:

**Switch to Interpretative approach:**
"I notice you keep returning to [exact repeated phrase]. There might be something important here. What makes this particular framing feel so central to you?"

### Meta-Awareness Prompts
After every 4-5 meaningful exchanges, provide a progress reflection:

**Format:**
"Let's pause for a moment. You started with '[original vague statement]', and now you're asking '[current refined version]'. This shift suggests [insight about their evolving understanding]. Does that resonate?"

**Purpose:** Help users recognize their own progress and deepen their awareness

### Problem Transformation Showcase
After 2-3 exchanges when meaningful progress is visible:

**Explicitly show the transformation:**
"Notice how we've evolved your question. You began with '[original]', which was hard to act on because [why]. Now we're working with '[refined version]', which is more actionable because [specific improvements: measurable, specific stakeholders, clear constraints, etc.]. What do you notice about this shift?"

**Why this helps:** Makes the refinement process explicit and teaches the skill

---

## Progress Check-Ins & Question Formulations

**CRITICAL: Progress Checks at exchanges 3, 6, and 9 (if needed)**

**FORMAT YOUR RESPONSE EXACTLY LIKE THIS:**

REFLECTION: [1-2 sentence reflection on progress so far]

PROGRESS_CHECK
Option 1: [Precise question focusing on one angle]
Option 2: [Precise question from different angle]
Option 3: [Precise question if more clarity needed]

Progress: We're at about [X%] clarity. What's missing: [specific gaps].
END_PROGRESS_CHECK

NEXT_QUESTION: [Your next Socratic question OR ask if they're ready to finalize]

**Important:** 
- Use the exact tags PROGRESS_CHECK and END_PROGRESS_CHECK so the UI can detect and style them
- These formulations should be actual QUESTIONS, not problem statements
- Keep questions concise and actionable
- After exchange 6, consider asking if they want to finalize even if not 100% complete

---

## Completeness Criteria

Continuously evaluate if the refined question meets these standards:

✓ **Answerable:** Can be addressed with data, research, or action (not philosophical)
✓ **Measurable:** Success criteria are defined or implied  
✓ **Specific Stakeholders:** Clear who is involved or affected
✓ **Identified Constraints:** Boundaries, resources, or limitations are named
✓ **Timeframe:** When this needs to be resolved or tested

**When 3/5 criteria are met (lowered from 4/5 to respect exchange limit):**

Offer final formulations using this EXACT format:

REFLECTION: [Brief celebration of the journey]

FINAL_FORMULATIONS
Primary Question: [Most actionable, complete version]

Alternative Angle: [Different framing that might reveal new solutions]

Next-Level Question: [What comes after solving the primary]

This is actionable because:
✓ [Criterion 1 met]
✓ [Criterion 2 met]
✓ [Criterion 3 met]
END_FINAL_FORMULATIONS

Would you like to refine any of these further, or are you ready to work with them?

---

## Core Interaction Guidelines

**Always:**
- Use Socratic Method - stimulate thinking through inquiry, never give answers
- Provide brief reflection (1-2 sentences) before each question showing understanding
- Ask ONE targeted question at a time
- Never use leading questions that contain the answer
- Track what's been established to avoid redundant questions
- Stay curious and non-judgmental
- **Be efficient:** Target 8-10 total exchanges maximum

**Response Format:**
1. Brief reflection demonstrating understanding (can use REFLECTION: tag for progress checks)
2. One targeted question from the most appropriate category
3. [Internal tracking: question type, what you learned, conversation state, EXCHANGE COUNT]

**MANDATORY: Progress checks at exchanges 3, 6, and 9:**
- Use PROGRESS_CHECK tags
- Provide 3 question options
- After exchange 6, consider asking if ready to finalize

**When 3/5 completeness criteria met:** Use FINAL_FORMULATIONS tags

**Tone:**
- Warm but focused
- Intellectually curious
- Patient with circular thinking
- Celebratory of progress
- Direct when necessary
- **Efficient and respectful of user's time**

---

## Important Reminders

- **PRIMARY OUTPUT:** Precise, actionable QUESTIONS (not statements or solutions)
- **PRIMARY GOAL:** Transform vague problems into precise questions - this is the ONLY goal
- **TARGET: 8-10 exchanges maximum** - be efficient and focused
- Use PROGRESS_CHECK and FINAL_FORMULATIONS tags for proper UI formatting
- Progress checks at exchanges 3, 6, (and 9 if absolutely necessary)
- Never ask users what they want - the goal is always precise, actionable questions
- Questions should be immediately actionable
- After exchange 6, lean toward finalizing if good progress has been made
- Respect the user's time and energy

---

Begin applying this enhanced methodology to all problem statements you receive.`;

export default function QuestionRefinementEngine() {
  const [apiKey, setApiKey] = useState(() => {
    const saved = sessionStorage.getItem('qre_apiKey');
    return saved || '';
  });
  const [isApiKeySet, setIsApiKeySet] = useState(() => {
    const saved = sessionStorage.getItem('qre_apiKeySet');
    return saved === 'true';
  });
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem('qre_messages');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [questionFeedback, setQuestionFeedback] = useState({});
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('qre_messages', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    sessionStorage.setItem('qre_apiKey', apiKey);
    sessionStorage.setItem('qre_apiKeySet', isApiKeySet.toString());
  }, [apiKey, isApiKeySet]);

  const handleSetApiKey = () => {
    if (apiKey.trim()) {
      setIsApiKeySet(true);
      setError('');
    }
  };

  const sendToGoogleSheets = async (data) => {
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxu5Htm334sLDSHbT-O0zCybIc1t0gckoobJ_0QL37S9Dd8EGZXVJNxwWPBRx3PF-4J/exec'; // Paste your URL here!
  
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    console.log('Feedback sent to Google Sheets');
  } catch (error) {
    console.error('Error sending to Google Sheets:', error);
  }
};

  const handleQuestionFeedback = (messageIndex, questionIndex, feedback) => {
    const key = `${messageIndex}-${questionIndex}`;
    setQuestionFeedback(prev => ({
      ...prev,
      [key]: feedback
    }));
    
    sendToGoogleSheets({
      type: 'question_feedback',
      messageIndex,
      questionIndex,
      feedback,
      timestamp: new Date().toISOString()
    });
  };

  const extractQuestions = (messages) => {
    const questions = [];
    messages.forEach((msg, idx) => {
      if (msg.role === 'assistant' && msg.content.includes('PROGRESS_CHECK')) {
        const match = msg.content.match(/PROGRESS_CHECK\n([\s\S]*?)END_PROGRESS_CHECK/);
        if (match) {
          const optionsText = match[1];
          const options = optionsText.match(/Option \d+: (.*?)(?=\n|$)/g);
          if (options) {
            options.forEach((opt, optIdx) => {
              questions.push({
                text: opt.replace(/Option \d+: /, ''),
                messageIndex: idx,
                questionIndex: optIdx
              });
            });
          }
        }
      }
      if (msg.role === 'assistant' && msg.content.includes('FINAL_FORMULATIONS')) {
        const match = msg.content.match(/FINAL_FORMULATIONS\n([\s\S]*?)END_FINAL_FORMULATIONS/);
        if (match) {
          const finalText = match[1];
          const primary = finalText.match(/Primary Question: (.*?)(?=\n|$)/);
          const alternative = finalText.match(/Alternative Angle: (.*?)(?=\n|$)/);
          const nextLevel = finalText.match(/Next-Level Question: (.*?)(?=\n|$)/);
          
          if (primary) questions.push({ text: primary[1], type: 'Primary', messageIndex: idx });
          if (alternative) questions.push({ text: alternative[1], type: 'Alternative', messageIndex: idx });
          if (nextLevel) questions.push({ text: nextLevel[1], type: 'Next-Level', messageIndex: idx });
        }
      }
    });
    return questions;
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setError('');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    try {
      const response = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    apiKey: apiKey,
    systemPrompt: ENHANCED_SYSTEM_PROMPT,
    messages: [
      ...messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: userMessage }
    ]
  }),
  signal: controller.signal
});

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = data.content[0].text;

      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (err) {
      clearTimeout(timeoutId);
      
      if (err.name === 'AbortError') {
        setError('Request timed out. Please try again.');
      } else if (err.message.includes('401')) {
        setError('Invalid API key. Please check your API key and try again.');
      } else if (err.message.includes('429')) {
        setError('Rate limit exceeded. Please wait a moment and try again.');
      } else if (err.message.includes('Failed to fetch')) {
        setError('Network error. Please check your internet connection.');
      } else {
        setError(err.message || 'Failed to get response. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setInput('');
    setError('');
    setShowFeedback(false);
    setRating(0);
    setFeedbackText('');
    setFeedbackSubmitted(false);
    setQuestionFeedback({});
    sessionStorage.removeItem('qre_messages');
  };

  const handleEndSession = () => {
    setShowFeedback(true);
  };

  const handleSubmitFeedback = () => {
    sendToGoogleSheets({
      type: 'final_feedback',
      rating,
      feedbackText,
      totalExchanges: Math.floor(messages.length / 2),
      questionFeedback,
      timestamp: new Date().toISOString()
    });
    
    setFeedbackSubmitted(true);
    setTimeout(() => {
      handleReset();
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isApiKeySet) {
        handleSendMessage();
      } else {
        handleSetApiKey();
      }
    }
  };

  const renderMessage = (message, index) => {
    if (message.role === 'user') {
      return (
        <div key={index} className="flex justify-end">
          <div className="max-w-3xl rounded-2xl px-6 py-4 bg-indigo-600 text-white">
            <p className="whitespace-pre-wrap">{message.content}</p>
          </div>
        </div>
      );
    }

    const content = message.content;
    const hasProgressCheck = content.includes('PROGRESS_CHECK');
    const hasFinalFormulations = content.includes('FINAL_FORMULATIONS');

    if (hasProgressCheck) {
      const parts = content.split('PROGRESS_CHECK');
      const reflection = parts[0].replace('REFLECTION:', '').trim();
      const progressSection = parts[1].split('END_PROGRESS_CHECK')[0];
      const nextQuestion = parts[1].split('END_PROGRESS_CHECK')[1].replace('NEXT_QUESTION:', '').trim();
      
      const options = progressSection.match(/Option \d+: (.*?)(?=\n|$)/g) || [];
      const progressMatch = progressSection.match(/Progress: (.*?)(?=\n|$)/);
      const progressText = progressMatch ? progressMatch[1] : '';

      return (
        <div key={index} className="space-y-3">
          {reflection && (
            <div className="flex justify-start">
              <div className="max-w-3xl rounded-2xl px-6 py-4 bg-purple-50 text-gray-800 border border-purple-200">
                <p className="text-sm text-purple-900 font-medium mb-1">💭 Reflection</p>
                <p className="whitespace-pre-wrap">{reflection}</p>
              </div>
            </div>
          )}
          
          <div className="flex justify-start">
            <div className="max-w-3xl rounded-2xl px-6 py-5 bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-800 border-2 border-blue-300 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-bold text-blue-900">📊 PROGRESS CHECK</p>
                <button
                  onClick={() => setShowHistory(true)}
                  className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 flex items-center gap-1"
                >
                  <History className="w-3 h-3" />
                  View All Questions
                </button>
              </div>
              
              <div className="space-y-3 mb-3">
                {options.map((opt, optIdx) => {
                  const questionText = opt.replace(/Option \d+: /, '');
                  const feedbackKey = `${index}-${optIdx}`;
                  const currentFeedback = questionFeedback[feedbackKey];
                  
                  return (
                    <div key={optIdx} className="bg-white rounded-lg p-3 border border-blue-200">
                      <p className="text-sm font-medium text-gray-900 mb-2">{questionText}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleQuestionFeedback(index, optIdx, 'like')}
                          className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm transition-colors ${
                            currentFeedback === 'like'
                              ? 'bg-green-100 text-green-700 border-2 border-green-500'
                              : 'bg-gray-100 text-gray-600 hover:bg-green-50'
                          }`}
                        >
                          <ThumbsUp className="w-4 h-4" />
                          Like
                        </button>
                        <button
                          onClick={() => handleQuestionFeedback(index, optIdx, 'dislike')}
                          className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm transition-colors ${
                            currentFeedback === 'dislike'
                              ? 'bg-red-100 text-red-700 border-2 border-red-500'
                              : 'bg-gray-100 text-gray-600 hover:bg-red-50'
                          }`}
                        >
                          <ThumbsDown className="w-4 h-4" />
                          Dislike
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {progressText && (
                <p className="text-sm text-blue-800 italic">{progressText}</p>
              )}
            </div>
          </div>
          
          {nextQuestion && (
            <div className="flex justify-start">
              <div className="max-w-3xl rounded-2xl px-6 py-4 bg-white text-gray-800 border border-gray-200 shadow-sm">
                <p className="text-sm text-indigo-600 font-medium mb-1">❓ Next Question</p>
                <p className="whitespace-pre-wrap">{nextQuestion}</p>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (hasFinalFormulations) {
      const parts = content.split('FINAL_FORMULATIONS');
      const reflection = parts[0].replace('REFLECTION:', '').trim();
      const finalSection = parts[1].split('END_FINAL_FORMULATIONS')[0];
      const closingQuestion = parts[1].split('END_FINAL_FORMULATIONS')[1].trim();

      return (
        <div key={index} className="space-y-3">
          {reflection && (
            <div className="flex justify-start">
              <div className="max-w-3xl rounded-2xl px-6 py-4 bg-purple-50 text-gray-800 border border-purple-200">
                <p className="text-sm text-purple-900 font-medium mb-1">💭 Reflection</p>
                <p className="whitespace-pre-wrap">{reflection}</p>
              </div>
            </div>
          )}
          
          <div className="flex justify-start">
            <div className="max-w-3xl rounded-2xl px-6 py-5 bg-gradient-to-r from-green-50 to-emerald-50 text-gray-800 border-2 border-green-400 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-bold text-green-900">✅ FINAL FORMULATIONS</p>
                <button
                  onClick={() => setShowHistory(true)}
                  className="text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 flex items-center gap-1"
                >
                  <History className="w-3 h-3" />
                  View All Questions
                </button>
              </div>
              <div className="whitespace-pre-wrap text-gray-900">{finalSection}</div>
            </div>
          </div>
          
          {closingQuestion && (
            <div className="flex justify-start">
              <div className="max-w-3xl rounded-2xl px-6 py-4 bg-white text-gray-800 border border-gray-200 shadow-sm">
                <p className="whitespace-pre-wrap">{closingQuestion}</p>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={index} className="flex justify-start">
        <div className="max-w-3xl rounded-2xl px-6 py-4 bg-white text-gray-800 border border-gray-200 shadow-sm">
          <p className="whitespace-pre-wrap">{content}</p>
        </div>
      </div>
    );
  };

  if (!isApiKeySet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-indigo-100">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Sparkles className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Question Refinement Engine</h1>
          <p className="text-gray-600 mb-2 text-center text-sm">Transform vague problems into precise, actionable questions</p>
          <p className="text-indigo-600 mb-6 text-center text-xs font-semibold">Enhanced v2.1 with Adaptive Intelligence</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anthropic API Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="sk-ant-..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
            </div>
            
            <button
              onClick={handleSetApiKey}
              disabled={!apiKey.trim()}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Start Refining Questions
            </button>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
              <p className="text-blue-800 font-medium mb-1">Need an API key?</p>
              <p className="text-blue-700">Get one at <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="underline">console.anthropic.com</a></p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-sm">
              <p className="text-indigo-800 font-semibold mb-2">What's New in v2.1:</p>
              <ul className="text-indigo-700 space-y-1 text-xs">
                <li>• Like/Dislike feedback on each question</li>
                <li>• Visual progress checks every 3 exchanges</li>
                <li>• Question history summary</li>
                <li>• Target: 8-10 exchanges for efficiency</li>
                <li>• Improved conversation persistence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showFeedback) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-indigo-100">
          {!feedbackSubmitted ? (
            <>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Sparkles className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">How was your experience?</h2>
              <p className="text-gray-600 mb-6 text-center text-sm">Your feedback helps us improve the Question Refinement Engine</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                    Rate your experience
                  </label>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-10 h-10 ${
                            star <= (hoverRating || rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What could have been better? (optional)
                  </label>
                  <textarea
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Share your thoughts..."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Skip
                  </button>
                  <button
                    onClick={handleSubmitFeedback}
                    disabled={rating === 0}
                    className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank you!</h2>
              <p className="text-gray-600">Your feedback has been submitted.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (showHistory) {
    const allQuestions = extractQuestions(messages);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full border border-indigo-100 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-100 p-2 rounded-full">
                <History className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Question History</h2>
            </div>
            <button
              onClick={() => setShowHistory(false)}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              ✕ Close
            </button>
          </div>
          
          <p className="text-gray-600 mb-6 text-sm">All questions suggested during this session ({allQuestions.length} total)</p>
          
          <div className="space-y-4">
            {allQuestions.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No questions formulated yet. Continue the conversation to see suggested questions here.</p>
            ) : (
              allQuestions.map((q, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  {q.type && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                      {q.type}
                    </span>
                  )}
                  <p className="text-gray-900">{q.text}</p>
                  {q.questionIndex !== undefined && (
                    <div className="flex gap-2 mt-2">
                      {questionFeedback[`${q.messageIndex}-${q.questionIndex}`] === 'like' && (
                        <span className="text-xs text-green-600 flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" /> Liked
                        </span>
                      )}
                      {questionFeedback[`${q.messageIndex}-${q.questionIndex}`] === 'dislike' && (
                        <span className="text-xs text-red-600 flex items-center gap-1">
                          <ThumbsDown className="w-3 h-3" /> Disliked
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
          
          <button
            onClick={() => setShowHistory(false)}
            className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Conversation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      <header className="bg-white border-b border-indigo-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Sparkles className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Question Refinement Engine</h1>
              <p className="text-xs text-indigo-600 font-semibold">
                Enhanced v2.1 • Powered by Claude
                {messages.length > 0 && ` • ${Math.floor(messages.length / 2)} exchanges`}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {messages.length > 0 && (
              <button
                onClick={handleEndSession}
                className="text-sm bg-green-600 text-white px-4 py-1.5 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                End Session
              </button>
            )}
            <button
              onClick={handleReset}
              className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              title="Start new conversation"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={() => {
                setIsApiKeySet(false);
                setMessages([]);
                sessionStorage.clear();
              }}
              className="text-sm text-gray-600 hover:text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Change Key
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {messages.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to v2.1!</h2>
              <p className="text-gray-600 max-w-md mx-auto mb-6">Share a vague problem or challenge. I'll help you transform it into a precise, actionable question in under 10 exchanges.</p>
              
              <div className="max-w-2xl mx-auto bg-white rounded-xl border border-indigo-100 p-6 text-left">
                <h3 className="font-semibold text-gray-800 mb-3">Enhanced Features:</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Like/Dislike Buttons:</strong> Rate each suggested question</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Visual Progress Checks:</strong> Every 3 exchanges with color-coded sections</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Question History:</strong> View all suggested questions anytime</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Efficient Process:</strong> Target 8-10 exchanges maximum</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Conversation Persistence:</strong> Your session survives page refreshes</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message, index) => renderMessage(message, index))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="animate-pulse">Analyzing your response</div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-red-800">{error}</p>
                  <button
                    onClick={() => {
                      setError('');
                      setIsLoading(false);
                    }}
                    className="mt-2 text-sm text-red-700 underline hover:text-red-900"
                  >
                    Try again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-indigo-100 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Describe your problem or challenge..."
              rows="2"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
