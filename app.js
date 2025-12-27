const spreads = [
  {
    id: "singleInsight",
    name: "单牌洞察",
    summary: "快速捕捉当前能量，获得重点提醒。",
    positions: [{ label: "核心讯息", prompt: "此刻最需要留意的主题" }],
    cards: 1,
  },
  {
    id: "threeFlow",
    name: "过去-现在-未来",
    summary: "梳理事件的时间脉络，理解发展趋势。",
    positions: [
      { label: "过去影响", prompt: "奠定基础的因素" },
      { label: "当下状态", prompt: "正在显化的能量" },
      { label: "未来走向", prompt: "事件的延伸与趋势" },
    ],
    cards: 3,
  },
  {
    id: "relationshipMirror",
    name: "关系镜像阵",
    summary: "观察彼此立场与关系核心议题。",
    positions: [
      { label: "我的位置", prompt: "自身能量与需求" },
      { label: "对方位置", prompt: "对方状态与期待" },
      { label: "关系核心", prompt: "连接中的课题" },
      { label: "建议指引", prompt: "如何调整与行动" },
    ],
    cards: 4,
  },
  {
    id: "careerCompass",
    name: "事业罗盘阵",
    summary: "聚焦职场或学业，洞悉阻力与突破口。",
    positions: [
      { label: "现状", prompt: "主导的课题" },
      { label: "阻碍", prompt: "限制前进的因素" },
      { label: "资源", prompt: "可利用的支持" },
      { label: "行动", prompt: "可执行的策略" },
    ],
    cards: 4,
  },
  {
    id: "decisionMatrix",
    name: "抉择矩阵阵",
    summary: "权衡不同方案，给出行动建议。",
    positions: [
      { label: "背景", prompt: "事件的出发点" },
      { label: "方案A", prompt: "第一种选择的表现" },
      { label: "方案B", prompt: "另一种选择的表现" },
      { label: "隐藏因素", prompt: "不易察觉的影响" },
      { label: "最终建议", prompt: "有利的行动方向" },
    ],
    cards: 5,
  },
];

const tarotDeck = [
  {
    name: "愚者",
    keywords: ["冒险", "信任"],
    upright: "拥抱未知，新的旅程即将展开。",
    reversed: "可能太过鲁莽或迟迟不敢迈步。",
  },
  {
    name: "魔术师",
    keywords: ["行动", "显化"],
    upright: "你具备启动计划所需的资源与专注力。",
    reversed: "能量分散，行动缺乏聚焦需回到起心动念。",
  },
  {
    name: "女祭司",
    keywords: ["直觉", "潜意识"],
    upright: "倾听内在的声音，答案已存在心中。",
    reversed: "情绪尚未被看见，容易被表象迷惑。",
  },
  {
    name: "女皇",
    keywords: ["滋养", "创造"],
    upright: "以温柔与包容创造稳定，丰盛正在酝酿。",
    reversed: "过度付出或忽略自我需求，补充能量很重要。",
  },
  {
    name: "皇帝",
    keywords: ["秩序", "掌控"],
    upright: "建立清晰规则与界限将带来安全感。",
    reversed: "控制欲或僵化让你失去弹性。",
  },
  {
    name: "教皇",
    keywords: ["传统", "指导"],
    upright: "遵循成熟的方法，向导师或体系学习。",
    reversed: "挑战旧有框架，寻找更能表达自我的方式。",
  },
  {
    name: "恋人",
    keywords: ["选择", "连结"],
    upright: "价值观相合，信任与协同正在建立。",
    reversed: "需要面对的不只是关系，还有自己的犹豫。",
  },
  {
    name: "战车",
    keywords: ["推进", "胜利"],
    upright: "集中意志即可突破阻力，看见成果。",
    reversed: "方向感模糊，先厘清真正的目标。",
  },
  {
    name: "力量",
    keywords: ["耐心", "勇气"],
    upright: "以温柔的坚韧驯服内在的野性。",
    reversed: "情绪波动提醒你与自己和解。",
  },
  {
    name: "隐者",
    keywords: ["沉淀", "洞察"],
    upright: "暂时抽离喧嚣，独处能带来答案。",
    reversed: "过度退缩让外界难以支持你。",
  },
  {
    name: "命运之轮",
    keywords: ["周期", "机会"],
    upright: "趋势正在转向，顺势而为将得到助力。",
    reversed: "反复的事件提醒你调整旧模式。",
  },
  {
    name: "正义",
    keywords: ["秩序", "平衡"],
    upright: "公平与责任是现在的关键，保持客观。",
    reversed: "评估是否陷入偏见或不平衡的承诺。",
  },
  {
    name: "吊人",
    keywords: ["等待", "视角"],
    upright: "放慢脚步，改变视角后会看到新答案。",
    reversed: "僵持太久，需要勇敢结束损耗。",
  },
  {
    name: "死神",
    keywords: ["转化", "结束"],
    upright: "旧阶段完成，接受结尾才能迎接新生。",
    reversed: "抗拒转变只会延长阵痛。",
  },
  {
    name: "节制",
    keywords: ["调和", "节奏"],
    upright: "保持节奏与适度，融合资源会创造奇迹。",
    reversed: "失衡需要被看见，避免过度或极端。",
  },
  {
    name: "恶魔",
    keywords: ["诱惑", "束缚"],
    upright: "觉察反复出现的执念，选择力量在你手上。",
    reversed: "松绑旧的契约，主动挣脱依赖。",
  },
  {
    name: "高塔",
    keywords: ["突变", "觉醒"],
    upright: "剧烈的变化是在拆除脆弱的地基。",
    reversed: "已有预兆，别忽略需要修正的结构。",
  },
  {
    name: "星星",
    keywords: ["疗愈", "希望"],
    upright: "信任自己的步调，愿景在缓慢成形。",
    reversed: "重拾信心，让灵感重新流动。",
  },
  {
    name: "月亮",
    keywords: ["潜意识", "迷雾"],
    upright: "敏锐的直觉正在提醒你查证事实。",
    reversed: "不安多来自想象而非现实，回到身体感受。",
  },
  {
    name: "太阳",
    keywords: ["喜悦", "清晰"],
    upright: "事情正在明朗化，勇敢展现自己。",
    reversed: "注意自我怀疑或过度自信造成的波动。",
  },
  {
    name: "审判",
    keywords: ["觉醒", "召唤"],
    upright: "回应灵魂的召唤，整合过去的经验。",
    reversed: "迟迟无法下定决心，需要原谅自己。",
  },
  {
    name: "世界",
    keywords: ["完成", "整合"],
    upright: "阶段圆满告一段落，准备迎接新循环。",
    reversed: "尚有未完成的环节，回头补上关键一块。",
  },
];

