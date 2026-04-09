<template>
  <section class="kids-overview">
    <main-nav />

    <div class="ko-hero">
      <div class="ko-hero-tag">&#10022; For ages 6–14</div>
      <h1>Every Child Becomes<br>the Hero of <em>Their Own Story</em></h1>
      <p>Scenario-based quests reveal your child's natural strengths — then AI writes them into a personalized storybook that grows with every adventure.</p>
      <div class="ko-hero-btns">
        <nuxt-link to="/auth/registration" class="ko-btn-primary">Start the Adventure</nuxt-link>
        <a href="#how-it-works" class="ko-btn-ghost">See How It Works</a>
      </div>
      <div class="ko-mockup-wrap">
        <div class="ko-mockup-bar">
          <div class="ko-mockup-dot" style="background:#ff5f57;"></div>
          <div class="ko-mockup-dot" style="background:#febc2e;"></div>
          <div class="ko-mockup-dot" style="background:#28c840;"></div>
          <div class="ko-mockup-url">theassessmentlibrary.com/dashboard</div>
        </div>
        <div class="ko-mockup-inner">
          <div class="ko-char-card">
            <div class="ko-char-card-name">Sparkles</div>
            <div class="ko-char-type">The Analyzer</div>
            <div v-for="stat in mockStats" :key="stat.label" class="ko-stat-row">
              <span class="ko-stat-label">{{ stat.label }}</span>
              <div class="ko-stat-track"><div class="ko-stat-fill" :style="{ background: stat.color, width: stat.width }"></div></div>
              <span class="ko-stat-val">{{ stat.value }}</span>
            </div>
          </div>
          <div class="ko-world-card">
            <div class="ko-world-bg"></div>
            <div class="ko-world-glow"></div>
            <div class="ko-world-title">Sparkles's World!</div>
            <div class="ko-world-sub">Sci-Fi Galaxy &middot; 3 worlds unlocked</div>
          </div>
          <div class="ko-quests-card">
            <div class="ko-quests-title">Allie's Quests</div>
            <div class="ko-quest-conquered">Quests Conquered</div>
            <div v-for="(quest, qi) in mockQuests" :key="qi" class="ko-quest-item" :style="qi === mockQuests.length - 1 ? 'border-bottom:none' : ''">
              <div class="ko-quest-disc" :style="{ background: quest.color }">{{ quest.trait }}</div>
              <div class="ko-quest-info">
                <div class="ko-quest-name">{{ quest.name }}</div>
                <div class="ko-quest-date">{{ quest.date }}</div>
              </div>
              <span class="ko-quest-btn">View Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quest Loop -->
    <div style="padding:80px 40px; background:#f5f0e8;">
      <div style="max-width:860px; margin:0 auto;">
        <div class="ko-section-eyebrow ko-dark">The Quest Loop</div>
        <h2 class="ko-section-h2 ko-dark">Every Quest Earns a New Chapter</h2>
        <p class="ko-section-p ko-dark">The Assessment Library runs on a simple, powerful loop — the more quests your child completes, the richer and longer their personal storybook becomes.</p>

        <div class="ko-quest-loop-steps">
          <div style="text-align:center;">
            <div style="width:48px;height:48px;border-radius:50%;background:#fef3c7;display:flex;align-items:center;justify-content:center;font-size:22px;margin:0 auto 12px;">&#x1F4D6;</div>
            <div style="font-family:'Merriweather',serif;font-size:15px;font-weight:700;color:#1a2540;margin-bottom:6px;">Take a Quest</div>
            <div style="font-size:12px;color:#888;line-height:1.5;max-width:140px;margin:0 auto;">Your child completes a scenario-based DISC assessment</div>
          </div>
          <div class="ko-quest-loop-arrow">&#8594;</div>
          <div style="text-align:center;">
            <div style="width:48px;height:48px;border-radius:50%;background:#f0fdf4;display:flex;align-items:center;justify-content:center;font-size:22px;margin:0 auto 12px;">&#x1F3C6;</div>
            <div style="font-family:'Merriweather',serif;font-size:15px;font-weight:700;color:#1a2540;margin-bottom:6px;">Results Calculated</div>
            <div style="font-size:12px;color:#888;line-height:1.5;max-width:140px;margin:0 auto;">DISC scores update &middot; Stats level up &middot; Dominant trait identified</div>
          </div>
          <div class="ko-quest-loop-arrow">&#8594;</div>
          <div style="text-align:center;">
            <div style="width:48px;height:48px;border-radius:50%;background:#eff6ff;display:flex;align-items:center;justify-content:center;font-size:22px;margin:0 auto 12px;">&#x1FA99;</div>
            <div style="font-family:'Merriweather',serif;font-size:15px;font-weight:700;color:#1a2540;margin-bottom:6px;">Earn a Story Token</div>
            <div style="font-size:12px;color:#888;line-height:1.5;max-width:140px;margin:0 auto;">One completed quest = one token to generate a new chapter</div>
          </div>
          <div class="ko-quest-loop-arrow">&#8594;</div>
          <div style="text-align:center;">
            <div style="width:48px;height:48px;border-radius:50%;background:#faf5ff;display:flex;align-items:center;justify-content:center;font-size:22px;margin:0 auto 12px;">&#x2728;</div>
            <div style="font-family:'Merriweather',serif;font-size:15px;font-weight:700;color:#1a2540;margin-bottom:6px;">Generate a Chapter</div>
            <div style="font-size:12px;color:#888;line-height:1.5;max-width:140px;margin:0 auto;">AI writes a unique chapter using their trait, world, and companions</div>
          </div>
        </div>

        <div class="ko-token-box">
          <div>
            <div style="font-size:12px;font-weight:800;color:#86efac;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:12px;">Story Tokens</div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;max-width:200px;">
              <div v-for="n in 6" :key="'tok-'+n" style="width:36px;height:36px;border-radius:8px;background:#1a9e6e;display:flex;align-items:center;justify-content:center;font-size:16px;">&#x1F4D6;</div>
              <div v-for="n in 4" :key="'emp-'+n" style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.08);border:1px dashed rgba(255,255,255,0.2);"></div>
            </div>
            <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:10px;">6 tokens earned &middot; 4 more quests to go</div>
          </div>
          <div style="flex:1;">
            <h3 style="font-family:'Merriweather',serif;font-size:20px;color:#fff;margin-bottom:8px;">One Quest. One Token. One Chapter.</h3>
            <p style="font-size:14px;color:rgba(255,255,255,0.6);line-height:1.6;margin-bottom:16px;">Every assessment your child completes earns exactly one story token. Tokens are spent to generate new chapters — so the more quests they take, the longer and richer their personal storybook grows.</p>
            <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:12px 16px;">
              <div style="font-size:20px;">&#x1F511;</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.8);font-weight:700;"><span style="color:#86efac;">1 completed quest</span> = <span style="color:#86efac;">1 story token</span> = <span style="color:#86efac;">1 new chapter</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- How It Works -->
    <div id="how-it-works" style="padding:80px 40px; background:#fff;">
      <div style="max-width:900px; margin:0 auto;">
        <div class="ko-section-eyebrow ko-dark">How It Works</div>
        <h2 class="ko-section-h2 ko-dark">Every Chapter Is Uniquely Yours</h2>
        <p class="ko-section-p ko-dark" style="max-width:560px;">Three inputs combine to generate a chapter no other child will ever read — your world, your voice, and your growth all shape the story.</p>

        <!-- Inputs to Output -->
        <div class="ko-engine-grid">
          <div style="display:flex; flex-direction:column; gap:14px;">
            <div style="background:#f5f0e8;border:1px solid #e5ddd0;border-radius:14px;padding:18px 20px;display:flex;align-items:flex-start;gap:14px;">
              <div style="width:40px;height:40px;min-width:40px;border-radius:10px;background:#fef3c7;display:flex;align-items:center;justify-content:center;font-size:18px;">&#x1F30D;</div>
              <div>
                <div style="font-size:14px;font-weight:800;color:#1a2540;margin-bottom:4px;">Unlocked World</div>
                <div style="font-size:12px;color:#888;line-height:1.5;">The background your child has unlocked becomes the chapter's vivid setting — described in full detail.</div>
                <span style="display:inline-block;margin-top:6px;font-size:11px;font-weight:700;padding:3px 10px;border-radius:100px;background:#fff;border:1px solid #ddd;color:#555;">&#x1F680; Space Station orbiting a ringed planet</span>
              </div>
            </div>
            <div style="background:#f5f0e8;border:1px solid #e5ddd0;border-radius:14px;padding:18px 20px;display:flex;align-items:flex-start;gap:14px;">
              <div style="width:40px;height:40px;min-width:40px;border-radius:10px;background:#eff6ff;display:flex;align-items:center;justify-content:center;font-size:18px;">&#x1F9E0;</div>
              <div>
                <div style="font-size:14px;font-weight:800;color:#1a2540;margin-bottom:4px;">Dominant DISC Trait</div>
                <div style="font-size:12px;color:#888;line-height:1.5;">The highest-scoring trait from their latest quest becomes the character's voice, decisions, and personality.</div>
                <span style="display:inline-block;margin-top:6px;font-size:11px;font-weight:700;padding:3px 10px;border-radius:100px;background:#fff;border:1px solid #ddd;color:#555;">C style — analytical, precise, observant</span>
              </div>
            </div>
            <div style="background:#f5f0e8;border:1px solid #e5ddd0;border-radius:14px;padding:18px 20px;display:flex;align-items:flex-start;gap:14px;">
              <div style="width:40px;height:40px;min-width:40px;border-radius:10px;background:#f0fdf4;display:flex;align-items:center;justify-content:center;font-size:18px;">&#x1F465;</div>
              <div>
                <div style="font-size:14px;font-weight:800;color:#1a2540;margin-bottom:4px;">Unlocked Sidekicks &amp; Vehicles</div>
                <div style="font-size:12px;color:#888;line-height:1.5;">Companions and vehicles your child has earned appear as real characters and tools in the narrative.</div>
                <span style="display:inline-block;margin-top:6px;font-size:11px;font-weight:700;padding:3px 10px;border-radius:100px;background:#fff;border:1px solid #ddd;color:#555;">Sidekick &middot; Vehicle &middot; Supporting cast</span>
              </div>
            </div>
          </div>

          <div class="ko-engine-arrow">
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
              <div style="font-size:11px;font-weight:800;color:#1a9e6e;letter-spacing:0.1em;text-transform:uppercase;writing-mode:vertical-rl;text-orientation:mixed;transform:rotate(180deg);">generates</div>
              <div style="width:2px;height:60px;background:linear-gradient(to bottom,#1a9e6e,#0d1b35);"></div>
              <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:12px solid #0d1b35;"></div>
            </div>
          </div>

          <div style="background:#0d1b35;border-radius:16px;padding:28px 24px;color:#fff;position:relative;overflow:hidden;">
            <div style="font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#86efac;margin-bottom:10px;">&#10022; AI-Generated Chapter</div>
            <h3 style="font-family:'Merriweather',serif;font-size:18px;color:#fff;margin-bottom:12px;line-height:1.3;">Chapter 14: The Pattern Behind Everything</h3>
            <p style="font-size:13px;color:rgba(255,255,255,0.65);line-height:1.7;font-style:italic;">"The four investigation stations buzzed with activity aboard the Stellar Wanderer, but Sparkles found herself stepping back from the excitement she'd stirred up. Rather than bouncing between groups cheering everyone on, she stood quietly at the observation window, studying the data scrolling across her pad with narrowed eyes..."</p>
            <div style="display:inline-flex;align-items:center;gap:6px;margin-top:14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:100px;padding:5px 12px;font-size:11px;font-weight:700;color:rgba(255,255,255,0.7);">&#x1F4CD; Space Station &middot; C style &middot; Chapter 14 of 14</div>
          </div>
        </div>

        <!-- Voice Comparison -->
        <div style="max-width:900px;margin:0 auto 72px;">
          <div style="text-align:center;font-size:13px;font-weight:800;color:#888;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:24px;">Same character &middot; Same story &middot; Different quest results &#8594; Different voice</div>
          <div class="ko-voice-grid">
            <div style="border-radius:16px;overflow:hidden;border:1px solid #e5ddd0;">
              <div style="padding:16px 20px;background:linear-gradient(135deg,#fef3c7,#fde68a);display:flex;align-items:center;justify-content:space-between;">
                <div>
                  <div style="font-size:12px;font-weight:800;color:#666;">Chapter 13</div>
                  <div style="font-family:'Merriweather',serif;font-size:14px;font-weight:700;color:#1a2540;margin-top:2px;">Bringing the Crew Together</div>
                </div>
                <span style="font-size:11px;font-weight:800;padding:4px 12px;border-radius:100px;background:#f59e0b;color:#fff;">I style</span>
              </div>
              <div style="padding:20px;background:#fff;">
                <p style="font-size:13px;color:#444;line-height:1.8;font-style:italic;">"<strong>Listen everyone, I've found something incredible!</strong>" she announced, her eyes sparkling with excitement. "These marks tell a story, and I need all of your brilliant minds to help me figure it out." The crew leaned in, their earlier fear transforming into curiosity. Sparkles invited each person to share their observations, nodding enthusiastically at every idea.</p>
                <div style="margin-top:14px;padding-top:14px;border-top:1px solid #f0ebe0;display:flex;align-items:center;gap:8px;">
                  <div style="width:10px;height:10px;border-radius:50%;background:#eab308;"></div>
                  <div>
                    <div style="font-size:11px;font-weight:700;color:#888;">Influence dominant</div>
                    <div style="font-size:12px;font-weight:800;color:#1a2540;">Energetic &middot; Rally-the-crew &middot; High-fiving &middot; Enthusiastic leader</div>
                  </div>
                </div>
              </div>
            </div>
            <div style="border-radius:16px;overflow:hidden;border:1px solid #e5ddd0;">
              <div style="padding:16px 20px;background:linear-gradient(135deg,#eff6ff,#bfdbfe);display:flex;align-items:center;justify-content:space-between;">
                <div>
                  <div style="font-size:12px;font-weight:800;color:#666;">Chapter 14</div>
                  <div style="font-family:'Merriweather',serif;font-size:14px;font-weight:700;color:#1a2540;margin-top:2px;">The Pattern Behind Everything</div>
                </div>
                <span style="font-size:11px;font-weight:800;padding:4px 12px;border-radius:100px;background:#3b82f6;color:#fff;">C style</span>
              </div>
              <div style="padding:20px;background:#fff;">
                <p style="font-size:13px;color:#444;line-height:1.8;font-style:italic;">"Mom, aren't you going to do more high-fives?" Allie asked. Sparkles smiled but shook her head slowly. "<strong>I think I've been so busy getting everyone excited that I missed something important. Sometimes you need to stop cheering and start thinking.</strong>" She pulled up every scan, every photograph, every reading she'd taken since the first impact.</p>
                <div style="margin-top:14px;padding-top:14px;border-top:1px solid #f0ebe0;display:flex;align-items:center;gap:8px;">
                  <div style="width:10px;height:10px;border-radius:50%;background:#3b82f6;"></div>
                  <div>
                    <div style="font-size:11px;font-weight:700;color:#888;">Conscientiousness dominant</div>
                    <div style="font-size:12px;font-weight:800;color:#1a2540;">Quiet &middot; Analytical &middot; Data-driven &middot; Methodical investigator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Balance Warning -->
        <div style="background:#0d1b35;border-radius:20px;max-width:900px;margin:0 auto 72px;padding:40px;">
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;">
            <div style="width:48px;height:48px;background:rgba(239,68,68,0.2);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;">&#x2696;&#xFE0F;</div>
            <div>
              <h3 style="font-family:'Merriweather',serif;font-size:22px;color:#fff;">The Balance System</h3>
              <p style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px;">When one trait dominates too heavily, the story teaches balance — through consequences, not lectures.</p>
            </div>
          </div>
          <div class="ko-balance-grid">
            <div style="border-radius:12px;padding:18px;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);">
              <div style="font-family:'Merriweather',serif;font-size:28px;font-weight:700;color:#22c55e;margin-bottom:6px;">Under 50%</div>
              <div style="font-size:13px;font-weight:800;color:#fff;margin-bottom:6px;">Well Balanced</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.5);line-height:1.5;">Character is well-rounded, adapts naturally to different situations.</div>
              <div style="margin-top:10px;font-size:12px;font-style:italic;color:rgba(255,255,255,0.4);line-height:1.5;">"Sparkles chose the bold approach this time — but she knew when to listen too."</div>
            </div>
            <div style="border-radius:12px;padding:18px;background:rgba(251,191,36,0.1);border:1px solid rgba(251,191,36,0.2);">
              <div style="font-family:'Merriweather',serif;font-size:28px;font-weight:700;color:#fbbf24;margin-bottom:6px;">50–69%</div>
              <div style="font-size:13px;font-weight:800;color:#fff;margin-bottom:6px;">Subtle Hints</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.5);line-height:1.5;">Story occasionally shows moments where a different approach might have worked better.</div>
              <div style="margin-top:10px;font-size:12px;font-style:italic;color:rgba(255,255,255,0.4);line-height:1.5;">"Her enthusiasm was wonderful — but enthusiasm alone wouldn't decode who had attacked them."</div>
            </div>
            <div style="border-radius:12px;padding:18px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);">
              <div style="font-family:'Merriweather',serif;font-size:28px;font-weight:700;color:#ef4444;margin-bottom:6px;">70%+</div>
              <div style="font-size:13px;font-weight:800;color:#fff;margin-bottom:6px;">Real Consequences</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.5);line-height:1.5;">Other characters push back. Bold becomes reckless. Caring becomes a pushover. The chapter ends with Sparkles realizing she needs more balance.</div>
              <div style="margin-top:10px;font-size:12px;font-style:italic;color:rgba(255,255,255,0.4);line-height:1.5;">"&#x26A0;&#xFE0F; Her dominance was now causing problems, not just solving them."</div>
            </div>
          </div>
        </div>

        <!-- Continuity -->
        <div class="ko-continuity-box">
          <div style="font-size:48px;">&#x1F4DA;</div>
          <div>
            <h3 style="font-family:'Merriweather',serif;font-size:20px;color:#1a2540;margin-bottom:10px;">Every Chapter Remembers Everything</h3>
            <p style="font-size:14px;color:#666;line-height:1.7;margin-bottom:16px;">Unlike other AI tools that forget between conversations, your child's story has full continuity. Every previous chapter is fed into each new generation — characters remember, relationships develop, and consequences carry forward across the entire book.</p>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div v-for="item in continuityPoints" :key="item" style="display:flex;align-items:center;gap:10px;font-size:13px;color:#444;">
                <div style="width:8px;height:8px;min-width:8px;border-radius:50%;background:#1a9e6e;"></div>
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Choose Your World -->
    <div class="ko-section ko-navy">
      <div class="ko-section-eyebrow ko-light">Choose Your World</div>
      <h2 class="ko-section-h2 ko-light">Three Epic Universes to Explore</h2>
      <p class="ko-section-p ko-light">Every theme has 9 unique story locations to unlock — each one becomes the backdrop for your child's next AI-written chapter.</p>
      <div class="ko-themes-grid">
        <div class="ko-theme-card ko-medieval">
          <span class="ko-theme-icon">&#x1F3F0;</span>
          <h3>Medieval Kingdom</h3>
          <p>Stone castles, enchanted forests, and dragon lairs for brave knights and wise wizards.</p>
          <div class="ko-worlds"><span class="ko-world-pill">Stone Castle</span><span class="ko-world-pill">Enchanted Forest</span><span class="ko-world-pill">Dragon Lair</span></div>
        </div>
        <div class="ko-theme-card ko-scifi">
          <span class="ko-theme-icon">&#x1F680;</span>
          <h3>Sci-Fi Galaxy</h3>
          <p>Space stations, nebula cities, and alien worlds for explorers ready to boldly go.</p>
          <div class="ko-worlds"><span class="ko-world-pill">Space Station</span><span class="ko-world-pill">Nebula City</span><span class="ko-world-pill">Alien World</span></div>
        </div>
        <div class="ko-theme-card ko-game">
          <span class="ko-theme-icon">&#x1F3AE;</span>
          <h3>Video Game Realm</h3>
          <p>Pixel dungeons, lava levels, and neon arcades for kids ready to level up in real life.</p>
          <div class="ko-worlds"><span class="ko-world-pill">Lava Dungeon</span><span class="ko-world-pill">Neon Arcade</span><span class="ko-world-pill">Sky Fortress</span></div>
        </div>
      </div>
    </div>

    <!-- Character Stats -->
    <div class="ko-section ko-warm">
      <div class="ko-section-eyebrow ko-dark">Character Stats</div>
      <h2 class="ko-section-h2 ko-dark">Real Strengths, Revealed Through Play</h2>
      <p class="ko-section-p ko-dark">Every quest updates your child's character stats — rooted in real DISC behavioral science, expressed in language kids actually love.</p>
      <div class="ko-stats-grid">
        <div v-for="s in statCards" :key="s.name" class="ko-stat-card">
          <span class="ko-stat-card-icon">{{ s.icon }}</span>
          <div class="ko-stat-card-name">{{ s.name }}</div>
          <div class="ko-stat-card-bar"><div class="ko-stat-card-fill" :style="{ background: s.color, width: s.width }"></div></div>
          <div class="ko-stat-card-disc">{{ s.disc }}</div>
        </div>
      </div>
    </div>

    <!-- AI-Powered Stories -->
    <div class="ko-section ko-white">
      <div class="ko-section-eyebrow ko-dark">AI-Powered Stories</div>
      <h2 class="ko-section-h2 ko-dark">A Story That Actually Knows Your Child</h2>
      <p class="ko-section-p ko-dark">Powered by Claude AI — every chapter is written specifically for your child's personality, choices, and growth. No two stories are ever the same.</p>
      <div class="ko-story-grid">
        <div v-for="f in storyFeatures" :key="f.title" class="ko-story-feat">
          <div class="ko-feat-icon-wrap" :style="{ background: f.bg }">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Meet Archie -->
    <div class="ko-section ko-navy">
      <div class="ko-section-eyebrow ko-light">Meet Archie</div>
      <h2 class="ko-section-h2 ko-light">Your Child's Personal AI Guide</h2>
      <p class="ko-section-p ko-light">Archie knows your child's name, character, stats, and progress — giving personalized tips in age-appropriate language on every page.</p>
      <div class="ko-archie-box">
        <div class="ko-archie-msg">"Great job completing Shane's Day at the Park, Sparkles! Your Heart stat just went up — you're really good at caring for others. Try the next quest to see if your Wisdom grows too!"</div>
        <div class="ko-archie-credit">— Archie, your AI guide</div>
        <div class="ko-archie-sub">Age-appropriate language &middot; Max 35 words &middot; No jargon &middot; Available on every page</div>
      </div>
    </div>

    <!-- For Parents -->
    <div class="ko-section ko-warm">
      <div class="ko-section-eyebrow ko-dark">For Parents</div>
      <h2 class="ko-section-h2 ko-dark">You're Always in Control</h2>
      <p class="ko-section-p ko-dark">Kids never take assessments alone. Parents manage everything — Kids View is a safe, PIN-protected space within your family account.</p>
      <div class="ko-parent-grid">
        <div v-for="pf in parentFeatures" :key="pf.title" class="ko-parent-feat">
          <div class="ko-parent-icon">{{ pf.icon }}</div>
          <div>
            <h4>{{ pf.title }}</h4>
            <p>{{ pf.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Watch Your Child Grow -->
    <div class="ko-section ko-navy">
      <div class="ko-section-eyebrow ko-light">Growth Tracking</div>
      <h2 class="ko-section-h2 ko-light">Watch Your Child's Personality Grow Over Time</h2>
      <p class="ko-section-p ko-light" style="max-width:540px;">Every completed quest adds a data point to your child's growth chart — giving you a living record of how their personality is developing, assessment by assessment.</p>

      <div class="ko-growth-features-grid">
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px;">
          <div style="width:44px;height:44px;border-radius:12px;background:rgba(251,191,36,0.15);display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:14px;">&#x1F4C8;</div>
          <h3 style="font-family:'Merriweather',serif;font-size:17px;color:#fff;margin-bottom:8px;">Stats Over Time</h3>
          <p style="font-size:13px;color:rgba(255,255,255,0.55);line-height:1.6;margin-bottom:10px;">See all 6 character stats plotted as a line graph across every assessment your child has completed. Watch Creativity climb, Heart grow, or Strength emerge over weeks and months.</p>
          <span style="display:inline-block;font-size:11px;font-weight:700;padding:3px 10px;border-radius:100px;background:rgba(134,239,172,0.1);border:1px solid rgba(134,239,172,0.2);color:#86efac;">Strength &middot; Leadership &middot; Speed &middot; Creativity &middot; Heart &middot; Wisdom</span>
        </div>
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px;">
          <div style="width:44px;height:44px;border-radius:12px;background:rgba(59,130,246,0.15);display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:14px;">&#x1F52C;</div>
          <h3 style="font-family:'Merriweather',serif;font-size:17px;color:#fff;margin-bottom:8px;">Raw DISC View</h3>
          <p style="font-size:13px;color:rgba(255,255,255,0.55);line-height:1.6;margin-bottom:10px;">Switch to the DISC tab to see the underlying behavioral science — raw Dominance, Influence, Steadiness, and Conscientiousness scores plotted over time. Isolate any trait with one click.</p>
          <span style="display:inline-block;font-size:11px;font-weight:700;padding:3px 10px;border-radius:100px;background:rgba(134,239,172,0.1);border:1px solid rgba(134,239,172,0.2);color:#86efac;">D &middot; I &middot; S &middot; C — tap any to isolate</span>
        </div>
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px;">
          <div style="width:44px;height:44px;border-radius:12px;background:rgba(134,239,172,0.15);display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:14px;">&#x1F50D;</div>
          <h3 style="font-family:'Merriweather',serif;font-size:17px;color:#fff;margin-bottom:8px;">Per-Quest Breakdown</h3>
          <p style="font-size:13px;color:rgba(255,255,255,0.55);line-height:1.6;margin-bottom:10px;">Hover any chapter in the Table of Contents to see the exact scores from that specific assessment — the character card updates instantly to show what drove that chapter's voice.</p>
          <span style="display:inline-block;font-size:11px;font-weight:700;padding:3px 10px;border-radius:100px;background:rgba(134,239,172,0.1);border:1px solid rgba(134,239,172,0.2);color:#86efac;">Hover any chapter &#8594; see its scores</span>
        </div>
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px;">
          <div style="width:44px;height:44px;border-radius:12px;background:rgba(168,85,247,0.15);display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:14px;">&#x1F4CA;</div>
          <h3 style="font-family:'Merriweather',serif;font-size:17px;color:#fff;margin-bottom:8px;">Dashboard Summary</h3>
          <p style="font-size:13px;color:rgba(255,255,255,0.55);line-height:1.6;margin-bottom:10px;">The main kids dashboard shows cumulative stats at a glance — your child's overall dominant trait, total assessments started and completed, and current character archetype.</p>
          <span style="display:inline-block;font-size:11px;font-weight:700;padding:3px 10px;border-radius:100px;background:rgba(134,239,172,0.1);border:1px solid rgba(134,239,172,0.2);color:#86efac;">Overall &middot; Per child &middot; All time</span>
        </div>
      </div>

      <!-- Chart Mockup -->
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:28px;max-width:860px;margin:0 auto 40px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
          <div style="font-size:14px;font-weight:800;color:#fff;">Allie's Growth Chart</div>
          <div style="display:flex;gap:0;background:rgba(255,255,255,0.05);border-radius:8px;padding:4px;">
            <div style="padding:8px 20px;border-radius:6px;font-size:13px;font-weight:800;color:rgba(255,255,255,0.4);">STATS</div>
            <div style="padding:8px 20px;border-radius:6px;font-size:13px;font-weight:800;background:#fff;color:#1a2540;">DISC</div>
          </div>
        </div>

        <div style="position:relative;height:180px;margin-bottom:16px;">
          <div style="position:absolute;left:0;top:0;bottom:24px;display:flex;flex-direction:column;justify-content:space-between;">
            <div style="font-size:11px;color:rgba(255,255,255,0.3);">41</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.3);">26</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.3);">10</div>
          </div>
          <svg style="position:absolute;left:32px;right:0;top:0;bottom:24px;width:calc(100% - 32px);height:100%;overflow:visible;" viewBox="0 0 400 150" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="400" y2="0" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            <polyline points="0,130 50,128 100,126 150,120 200,115 250,112 300,100 350,95 400,90" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
            <polyline points="0,30 50,28 100,30 150,15 200,55 250,70 300,80 350,90 400,85" fill="none" stroke="#eab308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
            <polyline points="0,25 50,26 100,25 150,28 200,40 250,55 300,65 350,75 400,80" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
            <polyline points="0,60 50,60 100,62 150,60 200,58 250,55 300,50 350,48 400,45" fill="none" stroke="#3b82f6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="0" cy="60" r="4" fill="#3b82f6"/>
            <circle cx="50" cy="60" r="4" fill="#3b82f6"/>
            <circle cx="100" cy="62" r="4" fill="#3b82f6"/>
            <circle cx="150" cy="60" r="4" fill="#3b82f6"/>
            <circle cx="200" cy="58" r="4" fill="#3b82f6"/>
            <circle cx="250" cy="55" r="4" fill="#3b82f6"/>
            <circle cx="300" cy="50" r="4" fill="#3b82f6"/>
            <circle cx="350" cy="48" r="4" fill="#3b82f6"/>
            <circle cx="400" cy="45" r="4" fill="#3b82f6"/>
          </svg>
        </div>

        <div style="display:flex;justify-content:space-between;padding-left:32px;margin-bottom:16px;">
          <span style="font-size:11px;color:rgba(255,255,255,0.3);">4/6</span>
          <span style="font-size:11px;color:rgba(255,255,255,0.3);">4/6</span>
          <span style="font-size:11px;color:rgba(255,255,255,0.3);">4/8</span>
          <span style="font-size:11px;color:rgba(255,255,255,0.3);">4/9</span>
          <span style="font-size:11px;color:rgba(255,255,255,0.3);">4/9</span>
        </div>

        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <div style="display:flex;align-items:center;gap:6px;padding:5px 12px;border-radius:100px;background:rgba(239,68,68,0.08);color:#ef4444;font-size:12px;font-weight:800;opacity:0.5;"><div style="width:10px;height:10px;border-radius:50%;background:#ef4444;"></div>D</div>
          <div style="display:flex;align-items:center;gap:6px;padding:5px 12px;border-radius:100px;background:rgba(234,179,8,0.08);color:#eab308;font-size:12px;font-weight:800;opacity:0.5;"><div style="width:10px;height:10px;border-radius:50%;background:#eab308;"></div>I</div>
          <div style="display:flex;align-items:center;gap:6px;padding:5px 12px;border-radius:100px;background:rgba(34,197,94,0.08);color:#22c55e;font-size:12px;font-weight:800;opacity:0.5;"><div style="width:10px;height:10px;border-radius:50%;background:#22c55e;"></div>S</div>
          <div style="display:flex;align-items:center;gap:6px;padding:5px 12px;border-radius:100px;background:rgba(59,130,246,0.15);color:#3b82f6;font-size:12px;font-weight:800;border:2px solid #3b82f6;"><div style="width:10px;height:10px;border-radius:50%;background:#3b82f6;"></div>C — dominant</div>
        </div>

        <div style="margin-top:16px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06);font-size:12px;color:rgba(255,255,255,0.35);">
          &#x1F4A1; Hover any chapter in the Table of Contents to see the exact scores that chapter was written from
        </div>
      </div>

      <!-- Per-Quest Detail -->
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px;max-width:860px;margin:0 auto 48px;">
        <div style="font-size:12px;font-weight:800;color:rgba(255,255,255,0.4);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:14px;">&#x1F4D6; Chapter hover — individual quest breakdown</div>
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,0.06);">
          <div style="width:40px;height:40px;border-radius:10px;background:rgba(59,130,246,0.2);display:flex;align-items:center;justify-content:center;font-size:18px;">&#x1F4D6;</div>
          <div style="flex:1;">
            <div style="font-size:15px;font-weight:800;color:#fff;">Shane's Day at the Park!</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:2px;">Completed Apr 9, 2026</div>
          </div>
          <div style="font-size:12px;font-weight:800;padding:5px 14px;border-radius:100px;background:rgba(59,130,246,0.2);color:#93c5fd;">C style</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:11px;font-weight:800;color:rgba(255,255,255,0.5);letter-spacing:0.08em;width:88px;text-transform:uppercase;">Strength</span>
            <div style="flex:1;height:8px;background:rgba(255,255,255,0.06);border-radius:100px;overflow:hidden;"><div style="height:100%;border-radius:100px;background:#ef4444;width:22%;"></div></div>
            <span style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);width:28px;text-align:right;">10</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:11px;font-weight:800;color:rgba(255,255,255,0.5);letter-spacing:0.08em;width:88px;text-transform:uppercase;">Leadership</span>
            <div style="flex:1;height:8px;background:rgba(255,255,255,0.06);border-radius:100px;overflow:hidden;"><div style="height:100%;border-radius:100px;background:#f97316;width:22%;"></div></div>
            <span style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);width:28px;text-align:right;">10</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:11px;font-weight:800;color:rgba(255,255,255,0.5);letter-spacing:0.08em;width:88px;text-transform:uppercase;">Speed</span>
            <div style="flex:1;height:8px;background:rgba(255,255,255,0.06);border-radius:100px;overflow:hidden;"><div style="height:100%;border-radius:100px;background:#eab308;width:22%;"></div></div>
            <span style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);width:28px;text-align:right;">10</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:11px;font-weight:800;color:rgba(255,255,255,0.5);letter-spacing:0.08em;width:88px;text-transform:uppercase;">Creativity <span style="color:#86efac;">&#x2605;</span></span>
            <div style="flex:1;height:8px;background:rgba(255,255,255,0.06);border-radius:100px;overflow:hidden;"><div style="height:100%;border-radius:100px;background:#a855f7;width:98%;"></div></div>
            <span style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);width:28px;text-align:right;">45</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:11px;font-weight:800;color:rgba(255,255,255,0.5);letter-spacing:0.08em;width:88px;text-transform:uppercase;">Heart</span>
            <div style="flex:1;height:8px;background:rgba(255,255,255,0.06);border-radius:100px;overflow:hidden;"><div style="height:100%;border-radius:100px;background:#22c55e;width:0%;"></div></div>
            <span style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);width:28px;text-align:right;">0</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:11px;font-weight:800;color:rgba(255,255,255,0.5);letter-spacing:0.08em;width:88px;text-transform:uppercase;">Wisdom <span style="color:#86efac;">&#x2605;</span></span>
            <div style="flex:1;height:8px;background:rgba(255,255,255,0.06);border-radius:100px;overflow:hidden;"><div style="height:100%;border-radius:100px;background:#3b82f6;width:87%;"></div></div>
            <span style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);width:28px;text-align:right;">40</span>
          </div>
        </div>
        <div style="margin-top:14px;padding:10px 14px;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:8px;font-size:12px;color:#93c5fd;">
          This quest's Creativity + Wisdom dominance shaped this chapter's analytical, imaginative voice
        </div>
      </div>

      <!-- Three Views -->
      <div class="ko-growth-views-grid">
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:20px;text-align:center;">
          <span style="font-size:32px;margin-bottom:12px;display:block;">&#x1F4CA;</span>
          <div style="font-family:'Merriweather',serif;font-size:15px;color:#fff;margin-bottom:8px;">Dashboard View</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.5);line-height:1.5;">Cumulative stats and dominant trait at a glance — updated after every completed quest</div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:20px;text-align:center;">
          <span style="font-size:32px;margin-bottom:12px;display:block;">&#x1F4D6;</span>
          <div style="font-family:'Merriweather',serif;font-size:15px;color:#fff;margin-bottom:8px;">Story Book View</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.5);line-height:1.5;">Full line graph in the Table of Contents — hover any chapter to see its individual scores</div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:20px;text-align:center;">
          <span style="font-size:32px;margin-bottom:12px;display:block;">&#x1F50D;</span>
          <div style="font-family:'Merriweather',serif;font-size:15px;color:#fff;margin-bottom:8px;">Per-Quest Results</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.5);line-height:1.5;">Drill into any individual assessment to see the exact scores and which chapter it generated</div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="ko-cta-section">
      <h2>Ready to Start Your Child's Story?</h2>
      <p>Join The Assessment Library and give your child the gift of self-discovery — one quest, one chapter, one adventure at a time.</p>
      <div class="ko-cta-btns">
        <nuxt-link to="/auth/registration" class="ko-btn-primary">Create Family Account</nuxt-link>
        <nuxt-link to="/library" class="ko-btn-ghost ko-btn-ghost--dark">See a Sample Story</nuxt-link>
      </div>
      <div class="ko-cta-note">Kids View included with all Assessment Library accounts &middot; No extra cost</div>
    </div>

    <footer-fold />
  </section>