const spreadMap = new Map(spreads.map((spread) => [spread.id, spread]));

const keywordRules = [
  { id: "relationshipMirror", keywords: ["感情", "爱情", "婚姻", "伴侣", "关系", "暧昧"] },
  { id: "careerCompass", keywords: ["工作", "事业", "职位", "晋升", "offer", "项目", "职场", "团队"] },
  { id: "decisionMatrix", keywords: ["选择", "决定", "方案", "要不要", "选", "抉择", "取舍"] },
  { id: "threeFlow", keywords: ["未来", "趋势", "发展", "计划", "走向", "前景"] },
];

const elements = {};

const state = {
  recommendedSpreadId: spreads[0].id,
  manualOverride: false,
};

let session = null;

document.addEventListener("DOMContentLoaded", () => {
  elements.question = document.getElementById("questionInput");
  elements.autoLabel = document.getElementById("autoSpreadLabel");
  elements.select = document.getElementById("spreadSelect");
  elements.drawBtn = document.getElementById("drawButton");
  elements.shuffleStage = document.getElementById("shuffleStage");
  elements.shuffleAnimation = document.getElementById("shuffleAnimation");
  elements.shuffleStatus = document.getElementById("shuffleStatus");
  elements.cardGrid = document.getElementById("cardGrid");
  elements.results = document.getElementById("results");
  elements.spreadSummary = document.getElementById("spreadSummary");
  elements.cardsContainer = document.getElementById("cardsContainer");
  elements.reading = document.getElementById("readingOutput");

  init();
});

function init() {
  renderSpreadOptions();
  attachEvents();
  updateRecommendation();
}

function renderSpreadOptions() {
  elements.select.innerHTML = "";
  spreads.forEach((spread) => {
    const option = document.createElement("option");
    option.value = spread.id;
    option.textContent = `${spread.name} · ${spread.cards}张牌`;
    elements.select.appendChild(option);
  });
  elements.select.value = state.recommendedSpreadId;
}

function attachEvents() {
  elements.question.addEventListener("input", () => {
    state.manualOverride = false;
    updateRecommendation();
  });

  elements.select.addEventListener("change", () => {
    state.manualOverride = elements.select.value !== state.recommendedSpreadId;
  });

  elements.drawBtn.addEventListener("click", () => {
    const question = elements.question.value.trim();
    if (!question) {
      alert("请先输入一个明确的问题，再开始占卜。");
      return;
    }

    const spread = spreadMap.get(elements.select.value) ?? spreadMap.get(state.recommendedSpreadId);
    beginManualDraw(question, spread);
  });
}