</template>

<script>
export default {
  components: {
    'main-nav': () => import('@/components/Nav'),
    'footer-fold': () => import('@/components/Footer')
  },
  head() {
    return {
      title: 'Kids View | The Assessment Library — Story-Based DISC for Kids',
      meta: [
        { hid: 'description', name: 'description', content: 'Every child becomes the hero of their own story. Scenario-based quests reveal your child\'s natural strengths — then AI writes them into a personalized storybook that grows with every adventure.' },
        { hid: 'og:title', property: 'og:title', content: 'Kids View | The Assessment Library — Story-Based DISC for Kids' },
        { hid: 'og:description', property: 'og:description', content: 'Every child becomes the hero of their own story. Scenario-based quests reveal your child\'s natural strengths — then AI writes them into a personalized storybook that grows with every adventure.' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.theassessmentlibrary.com/kids-overview' }
      ]
    }
  },
  data() {
    return {
      mockStats: [
        { label: 'Strength', color: '#ef4444', width: '54%', value: 22 },
        { label: 'Leadership', color: '#f97316', width: '54%', value: 22 },
        { label: 'Speed', color: '#eab308', width: '58%', value: 24 },
        { label: 'Creativity', color: '#a855f7', width: '68%', value: 28 },
        { label: 'Heart', color: '#22c55e', width: '54%', value: 22 },
        { label: 'Wisdom', color: '#3b82f6', width: '66%', value: 27 }
      ],
      mockQuests: [
        { trait: 'C', color: '#3b82f6', name: "Shane's Day at the Park!", date: 'Completed Apr 9, 2026' },
        { trait: 'I', color: '#eab308', name: "Shane's Day at the Park!", date: 'Completed Apr 9, 2026' },
        { trait: 'D', color: '#ef4444', name: "Shane's Day at the Park!", date: 'Completed Apr 9, 2026' }
      ],
      statCards: [
        { icon: '\uD83D\uDCAA', name: 'Strength', color: '#ef4444', width: '75%', disc: 'D \u00B7 Dominance' },
        { icon: '\uD83D\uDC51', name: 'Leadership', color: '#f97316', width: '65%', disc: 'D \u00B7 Dominance' },
        { icon: '\u26A1', name: 'Speed', color: '#eab308', width: '80%', disc: 'I \u00B7 Influence' },
        { icon: '\uD83C\uDFA8', name: 'Creativity', color: '#a855f7', width: '70%', disc: 'I + C blend' },
        { icon: '\uD83D\uDC9A', name: 'Heart', color: '#22c55e', width: '85%', disc: 'S \u00B7 Steadiness' },
        { icon: '\uD83D\uDD2E', name: 'Wisdom', color: '#3b82f6', width: '62%', disc: 'S + C blend' }
      ],
      storyFeatures: [
        { icon: '\uD83D\uDCD6', bg: '#fef3c7', title: 'Full Continuity', desc: 'Characters remember past events, friendships carry forward — one continuous narrative, not disconnected episodes.' },
        { icon: '\uD83C\uDF31', bg: '#f0fdf4', title: 'Trait-Driven Voice', desc: "Your child's dominant DISC trait shapes how their character thinks and experiences the world — not just what happens, but how it feels." },
        { icon: '\u2696\uFE0F', bg: '#faf5ff', title: 'Balance Teaching', desc: 'When a trait becomes extreme, the story shows real consequences — teaching kids that every strength needs balance, through story not lectures.' },
        { icon: '\u2728', bg: '#eff6ff', title: 'Character Evolution', desc: "When dominant traits shift between quests, the story weaves it in as genuine character growth — your child's story evolves as they do." },
        { icon: '\uD83D\uDDFA\uFE0F', bg: '#fff7ed', title: 'Location-Aware Chapters', desc: 'The unlocked background determines where each chapter takes place — castle, space station, lava dungeon, and more.' },
        { icon: '\uD83D\uDCDA', bg: '#f0fdf4', title: 'Real Book Experience', desc: 'Two-page spread with page-turn animations, table of contents, chapter titles kids can rename, and "Written by [Name]" author credit.' }
      ],
      continuityPoints: [
        'Characters your child met in Chapter 1 appear again in Chapter 10',
        'Decisions made early in the story shape what happens later',
        'When dominant traits shift, the story weaves it in as genuine character growth',
        'Each chapter is labeled with the DISC style that shaped it — visible in the Table of Contents'
      ],
      parentFeatures: [
        { icon: '\uD83D\uDD10', title: '4-Digit PIN Lock', desc: 'Set a PIN to lock and unlock Kids View. Recoverable via your account password anytime.' },
        { icon: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67', title: 'Multiple Child Profiles', desc: 'Each child gets their own character, world, theme, and growing story.' },
        { icon: '\uD83D\uDCCA', title: 'Progress Tracking', desc: 'Visual graphs show how each stat evolved across all completed quests over time.' },
        { icon: '\uD83C\uDFAF', title: 'Parent-Managed Quests', desc: "You add assessments to your child's queue. Kids choose when — you stay informed." },
        { icon: '\uD83C\uDFC6', title: 'Quests Conquered View', desc: "A growing record of every completed assessment and your child's self-discovery journey." },
        { icon: '\u270F\uFE0F', title: 'Customizable Profiles', desc: 'Kids choose their character name, gender, and theme — and can switch anytime as they grow.' }
      ]
    }
  }
}
</script>

<style lang="scss">
html { scroll-behavior: smooth; }
</style>

<style scoped lang="scss">
@import '~assets/scss/vars';

.kids-overview {
  margin-top: 64px;
}

/* ── Hero ──────────────────────────────────────── */

.ko-hero {
  background: linear-gradient(160deg, #c8b89a 0%, #b8a888 30%, #0d1b35 70%, #0a1628 100%);
  padding: 40px 40px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.ko-hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 18px;
  border-radius: 100px;
  margin-bottom: 0;
}

.ko-hero h1 {
  font-family: 'Merriweather', serif;
  font-size: clamp(30px, 5.5vw, 58px);
  line-height: 1.2;
  color: #fff;
  margin-bottom: 20px;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 12px rgba(0,0,0,0.3);

  em {
    font-style: italic;
    color: #86efac;
  }
}

.ko-hero > p {
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(255,255,255,0.75);
  max-width: 500px;
  margin: 0 auto 36px;
  line-height: 1.7;
}

.ko-hero-btns {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 52px;
}

.ko-btn-primary {
  background: #1a9e6e;
  color: #fff;
  font-family: $font-family;
  font-weight: 800;
  font-size: 16px;
  padding: 14px 34px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.15s;

  &:hover { background: #158a5e; }
}

.ko-btn-ghost {
  background: rgba(255,255,255,0.12);
  color: #fff;
  font-family: $font-family;
  font-weight: 700;
  font-size: 16px;
  padding: 14px 34px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.3);
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.15s;

  &:hover { background: rgba(255,255,255,0.2); }

  &--dark {
    background: transparent;
    color: #1a2540;
    border: 1px solid #ccc;
    &:hover { background: rgba(0,0,0,0.04); }
  }
}

/* ── Mockup ────────────────────────────────────── */

.ko-mockup-wrap {
  max-width: 820px;
  margin: 0 auto;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  border-bottom: none;
  box-shadow: 0 -12px 48px rgba(0,0,0,0.5);
}

.ko-mockup-bar {
  background: #1e2d4a;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ko-mockup-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.ko-mockup-url {
  background: rgba(255,255,255,0.08);
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  flex: 1;
  text-align: center;
}

.ko-mockup-inner {
  background: #0d1b35;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* Character card */
.ko-char-card {
  background: #1a2540;
  border-radius: 12px;
  padding: 20px;
}

.ko-char-card-name {
  font-family: 'Merriweather', serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}

.ko-char-type {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #4ade80;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.ko-stat-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.ko-stat-label {
  font-size: 11px;
  font-weight: 800;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.08em;
  width: 72px;
  text-transform: uppercase;
}

.ko-stat-track {
  flex: 1;
  height: 6px;
  background: rgba(255,255,255,0.08);
  border-radius: 100px;
  overflow: hidden;
}

.ko-stat-fill {
  height: 100%;
  border-radius: 100px;
}

.ko-stat-val {
  font-size: 12px;
  font-weight: 700;
  color: rgba(255,255,255,0.6);
  width: 20px;
  text-align: right;
}

/* World card */
.ko-world-card {
  background: #111827;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
}

.ko-world-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a0533 0%, #2d1b69 40%, #0f2447 70%, #1a3a5c 100%);
}

.ko-world-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(to top, rgba(139,92,246,0.3), transparent);
}

.ko-world-title {
  position: relative;
  font-family: 'Merriweather', serif;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.8);
}

.ko-world-sub {
  position: relative;
  font-size: 12px;
  color: rgba(255,255,255,0.6);
  margin-top: 4px;
}

/* Quests card */
.ko-quests-card {
  grid-column: 1 / -1;
  background: #1a2540;
  border-radius: 12px;
  padding: 20px;
}

.ko-quests-title {
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 4px;
}

.ko-quest-conquered {
  font-size: 12px;
  font-weight: 700;
  color: #f97316;
  margin-bottom: 14px;
}

.ko-quest-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.ko-quest-disc {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}

.ko-quest-info {
  flex: 1;
}

.ko-quest-name {
  font-size: 13px;
  font-weight: 700;
  color: #fff;
}

.ko-quest-date {
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  margin-top: 2px;
}

.ko-quest-btn {
  background: #1a9e6e;
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  padding: 5px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: $font-family;
  white-space: nowrap;
}

/* ── Sections ──────────────────────────────────── */

.ko-section {
  padding: 72px 40px;

  &.ko-navy { background: #0d1b35; }
  &.ko-warm { background: #f5f0e8; }
  &.ko-white { background: #fff; }
}

.ko-section-eyebrow {
  text-align: center;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 10px;

  &.ko-light { color: #86efac; }
  &.ko-dark { color: #1a9e6e; }
}

.ko-section-h2 {
  font-family: 'Merriweather', serif;
  font-size: clamp(26px, 4vw, 42px);
  text-align: center;
  line-height: 1.2;
  margin-bottom: 14px;

  &.ko-light { color: #fff; }
  &.ko-dark { color: #1a2540; }
}

.ko-section-p {
  text-align: center;
  max-width: 520px;
  margin: 0 auto 48px;
  line-height: 1.7;
  font-size: 16px;

  &.ko-light { color: rgba(255,255,255,0.6); }
  &.ko-dark { color: #666; }
}

/* ── Themes Grid ───────────────────────────────── */

.ko-themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  max-width: 860px;
  margin: 0 auto;
}

.ko-theme-card {
  border-radius: 16px;
  padding: 28px 22px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.08);

  &.ko-medieval { background: linear-gradient(135deg, #2d1505, #5a2a0d); }
  &.ko-scifi { background: linear-gradient(135deg, #05132d, #0a2550); }
  &.ko-game { background: linear-gradient(135deg, #1a0530, #380a60); }

  h3 {
    font-family: 'Merriweather', serif;
    font-size: 20px;
    color: #fff;
    margin-bottom: 8px;
  }

  p {
    font-size: 13px;
    color: rgba(255,255,255,0.6);
    line-height: 1.5;
    margin-bottom: 14px;
  }
}

.ko-theme-icon {
  font-size: 44px;
  margin-bottom: 14px;
  display: block;
}

.ko-worlds {
  display: flex;
  gap: 6px;
  justify-content: center;
  flex-wrap: wrap;
}

.ko-world-pill {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 100px;
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.8);
}

/* ── Stats Grid ────────────────────────────────── */

.ko-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  max-width: 860px;
  margin: 0 auto;
}

.ko-stat-card {
  background: #fff;
  border: 1px solid #e5e0d8;
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
}

.ko-stat-card-icon {
  font-size: 28px;
  margin-bottom: 10px;
  display: block;
}

.ko-stat-card-name {
  font-family: 'Merriweather', serif;
  font-size: 16px;
  color: #1a2540;
  margin-bottom: 8px;
}

.ko-stat-card-bar {
  height: 8px;
  background: #f0ebe0;
  border-radius: 100px;
  overflow: hidden;
  margin-bottom: 8px;
}

.ko-stat-card-fill {
  height: 100%;
  border-radius: 100px;
}

.ko-stat-card-disc {
  font-size: 11px;
  font-weight: 700;
  color: #999;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ── Story Features Grid ───────────────────────── */

.ko-story-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  max-width: 860px;
  margin: 0 auto;
  align-items: stretch;
}

.ko-story-feat {
  background: #fff;
  border: 1px solid #e5e0d8;
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Merriweather', serif;
    font-size: 16px;
    color: #1a2540;
    margin-bottom: 8px;
  }

  p {
    font-size: 13px;
    color: #666;
    line-height: 1.6;
  }
}

.ko-feat-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 14px;
}

/* ── Archie Box ────────────────────────────────── */

.ko-archie-box {
  max-width: 540px;
  margin: 0 auto;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 28px;
  text-align: left;
}

.ko-archie-msg {
  font-size: 16px;
  color: rgba(255,255,255,0.85);
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 14px;
}

.ko-archie-credit {
  font-size: 12px;
  font-weight: 800;
  color: #86efac;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.ko-archie-sub {
  font-size: 12px;
  color: rgba(255,255,255,0.35);
  margin-top: 4px;
}

/* ── Parent Grid ───────────────────────────────── */

.ko-parent-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  max-width: 860px;
  margin: 0 auto;
}

.ko-parent-feat {
  display: flex;
  gap: 14px;
  background: #fff;
  border: 1px solid #e5e0d8;
  border-radius: 12px;
  padding: 18px;

  h4 {
    font-size: 14px;
    font-weight: 800;
    color: #1a2540;
    margin: 0 0 4px;
  }

  p {
    font-size: 12px;
    color: #888;
    line-height: 1.5;
    margin: 0;
  }
}

.ko-parent-icon {
  width: 42px;
  height: 42px;
  min-width: 42px;
  border-radius: 10px;
  background: #e8f5f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

/* ── CTA ───────────────────────────────────────── */

.ko-cta-section {
  background: #f5f0e8;
  text-align: center;
  padding: 80px 40px;

  h2 {
    font-family: 'Merriweather', serif;
    font-size: clamp(26px, 4vw, 40px);
    color: #1a2540;
    margin-bottom: 16px;
  }

  p {
    font-size: 17px;
    color: #666;
    max-width: 480px;
    margin: 0 auto 36px;
    line-height: 1.7;
  }
}

.ko-cta-btns {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.ko-cta-note {
  font-size: 12px;
  color: #aaa;
  margin-top: 16px;
}

/* ── Growth Section ─────────────────────────────── */

.ko-growth-features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 860px;
  margin: 0 auto 48px;
}

.ko-growth-views-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
  max-width: 860px;
  margin: 0 auto;
}

/* ── Quest Loop ─────────────────────────────────── */

.ko-quest-loop-steps {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  gap: 0;
  align-items: center;
  margin-bottom: 40px;
}

.ko-quest-loop-arrow {
  font-size: 24px;
  color: #1a9e6e;
  font-weight: 800;
  text-align: center;
  padding: 0 8px;
  margin-bottom: 32px;
}

.ko-token-box {
  background: #0d1b35;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  align-items: center;
  gap: 32px;
}

/* ── How It Works ──────────────────────────────── */

.ko-engine-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  max-width: 900px;
  margin: 0 auto 72px;
  align-items: center;
}

.ko-engine-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
}

.ko-voice-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.ko-balance-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
}

.ko-continuity-box {
  background: #f5f0e8;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  gap: 32px;
  align-items: flex-start;
}

/* ── Responsive ────────────────────────────────── */

@media (max-width: 768px) {
  .ko-hero {
    padding: 28px 20px 0;
  }

  .ko-mockup-inner {
    grid-template-columns: 1fr;
  }

  .ko-quests-card {
    grid-column: 1;
  }

  .ko-section {
    padding: 48px 20px;
  }

  .ko-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .ko-story-grid {
    grid-template-columns: 1fr;
  }

  .ko-cta-section {
    padding: 48px 20px;
  }

  .ko-quest-loop-steps {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .ko-quest-loop-arrow {
    transform: rotate(90deg);
    margin-bottom: 0;
    padding: 4px 0;
  }

  .ko-token-box {
    flex-direction: column;
    padding: 24px;
  }

  .ko-engine-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .ko-engine-arrow > div {
    flex-direction: row;

    > div:first-child {
      writing-mode: horizontal-tb;
      transform: none;
    }

    > div:nth-child(2) {
      width: 0;
      height: 60px;
      background: linear-gradient(to bottom, #1a9e6e, #0d1b35);
      width: 2px;
    }
  }

  .ko-voice-grid {
    grid-template-columns: 1fr;
  }

  .ko-balance-grid {
    grid-template-columns: 1fr;
  }

  .ko-continuity-box {
    flex-direction: column;
    gap: 16px;
  }

  .ko-growth-features-grid {
    grid-template-columns: 1fr;
  }

  .ko-growth-views-grid {
    grid-template-columns: 1fr;
  }
}
</style>