function updateRecommendation() {
  const question = elements.question.value.trim();
  const spread = selectSpreadByQuestion(question);
  state.recommendedSpreadId = spread.id;

  if (!question) {
    elements.autoLabel.textContent = "请先输入问题";
  } else {
    elements.autoLabel.textContent = `${spread.name} · ${spread.summary}`;
  }

  if (!state.manualOverride) {
    elements.select.value = spread.id;
  }
}

function selectSpreadByQuestion(question) {
  if (!question) {
    return spreadMap.get(state.recommendedSpreadId) ?? spreads[0];
  }

  const matchedRule = keywordRules.find((rule) =>
    rule.keywords.some((kw) => question.includes(kw))
  );

  if (matchedRule) {
    return spreadMap.get(matchedRule.id);
  }

  if (question.length > 30) {
    return spreadMap.get("decisionMatrix");
  }

  return spreadMap.get("threeFlow");
}

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = cryptoRandom(i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function cryptoRandom(max) {
  if (window.crypto?.getRandomValues) {
    const uint32 = new Uint32Array(1);
    window.crypto.getRandomValues(uint32);
    return uint32[0] % max;
  }
  return Math.floor(Math.random() * max);
}

async function renderResults(question, spread, cards) {
  elements.shuffleStage.classList.add("hidden");
  elements.results.classList.remove("hidden");
  elements.spreadSummary.innerHTML = `
    <h3>${spread.name}</h3>
    <p>${spread.summary}</p>
  `;

  renderCards(spread, cards);
  const context = analyzeQuestion(question);
  const fallback = buildReading(question, spread, cards, context).join("");
  elements.reading.innerHTML = "<p>正在生成更深入的解读...</p>";

  try {
    const aiHtml = await generateAiReading(question, spread, cards, context);
    if (aiHtml) {
      elements.reading.innerHTML = aiHtml;
    } else {
      elements.reading.innerHTML = fallback + buildAiFallbackNote("AI 服务未返回内容，已展示本地解读。");
    }
  } catch (error) {
    console.error(error);
    elements.reading.innerHTML = fallback + buildAiFallbackNote(error.message);
  }
}

function renderCards(spread, cards) {
  elements.cardsContainer.innerHTML = "";
  cards.forEach((card, index) => {
    const position = spread.positions[index];
    const article = document.createElement("article");
    article.className = "card";
    article.innerHTML = `
      <p class="position-label">${position?.label ?? `位置 ${index + 1}`}</p>
      <h3>${card.name}</h3>
      <span>${card.isReversed ? "逆位" : "正位"} · ${card.keywords.join(" / ")}</span>
      <p>${card.isReversed ? card.reversed : card.upright}</p>
    `;
    elements.cardsContainer.appendChild(article);
  });
}

function buildReading(question, spread, cards, context = analyzeQuestion(question)) {
  const narrative = [];
  const focus = summarizeQuestion(question);
  narrative.push(
    `<p>${focus}，${spread.name}提示：${spread.summary}${
      context.domainCopy ? `。${context.domainCopy}` : ""
    }</p>`
  );

  cards.forEach((card, index) => {
    const position = spread.positions[index];
    const meaning = card.isReversed ? card.reversed : card.upright;
    narrative.push(
      `<p><strong>${position?.label ?? `位置 ${index + 1}`}</strong> · ${
        card.name
      }（${card.isReversed ? "逆位" : "正位"}）：${meaning}${contextualizeCard(
        position,
        card,
        context
      )}</p>`
    );
  });

  const advice = buildAdvice(question, cards, context);
  narrative.push(`<p><strong>综合建议：</strong>${advice}</p>`);

  return narrative;
}

function summarizeQuestion(question) {
  if (!question) return "此刻的状态";
  if (question.length < 12) return `关于“${question}”`;
  return `聚焦在“${question.slice(0, 12)}...”`;
}

function buildAdvice(question, cards, context) {
  const emotionalCards = ["恋人", "女皇", "星星"];
  const actionCards = ["战车", "力量", "魔术师", "皇帝"];
  const turningCards = ["命运之轮", "死神", "高塔", "审判"];

  const hasEmotion = cards.some((card) => emotionalCards.includes(card.name));
  const hasAction = cards.some((card) => actionCards.includes(card.name));
  const hasTurning = cards.some((card) => turningCards.includes(card.name));

  const sentences = [];

  if (hasEmotion) {
    sentences.push("留意情绪与信任的流动，坦诚表达会带来转机。");
  }
  if (hasAction) {
    sentences.push("当下需要果断的行动，把想象落实成步骤。");
  }
  if (hasTurning) {
    sentences.push("近期将迎来阶段性的转折，允许旧结构结束。");
  }

  if (!sentences.length) {
    sentences.push("保持觉察与弹性，相信自己解锁答案的能力。");
  }

  if (question.includes("什么时候") || question.includes("时间")) {
    sentences.push("时间点取决于你多快整合讯息并采取行动。");
  }

  if (context.domain === "relationship") {
    sentences.push("回到彼此真实的需求，调整沟通方式能让关系更顺。");
  } else if (context.domain === "career") {
    sentences.push("将洞察落实到计划，关注资源分配与边界。");
  } else if (context.domain === "decision") {
    sentences.push("分别评估选择背后的动机，再对齐内心的价值排序。");
  } else if (context.domain === "outlook") {
    sentences.push("保持灵活，在变化中寻找持续推进的脉络。");
  }

  return sentences.join(" ");
}

function beginManualDraw(question, spread) {
  const deck = shuffle(
    tarotDeck.map((card) => ({
      ...card,
      isReversed: Math.random() > 0.5,
    }))
  );

  session = {
    question,
    spread,
    deck,
    selectedCards: [],
    pickedIndices: new Set(),
  };

  elements.results.classList.add("hidden");
  elements.shuffleStage.classList.remove("hidden");
  elements.cardGrid.classList.add("hidden");
  elements.cardGrid.classList.remove("card-grid--visible");
  elements.cardGrid.innerHTML = "";
  elements.shuffleStatus.textContent = "正在洗牌...";

  elements.cardGrid.replaceChildren(
    ...deck.map((_, index) => createCardBack(index))
  );

  setTimeout(() => {
    if (!session) return;
    elements.shuffleStatus.textContent = `请选择 ${spread.cards} 张牌`;
    elements.cardGrid.classList.remove("hidden");
    requestAnimationFrame(() => {
      elements.cardGrid.classList.add("card-grid--visible");
    });
  }, 1400);
}

function createCardBack(index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "card-back";
  button.innerHTML = `
    <span class="card-back__front">点击抽牌</span>
    <span class="card-back__glow"></span>
  `;
  button.dataset.index = String(index);
  button.addEventListener("click", handleCardPick);
  return button;
}

function handleCardPick(event) {
  if (!session) return;
  const target = event.currentTarget;
  const index = Number(target.dataset.index);
  if (Number.isNaN(index)) return;
  if (session.pickedIndices.has(index)) return;
  if (session.selectedCards.length >= session.spread.cards) return;

  session.pickedIndices.add(index);
  const card = session.deck[index];
  session.selectedCards.push(card);

  target.classList.add("revealed");
  target.innerHTML = `
    <span class="card-back__title">${card.name}</span>
    <small>${card.isReversed ? "逆位" : "正位"} · ${card.keywords.join(" / ")}</small>
  `;

  if (session.selectedCards.length === session.spread.cards) {
    elements.shuffleStatus.textContent = "抽牌完成，生成解读中...";
    setTimeout(async () => {
      if (!session) return;
      const currentSession = { ...session };
      session = null;
      await renderResults(currentSession.question, currentSession.spread, currentSession.selectedCards);
    }, 800);
  } else {
    const remaining = session.spread.cards - session.selectedCards.length;
    elements.shuffleStatus.textContent = `还需选择 ${remaining} 张牌`;
  }
}

function analyzeQuestion(question) {
  const domainRules = [
    { domain: "relationship", copy: "关注情感互动与彼此站位。", keywords: ["感情", "爱情", "暧昧", "婚姻", "分手", "复合", "他对我", "她对我", "伴侣"] },
    { domain: "career", copy: "重点考量事业发展与资源配置。", keywords: ["工作", "事业", "职场", "offer", "面试", "晋升", "公司", "老板", "团队", "绩效"] },
    { domain: "decision", copy: "这是关于抉择的提问，适合权衡多个方案。", keywords: ["要不要", "是否", "选", "选择", "决定", "方案", "换", "留", "走", "辞职", "转行"] },
    { domain: "outlook", copy: "提问聚焦趋势与未来走向。", keywords: ["未来", "发展", "走向", "会怎样", "趋势", "前景"] },
  ];

  const tone = {
    uncertainty: ["怎么办", "可不可以", "会不会", "是不是", "好吗", "如何"],
    timeframe: ["什么时候", "多久", "何时", "时间", "哪一年"],
    finance: ["财", "钱", "收入", "投资", "回报"],
  };

  const lowerQuestion = question.trim();

  const rule = domainRules.find((item) =>
    item.keywords.some((kw) => lowerQuestion.includes(kw))
  );

  return {
    domain: rule?.domain ?? "general",
    domainCopy: rule?.copy ?? "",
    isUncertain: tone.uncertainty.some((kw) => lowerQuestion.includes(kw)),
    caresTime: tone.timeframe.some((kw) => lowerQuestion.includes(kw)),
    caresFinance: tone.finance.some((kw) => lowerQuestion.includes(kw)),
  };
}

function contextualizeCard(position, card, context) {
  if (!context || context.domain === "general") {
    return "";
  }

  const label = position?.label ?? "";
  if (context.domain === "relationship") {
    return `，提示你从关系角度理解“${label || card.name}”带来的情绪与界限。`;
  }
  if (context.domain === "career") {
    return `，放在职场语境，可聚焦资源、节奏与角色分工。`;
  }
  if (context.domain === "decision") {
    return `，为当前选择提供额外的参考视角。`;
  }
  if (context.domain === "outlook") {
    return "，它描述了事件长期的脉络与可预见的节点。";
  }
  return "";
}

async function generateAiReading(question, spread, cards, context) {
  const payload = {
    model: "deepseek-reasoner",
    messages: [
      {
        role: "system",
        content:
          "你是一位资深塔罗占卜师，会结合提问背景、牌阵位置与牌义，给出接地气的中文解读【纯文本格式、不要包含markdown】。回答时保持温和但直截了当的风格。 拿到卡片后，请您仔细说明它们的意义，解释哪张卡片属于未来或现在或过去，结合问题来解释它们，并给出有用的建议或现在应该做的事情。",
      },
      {
        role: "user",
        content: buildPrompt(question, spread, cards, context),
      },
    ],
    temperature: 0.8,
  };

  const response = await fetch("/api/deepseek", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DeepSeek request failed: ${errorText}`);
  }

  const data = await response.json();
  const aiContent = data?.choices?.[0]?.message?.content?.trim();
  if (!aiContent) return null;

  return formatAiContentToHtml(aiContent);
}

function buildPrompt(question, spread, cards, context) {
  const positions = spread.positions.map((pos, index) => {
    const card = cards[index];
    return `${pos?.label ?? `位置${index + 1}`}: ${card.name}（${
      card.isReversed ? "逆位" : "正位"
    }，关键词：${card.keywords.join("、")}，牌义：${
      card.isReversed ? card.reversed : card.upright
    }）`;
  });

  const domainLine =
    context.domain === "general"
      ? "问题领域：通用 / 综合"
      : `问题领域：${context.domain}，补充：${context.domainCopy}`;

  const toneLines = [
    context.isUncertain ? "提问语气：存在不确定/求证" : null,
    context.caresTime ? "聚焦时间：是" : null,
    context.caresFinance ? "涉及财务或资源议题" : null,
  ]
    .filter(Boolean)
    .join("；");

  return [
    `提问：${question}`,
    domainLine,
    toneLines ? toneLines : "",
    `牌阵：${spread.name}，共 ${spread.cards} 张`,
    "抽到的牌：",
    ...positions,
    "请根据以上信息输出：",
    "1. 提问者现况 / 能量摘要",
    "2. 逐张牌的深度解析，说明牌义如何回应问题",
    "3. 综合建议（可以包含行动指引、心态调整、时间提醒等）",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildAiFallbackNote(reason) {
  return `<div class="ai-note">AI 解读暂不可用：${reason || "未知原因"}。已自动使用通用解读。</div>`;
}

function formatAiContentToHtml(content) {
  const cleaned = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/!\[(.*?)\]\((.*?)\)/g, "$1");

  const lines = cleaned
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  return lines
    .map((line) => {
      if (/^#{1,6}\s+/.test(line)) {
        return `<p><strong>${line.replace(/^#{1,6}\s+/, "")}</strong></p>`;
      }

      if (/^\d+\.\s+/.test(line)) {
        return `<p><strong>${line.replace(/^(\d+)\.\s+/, "$1. ")}</strong></p>`;
      }

      if (/^[-*•]\s+/.test(line)) {
        return `<p>• ${line.replace(/^[-*•]\s+/, "")}</p>`;
      }

      return `<p>${line
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/_(.+?)_/g, "<em>$1</em>")}</p>`;
    })
    .join("");
}

