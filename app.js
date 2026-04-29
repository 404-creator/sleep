const STORAGE_KEY = "sleep_bureau_state_v1";

const defaultRewards = [
  { id: "milk-tea", title: "一杯奶茶券", cost: 30, category: "吃喝", redeemed: 0 },
  { id: "hug", title: "认真抱抱 3 分钟", cost: 20, category: "撒娇", redeemed: 0 },
  { id: "date-choice", title: "周末约会优先选择权", cost: 80, category: "约会", redeemed: 0 },
  { id: "praise", title: "对方必须认真夸夸", cost: 25, category: "撒娇", redeemed: 0 },
  { id: "movie", title: "一起看一部电影", cost: 60, category: "陪伴", redeemed: 0 },
  { id: "breakfast", title: "明天早餐奖励", cost: 45, category: "吃喝", redeemed: 0 },
  { id: "goodnight-call", title: "睡前 10 分钟语音陪伴", cost: 35, category: "陪伴", redeemed: 0 },
  { id: "morning-message", title: "明早专属早安长消息", cost: 25, category: "陪伴", redeemed: 0 },
  { id: "dessert", title: "甜品任选一次", cost: 55, category: "吃喝", redeemed: 0 },
  { id: "late-forgive", title: "一次小迟到免念叨券", cost: 70, category: "自由", redeemed: 0 },
  { id: "photo-praise", title: "发一张照片并收获 5 句夸夸", cost: 40, category: "撒娇", redeemed: 0 },
  { id: "walk-date", title: "饭后散步 30 分钟", cost: 35, category: "约会", redeemed: 0 },
  { id: "playlist", title: "给你做一份晚安歌单", cost: 50, category: "陪伴", redeemed: 0 },
  { id: "snack-box", title: "零食补给一次", cost: 65, category: "吃喝", redeemed: 0 },
  { id: "game-round", title: "一起打一局小游戏", cost: 45, category: "陪伴", redeemed: 0 },
  { id: "no-argue", title: "冷静沟通优先券", cost: 75, category: "生活", redeemed: 0 },
  { id: "choice-song", title: "今晚听你选的歌", cost: 20, category: "自由", redeemed: 0 },
  { id: "tiny-gift", title: "一个 20 元以内小礼物", cost: 90, category: "约会", redeemed: 0 },
  { id: "massage", title: "肩颈放松 10 分钟", cost: 80, category: "撒娇", redeemed: 0 },
  { id: "chore-swap", title: "一次家务交换券", cost: 70, category: "生活", redeemed: 0 },
  { id: "weekend-lazy", title: "周末赖床 20 分钟特批", cost: 60, category: "自由", redeemed: 0 },
  { id: "memory-card", title: "写一张回忆小卡片", cost: 30, category: "陪伴", redeemed: 0 },
  { id: "cafe-date", title: "咖啡店坐一下午", cost: 120, category: "约会", redeemed: 0 },
  { id: "sleep-captain", title: "连续 7 天早睡队长称号", cost: 100, category: "生活", redeemed: 0 },
  { id: "handwritten", title: "手写一句晚安拍给你", cost: 35, category: "撒娇", redeemed: 0 },
  { id: "route-choice", title: "下次散步路线你决定", cost: 25, category: "自由", redeemed: 0 }
];

const promptBank = {
  early: [
    "离约定睡觉还有一会儿，监督局建议你开始收尾：水喝好，灯调暗，心事先放一放。",
    "现在是睡前缓冲时间，适合把明天要做的事写下来，别让脑子躺在床上继续上班。",
    "今日份努力即将封箱，请把未完成的小尾巴交给明天的自己。",
    "可以开始慢慢降速了，睡觉不是认输，是给明天充值。",
    "监督局温柔提醒：现在收尾，待会儿就不用和被窝进行艰苦谈判。",
    "今晚的目标不是立刻睡着，是准时开始变安静。",
    "请把屏幕亮度调低一点，把自己调软一点，把今天调成完成状态。",
    "再忙也要给身体留一个体面的退场时间。"
  ],
  bedtime: [
    "到点啦。请立即进入晚安模式，今天的你已经够好了。",
    "睡觉监督局正式敲章：现在适合睡觉，不适合再刷一条。",
    "请放下手机，盖好被子，接受今晚的温柔监管。",
    "你的睡眠目标已到站，请不要坐过站。",
    "现在闭眼不亏，明天精神状态会给你返利。",
    "晚安时间到。今天不需要再证明什么，睡醒再说。",
    "请停止和困意拉扯，困意这边已经派出被窝代表。",
    "监督局宣布：今晚的优秀表现，从按时睡觉开始。"
  ],
  grace: [
    "还在宽限时间内，赶紧收手，今晚依然算你自律。",
    "监督局给你留了台阶，现在下去刚刚好。",
    "最后缓冲期了，再拖就要进入调侃执法。",
    "现在睡还来得及，积分还在门口等你。",
    "别让 5 分钟变成 50 分钟，快点晚安。",
    "你已经站在熬夜边缘，往被窝方向撤退。",
    "再不睡，明天的黑眼圈可能会发表意见。",
    "宽限时间不是加时赛，是降落跑道。"
  ],
  overdueSoft: [
    "已经超过睡觉时间了。没关系，现在补救仍然有效，先关屏幕。",
    "今晚有点晚，但监督局还愿意给你一个温柔的重新开始。",
    "不要自责，先睡觉。明天我们再把节奏拉回来。",
    "你不是失败了，只是需要立刻结束今天。",
    "现在最重要的不是解释为什么晚睡，是马上减少继续晚睡。",
    "把今天停在这里吧，剩下的交给睡眠修复。",
    "迟到了也可以回到正轨，晚安按钮就在这里。",
    "监督局不骂你，但会认真把你往被窝里推。"
  ],
  overdueNormal: [
    "已熬夜，证据充分。请立刻放下电子设备，别让明天替今晚买单。",
    "监督局记录：有人嘴上说早睡，手上还在操作。",
    "你现在每多刷一分钟，明天起床难度就加一层。",
    "别装了，你不是不困，你是在和睡眠讨价还价。",
    "当前行为不利于明天精神面貌，请迅速整改。",
    "熬夜不是灵感，是电量红了还硬撑。",
    "你已经超过约定时间，建议立刻向被窝报到。",
    "今晚再继续拖，明天的你会实名投诉。"
  ],
  overdueSpicy: [
    "睡觉监督局已上线执法：你这个点还醒着，多少有点不把明天放眼里。",
    "很好，熬夜选手又开始了。请问你是在参加黑眼圈养成计划吗？",
    "当前状态：困，但嘴硬。处理建议：闭眼。",
    "你再不睡，监督局就要把你列入重点观察对象。",
    "别刷了，手机都快被你熬出工伤了。",
    "你以为你在掌控夜晚，其实是夜晚在偷偷扣你血条。",
    "请立刻投降，被窝方面愿意从轻处理。",
    "再熬下去，明天起床的你会对今晚的你进行严肃会谈。"
  ],
  success: [
    "打卡成功。今晚的你很靠谱，积分已到账。",
    "早睡记录已盖章，明天的精神状态会感谢你。",
    "你赢了今晚这一小局，连续早睡正在变成习惯。",
    "漂亮，按时收工。愿你睡得安稳，醒来轻一点。",
    "监督局认可你的自律表现，奖励已经安排。",
    "今天完成得很好，晚安，明天继续攒分。",
    "准时睡觉这件小事，正在悄悄改变你。",
    "你给明天送了一份很实用的礼物：睡眠。"
  ],
  nudge: [
    "睡觉监督局提醒：你的早睡搭子已经被点名，请温柔催 TA 放下手机。",
    "亲爱的，今天先睡吧。明天还要用精神满满的样子见面。",
    "我不是来管你的，我是来把你从熬夜手里捞回来的。",
    "快睡觉。你明天好看一点、开心一点，我会很赚。",
    "现在去睡，奖励一个认真晚安。继续熬夜，奖励一份明天的后悔。",
    "听话，先睡。世界不会因为你今晚少刷几分钟就跑掉。",
    "我申请把你从手机旁边领走，目的地：被窝。",
    "今晚的任务只剩一个：闭眼，休息，被爱监督。",
    "别硬撑啦。你睡着之后，我也会觉得今天被好好结束了。",
    "早睡搭子请求连线：请立刻下线，梦里集合。"
  ],
  morning: [
    "昨晚如果睡得不错，今天记得给自己一点肯定。",
    "早上好。睡眠不是偷懒，是身体认真维修了一整晚。",
    "如果昨晚没做到，也别放弃。习惯是用很多个今晚练出来的。",
    "今天的目标很简单：白天少透支，晚上好收工。",
    "起床后晒一会儿光，今晚会更容易困。",
    "新的一天开始，监督局建议你先喝水，再处理世界。"
  ]
};

const checklistItems = [
  { id: "water", title: "喝几口水", desc: "不用喝太多，避免夜里频繁醒。" },
  { id: "plan", title: "写下明天最重要的一件事", desc: "让大脑知道不用躺下后继续排队。" },
  { id: "light", title: "调暗灯光和屏幕", desc: "减少刺激，给困意一点出现的空间。" },
  { id: "wash", title: "洗漱完成", desc: "完成后不要再回到工作状态。" },
  { id: "phone", title: "手机放到够不到的地方", desc: "距离是最朴素也最有效的自控。" },
  { id: "breath", title: "做 6 轮慢呼吸", desc: "吸气 4 秒，呼气 6 秒，身体会慢慢降速。" }
];

const actionBank = {
  idle: [
    { title: "白天少透支", desc: "下午以后少喝咖啡，晚上更容易困。" },
    { title: "提前收尾", desc: "把今晚必须做的事提前排好，不把所有事拖到床边。" },
    { title: "准备奖励", desc: "挑一个想兑换的小奖励，让早睡有一点甜头。" },
    { title: "晚饭别太撑", desc: "睡前太撑会影响入睡，晚饭后给身体一点消化时间。" },
    { title: "定一个停止工作点", desc: "给工作或学习设一个结束时间，别让它悄悄延长。" },
    { title: "先充电", desc: "手机和耳机提前充电，睡前不用再找线。" },
    { title: "降低明天焦虑", desc: "把明天第一件事写下来，今晚就不用反复想。" },
    { title: "保持房间舒服", desc: "提前整理枕头、被子和温度，让上床阻力变小。" }
  ],
  pre: [
    { title: "完成收尾清单", desc: "喝水、洗漱、写下明天最重要的一件事。" },
    { title: "屏幕降速", desc: "只保留必要消息，别再打开新内容。" },
    { title: "开启呼吸节奏", desc: "做 6 轮慢呼吸，让身体先同意休息。" },
    { title: "把手机放远", desc: "放到床边以外，最好需要起身才能拿到。" },
    { title: "关掉强刺激", desc: "短视频、游戏、工作群先下线，别给大脑加速。" },
    { title: "洗漱后不返工", desc: "洗漱完成就是今日结束线，不再回到工作状态。" },
    { title: "写一句晚安", desc: "给自己或对方留一句话，让今天有个柔和句号。" },
    { title: "打开暖色灯", desc: "把房间光线调暗，给困意留位置。" }
  ],
  grace: [
    { title: "别谈判", desc: "宽限时间只用来收尾，不用来再刷一轮。" },
    { title: "马上打卡", desc: "现在完成打卡，今晚仍然算按时。" },
    { title: "三分钟撤退", desc: "关屏、放手机、躺下，别让宽限变加时。" },
    { title: "只做必要动作", desc: "别再整理复杂任务，今晚只负责结束。" },
    { title: "发一张催睡卡", desc: "让对方轻轻推你一下，别一个人硬撑。" },
    { title: "关掉通知", desc: "把非必要通知静音，减少重新被拉回去的机会。" },
    { title: "明早再处理", desc: "把未完成事项写进明天，不要躺着继续想。" },
    { title: "喝一小口水", desc: "最后补一点水，然后离开屏幕。" }
  ],
  overdue: [
    { title: "立刻停止新增内容", desc: "不要再打开新视频、新聊天、新工作项，先切断刺激源。" },
    { title: "三步补救", desc: "关屏幕、洗漱、按下“我准备睡啦”，今晚先减少损失。" },
    { title: "明天调整", desc: "如果连续两次超时，建议把睡前提醒提前 15 分钟。" },
    { title: "不做复盘", desc: "现在不适合分析原因，先睡，明天早上再复盘。" },
    { title: "低光撤退", desc: "把亮度降到最低，直接走向洗漱和被窝。" },
    { title: "停止自责", desc: "熬夜已经发生，继续熬才是更大的损失。" },
    { title: "设置屏幕距离", desc: "手机放远一点，让下一次拿起需要成本。" },
    { title: "发送求监督", desc: "生成催睡卡发给对方，让今晚快点收场。" }
  ],
  checked: [
    { title: "保持下线", desc: "今晚已经打卡，尽量别再回到高刺激内容里。" },
    { title: "明早复盘", desc: "起床后记录睡眠质量，监督局会帮你看趋势。" },
    { title: "连续奖励", desc: "继续保持，连续早睡会带来额外积分。" },
    { title: "别二次开机", desc: "打卡后不要再打开工作、聊天或娱乐入口。" },
    { title: "保持环境安静", desc: "让房间维持暗一点、慢一点、少一点。" },
    { title: "放过今天", desc: "今天已经结束，不需要再补一个所谓最后任务。" },
    { title: "明早看战绩", desc: "醒后再看积分和记录，现在让大脑离线。" },
    { title: "安心睡", desc: "你已经做了对明天最有用的一件事。" }
  ]
};

let state = loadState();
let activeView = "today";
let breathingTimer = null;
let breathingOn = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    return mergeState(getDefaultState(), JSON.parse(raw));
  } catch {
    return getDefaultState();
  }
}

function getDefaultState() {
  return {
    settings: {
      ownerName: "我",
      partnerName: "TA",
      coupleName: "早睡搭子",
      bedTime: "23:30",
      wakeTime: "07:30",
      graceMinutes: 20,
      leadMinutes: 30,
      repeatMinutes: 15,
      teaseLevel: "normal",
      notifications: false,
      autoWinddown: true,
      strictMode: false,
      screenLimitMinutes: 20,
      weeklyTarget: 5,
      wakeIntention: "明早清醒一点，脾气好一点。"
    },
    totalPoints: 0,
    checkins: [],
    reviews: [],
    rewards: defaultRewards.map((reward) => ({ ...reward })),
    promises: [
      { id: "promise-phone", title: "23:00 后不刷短视频" },
      { id: "promise-work", title: "洗漱后不再处理工作消息" },
      { id: "promise-bed", title: "手机不带进被窝" },
      { id: "promise-light", title: "睡前把灯光调暗" }
    ],
    promiseChecks: {},
    winddown: {},
    notificationLog: {},
    lastOverdueNoticeAt: 0,
    lastActiveAt: Date.now()
  };
}

function mergeState(base, incoming) {
  return {
    ...base,
    ...incoming,
    settings: { ...base.settings, ...(incoming.settings || {}) },
    rewards: normalizeRewards(Array.isArray(incoming.rewards) && incoming.rewards.length ? incoming.rewards : base.rewards),
    checkins: Array.isArray(incoming.checkins) ? incoming.checkins : [],
    reviews: Array.isArray(incoming.reviews) ? incoming.reviews : [],
    promises: Array.isArray(incoming.promises) && incoming.promises.length ? incoming.promises : base.promises,
    promiseChecks: incoming.promiseChecks || {},
    winddown: incoming.winddown || {},
    notificationLog: incoming.notificationLog || {}
  };
}

function normalizeRewards(rewards) {
  const existing = rewards.map((reward) => ({
    category: "自由",
    redeemed: 0,
    ...reward
  }));
  const existingIds = new Set(existing.map((reward) => reward.id));
  const missingDefaults = defaultRewards
    .filter((reward) => !existingIds.has(reward.id))
    .map((reward) => ({ ...reward }));
  return [...existing, ...missingDefaults];
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function dateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function fromDateKey(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function withTime(date, time) {
  const [hours, minutes] = time.split(":").map(Number);
  const next = new Date(date);
  next.setHours(hours, minutes, 0, 0);
  return next;
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

function getCycle(now = new Date()) {
  const bedMinutes = timeToMinutes(state.settings.bedTime);
  const wakeMinutes = timeToMinutes(state.settings.wakeTime);
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  let sleepDate = new Date(now);

  if (bedMinutes > wakeMinutes) {
    if (nowMinutes < wakeMinutes) sleepDate = addDays(now, -1);
  } else if (nowMinutes >= wakeMinutes) {
    sleepDate = addDays(now, 1);
  }

  const target = withTime(sleepDate, state.settings.bedTime);
  const wakeBase = bedMinutes > wakeMinutes ? addDays(sleepDate, 1) : sleepDate;
  const wake = withTime(wakeBase, state.settings.wakeTime);

  return {
    sleepDay: dateKey(sleepDate),
    target,
    wake,
    pre: addMinutes(target, -Number(state.settings.leadMinutes || 30)),
    grace: addMinutes(target, Number(state.settings.graceMinutes || 0))
  };
}

function getRecord(day) {
  return state.checkins.find((item) => item.sleepDay === day);
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function promptForStatus(status) {
  if (status === "pre") return randomFrom(promptBank.early);
  if (status === "bedtime") return randomFrom(promptBank.bedtime);
  if (status === "grace") return randomFrom(promptBank.grace);
  if (status === "overdue") {
    if (state.settings.teaseLevel === "soft") return randomFrom(promptBank.overdueSoft);
    if (state.settings.teaseLevel === "spicy") return randomFrom(promptBank.overdueSpicy);
    return randomFrom(promptBank.overdueNormal);
  }
  if (status === "success") return randomFrom(promptBank.success);
  return randomFrom([...promptBank.early, ...promptBank.morning]);
}

function getStatus(now = new Date()) {
  const cycle = getCycle(now);
  const record = getRecord(cycle.sleepDay);
  if (record) return { name: "checked", cycle, record };
  if (now < cycle.pre) return { name: "idle", cycle };
  if (now < cycle.target) return { name: "pre", cycle };
  if (now <= cycle.grace) return { name: "grace", cycle };
  return { name: "overdue", cycle };
}

function formatDuration(ms) {
  const abs = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(abs / 3600);
  const minutes = Math.floor((abs % 3600) / 60);
  const seconds = abs % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function formatTime(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function render() {
  renderBrand();
  renderToday();
  renderTrends();
  renderPlanner();
  renderSettings();
  renderAid();
  renderRecords();
  renderRewards();
}

function renderBrand() {
  $("#brand-subtitle").textContent = `${state.settings.ownerName} 和 ${state.settings.partnerName} 的晚安约定`;
}

function getPromiseDay() {
  return getCycle().sleepDay;
}

function renderToday() {
  const now = new Date();
  const status = getStatus(now);
  const record = status.record;
  const target = status.cycle.target;
  const nextWake = status.cycle.wake;
  const diff = target - now;
  const lateMinutes = Math.max(0, Math.ceil((now - status.cycle.grace) / 60000));
  const checkedText = record ? `已在 ${formatTime(new Date(record.createdAt))} 打卡` : "";

  $("#bedtime-readout").textContent = state.settings.bedTime;
  $("#waketime-readout").textContent = state.settings.wakeTime;
  $("#total-points").textContent = state.totalPoints;
  $("#reward-points").textContent = `${state.totalPoints} 积分可用`;

  if (status.name === "checked") {
    $("#countdown-title").textContent = "今晚已打卡";
    $("#countdown").textContent = record.status === "rest" ? "请假" : "晚安";
    $("#today-kicker").textContent = "已完成";
    $("#hero-message").textContent = checkedText || "今晚已经进入休息状态，别再打开工作模式。";
    $("#sleep-state").textContent = record.status === "late" ? "补救打卡" : record.status === "rest" ? "今晚请假" : "按时打卡";
    $("#status-line").textContent = record.status === "late" ? "虽然晚了点，但已经停止继续熬夜。" : record.status === "rest" ? "特殊情况已记录，明天继续回到节奏。" : "今晚表现不错，明天会感谢你。";
    $("#today-points").textContent = record.points;
  } else if (status.name === "idle") {
    $("#countdown-title").textContent = "距离睡觉还有";
    $("#countdown").textContent = formatDuration(diff);
    $("#today-kicker").textContent = "今日执勤中";
    $("#hero-message").textContent = `目标 ${state.settings.bedTime} 睡，${formatTime(nextWake)} 起。睡前 ${state.settings.leadMinutes} 分钟会开始提醒。`;
    $("#sleep-state").textContent = "待命";
    $("#status-line").textContent = "还没到睡前提醒，先把白天过好。";
    $("#today-points").textContent = "0";
  } else if (status.name === "pre") {
    $("#countdown-title").textContent = "睡前收尾";
    $("#countdown").textContent = formatDuration(diff);
    $("#today-kicker").textContent = "开始降速";
    $("#hero-message").textContent = promptForStatus("pre");
    $("#sleep-state").textContent = "收尾";
    $("#status-line").textContent = "适合洗漱、收拾、写明天计划。";
    $("#today-points").textContent = "可得 12";
  } else if (status.name === "grace") {
    $("#countdown-title").textContent = "宽限倒计时";
    $("#countdown").textContent = formatDuration(status.cycle.grace - now);
    $("#today-kicker").textContent = "还能抢救";
    $("#hero-message").textContent = promptForStatus("grace");
    $("#sleep-state").textContent = "宽限中";
    $("#status-line").textContent = "现在打卡依然算按时。";
    $("#today-points").textContent = "可得 10";
  } else {
    $("#countdown-title").textContent = "已超过";
    $("#countdown").textContent = `${lateMinutes} 分钟`;
    $("#today-kicker").textContent = "熬夜警报";
    $("#hero-message").textContent = promptForStatus("overdue");
    $("#sleep-state").textContent = "超时";
    $("#status-line").textContent = "现在睡仍然比继续熬更好。";
    $("#today-points").textContent = "可得 3";
  }

  const stats = getStats();
  $("#streak").textContent = `${stats.streak} 天`;
  $("#week-rate").textContent = `${stats.weekRate}%`;
  $("#discipline-score").textContent = `${stats.discipline}%`;
  $("#discipline-bar").style.width = `${stats.discipline}%`;
  renderActionPlan(status, stats);
  renderChallenge(stats);
}

function renderChallenge(stats) {
  const target = 7;
  const progress = Math.min(stats.streak, target);
  const left = Math.max(0, target - progress);
  $("#challenge-strip").innerHTML = left
    ? `7 日早睡挑战：${progress}/${target}<span>再坚持 ${left} 天，可兑换“连续 7 天早睡队长称号”。</span>`
    : `7 日早睡挑战完成<span>今晚别掉线，连续记录会继续延长。</span>`;
}

function renderTrends() {
  const summary = $("#trend-summary");
  const trendList = $("#trend-list");
  const suggestionList = $("#suggestion-list");
  const days = Array.from({ length: 14 }, (_, index) => dateKey(addDays(new Date(), -index)));
  const records = days
    .map((day) => ({ day, record: getRecord(day), review: state.reviews.find((item) => item.sleepDay === day) }))
    .filter((item) => item.record);
  const onTimeCount = records.filter((item) => item.record.status !== "late" && item.record.status !== "rest").length;
  const lateCount = records.filter((item) => item.record.status === "late").length;
  const restCount = records.filter((item) => item.record.status === "rest").length;
  const avgQuality = records
    .filter((item) => item.review)
    .reduce((sum, item, _, arr) => arr.length ? sum + Number(item.review.quality || 0) / arr.length : sum, 0);

  summary.innerHTML = [
    { title: "按时早睡", value: `${onTimeCount} 晚`, desc: "近 14 天的准时表现" },
    { title: "熬夜补救", value: `${lateCount} 晚`, desc: "超过宽限时间的次数" },
    { title: "请假休息", value: `${restCount} 晚`, desc: "特殊情况记录" },
    { title: "平均睡眠质量", value: avgQuality ? `${avgQuality.toFixed(1)}/5` : "--", desc: "来自醒后复盘" }
  ].map((item) => `
    <div class="planner-item">
      <div>
        <strong>${item.title}</strong>
        <p>${item.desc}</p>
      </div>
      <span class="badge">${item.value}</span>
    </div>
  `).join("");

  trendList.innerHTML = records.length ? records.map((item) => {
    const markClass = item.record.status === "late" ? "trend-mark late" : item.record.status === "rest" ? "trend-mark rest" : "trend-mark";
    const label = item.record.status === "late" ? "超时" : item.record.status === "rest" ? "请假" : "按时";
    return `
      <div class="trend-item">
        <div>
          <strong>${item.day}</strong>
          <p>${item.review ? `睡眠质量 ${item.review.quality}/5，精神 ${escapeHtml(item.review.energy)}` : "还没有醒后复盘。"}</p>
        </div>
        <span class="${markClass}">${label}</span>
      </div>
    `;
  }).join("") : `<div class="panel"><p>还没有足够记录，先从今晚开始。</p></div>`;

  const suggestions = buildTrendSuggestions(onTimeCount, lateCount, avgQuality);
  suggestionList.innerHTML = suggestions.map((item) => `
    <div class="suggestion-item">
      <div>
        <strong>${item.title}</strong>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join("");
}

function buildTrendSuggestions(onTimeCount, lateCount, avgQuality) {
  const suggestions = [];
  if (lateCount >= 3) {
    suggestions.push({
      title: "把提醒再提前一点",
      desc: "最近超时次数偏多，建议把睡前提醒再提前 10 到 15 分钟。"
    });
  }
  if (avgQuality && avgQuality < 3) {
    suggestions.push({
      title: "先改善收尾节奏",
      desc: "你有在睡，但睡得不稳，优先减少睡前屏幕刺激和临时工作。"
    });
  }
  if (onTimeCount >= 5) {
    suggestions.push({
      title: "继续冲周目标",
      desc: `最近状态不错，离每周 ${state.settings.weeklyTarget} 天目标已经很接近。`
    });
  }
  if (!suggestions.length) {
    suggestions.push(
      { title: "先保住连续记录", desc: "先别追求完美，连续记录 5 到 7 晚，趋势才会更清楚。" },
      { title: "早上做复盘", desc: "醒后花 20 秒记一下状态，监督局会更懂你的睡眠模式。" }
    );
  }
  return suggestions.slice(0, 4);
}

function renderPlanner() {
  $("#weekly-target").value = state.settings.weeklyTarget;
  $("#wake-intention").value = state.settings.wakeIntention;
  const day = getPromiseDay();
  state.promiseChecks[day] = state.promiseChecks[day] || {};
  const checks = state.promiseChecks[day];
  const completed = state.promises.filter((item) => checks[item.id]).length;
  const weeklyDone = getWeeklyOnTimeCount();

  $("#promise-list").innerHTML = state.promises.map((item) => `
    <div class="promise-item">
      <label>
        <input type="checkbox" data-promise-id="${item.id}" ${checks[item.id] ? "checked" : ""}>
        <span><strong>${escapeHtml(item.title)}</strong><p>今晚收尾时遵守这条约定。</p></span>
      </label>
      <button class="ghost" data-delete-promise="${item.id}">删除</button>
    </div>
  `).join("");

  $("#planner-progress").innerHTML = `
    <div class="planner-item">
      <div>
        <strong>本周目标进度</strong>
        <p>目标 ${state.settings.weeklyTarget} 天按时早睡。</p>
      </div>
      <span class="badge">${weeklyDone}/${state.settings.weeklyTarget}</span>
    </div>
    <div class="planner-item">
      <div>
        <strong>今晚约定完成</strong>
        <p>完成得越多，真正上床时阻力越小。</p>
      </div>
      <span class="badge">${completed}/${state.promises.length}</span>
    </div>
    <div class="planner-item">
      <div>
        <strong>明早期待状态</strong>
        <p>${escapeHtml(state.settings.wakeIntention || "清醒一点，稳定一点。")}</p>
      </div>
      <span class="badge">目标</span>
    </div>
  `;
}

function renderActionPlan(status, stats) {
  const actions = getActionPlan(status, stats);
  $("#action-list").innerHTML = actions.map((item) => `
    <div class="action-item">
      <span class="action-icon">${item.icon}</span>
      <div>
        <strong>${item.title}</strong>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join("");
}

function getActionPlan(status, stats) {
  const screenLimit = Number(state.settings.screenLimitMinutes || 20);
  const statusName = status.name === "idle" ? "idle" : status.name;
  const pool = actionBank[statusName] || actionBank.idle;
  const enriched = pool.map((item) => ({
    ...item,
    desc: item.desc
      .replace("只保留必要消息", `距离睡觉 ${screenLimit} 分钟内，只保留必要消息`)
      .replace("继续保持，连续早睡会带来额外积分。", `当前连续早睡 ${stats.streak} 天，继续保持会有额外积分。`)
      .replace("把今晚必须做的事提前排好", `睡前 ${state.settings.leadMinutes} 分钟开始降速，把今晚必须做的事提前排好`)
  }));
  return pickStableActions(enriched, status.cycle.sleepDay, statusName, 5);
}

function pickStableActions(pool, day, statusName, count) {
  const seed = hashText(`${day}:${statusName}:${state.checkins.length}:${state.reviews.length}`);
  return [...pool]
    .map((item, index) => ({ item, score: (seed + index * 37) % 101 }))
    .sort((a, b) => a.score - b.score)
    .slice(0, count)
    .map((entry, index) => ({ ...entry.item, icon: String(index + 1) }));
}

function hashText(text) {
  return [...text].reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) % 9973, 7);
}

function getStats() {
  const now = new Date();
  const cycle = getCycle(now);
  const currentDay = cycle.sleepDay;
  const sorted = [...state.checkins].sort((a, b) => b.sleepDay.localeCompare(a.sleepDay));
  let streak = 0;
  let day = fromDateKey(currentDay);

  if (!getRecord(currentDay) && now < cycle.target) {
    day = addDays(day, -1);
  }

  while (true) {
    const record = getRecord(dateKey(day));
    if (!record || record.status === "late") break;
    if (record.status !== "rest") streak += 1;
    day = addDays(day, -1);
  }

  const recentDays = Array.from({ length: 7 }, (_, index) => dateKey(addDays(fromDateKey(currentDay), -index)));
  const recentDone = recentDays.map(getRecord).filter((item) => item && item.status !== "rest");
  const onTime = recentDone.filter((item) => item.status !== "late").length;
  const weekRate = recentDone.length ? Math.round((onTime / recentDone.length) * 100) : 0;

  const status = getStatus(now);
  let discipline = 80;
  if (status.name === "checked") discipline = status.record.status === "late" ? 58 : status.record.status === "rest" ? 68 : 100;
  if (status.name === "idle") discipline = 82;
  if (status.name === "pre") discipline = 90;
  if (status.name === "grace") discipline = 72;
  if (status.name === "overdue") {
    const lateMinutes = Math.max(0, Math.ceil((now - status.cycle.grace) / 60000));
    discipline = Math.max(8, 55 - lateMinutes);
  }

  return { streak, weekRate, discipline, sorted };
}

function getWeeklyOnTimeCount() {
  const cycle = getCycle(new Date());
  const currentDay = fromDateKey(cycle.sleepDay);
  return Array.from({ length: 7 }, (_, index) => getRecord(dateKey(addDays(currentDay, -index))))
    .filter((item) => item && item.status !== "late" && item.status !== "rest").length;
}

function renderSettings() {
  $("#owner-name").value = state.settings.ownerName;
  $("#partner-name").value = state.settings.partnerName;
  $("#couple-name").value = state.settings.coupleName;
  $("#bed-time").value = state.settings.bedTime;
  $("#wake-time").value = state.settings.wakeTime;
  $("#grace-minutes").value = state.settings.graceMinutes;
  $("#lead-minutes").value = state.settings.leadMinutes;
  $("#repeat-minutes").value = state.settings.repeatMinutes;
  $("#tease-level").value = state.settings.teaseLevel;
  $("#notify-enabled").checked = state.settings.notifications;
  $("#winddown-enabled").checked = state.settings.autoWinddown;
  $("#strict-mode").checked = state.settings.strictMode;
  $("#screen-limit-minutes").value = state.settings.screenLimitMinutes;
  $("#settings-weekly-target").value = state.settings.weeklyTarget;
}

function renderAid() {
  const cycle = getCycle();
  const day = cycle.sleepDay;
  state.winddown[day] = state.winddown[day] || {};
  const checks = state.winddown[day];
  const list = $("#winddown-list");
  list.innerHTML = "";

  checklistItems.forEach((item) => {
    const row = document.createElement("div");
    row.className = "check-row";
    row.innerHTML = `
      <label>
        <input type="checkbox" data-check-id="${item.id}" ${checks[item.id] ? "checked" : ""}>
        <span><strong>${item.title}</strong><p>${item.desc}</p></span>
      </label>
    `;
    list.appendChild(row);
  });

  const audit = getSleepAudit();
  $("#sleep-audit").innerHTML = audit.map((item) => `
    <div class="audit-item">
      <div>
        <strong>${item.title}</strong>
        <p>${item.desc}</p>
      </div>
      <span class="badge">${item.tag}</span>
    </div>
  `).join("");
}

function getSleepAudit() {
  const recent = [...state.checkins]
    .sort((a, b) => b.sleepDay.localeCompare(a.sleepDay))
    .slice(0, 7);
  const reviews = [...state.reviews]
    .sort((a, b) => b.sleepDay.localeCompare(a.sleepDay))
    .slice(0, 7);
  const lateCount = recent.filter((item) => item.status === "late").length;
  const onTimeCount = recent.filter((item) => item.status !== "late").length;
  const qualityAvg = reviews.length
    ? (reviews.reduce((sum, item) => sum + Number(item.quality || 0), 0) / reviews.length).toFixed(1)
    : null;
  const plannedMinutes = plannedSleepMinutes();
  const activeAgo = Math.round((Date.now() - state.lastActiveAt) / 60000);
  const status = getStatus();
  const items = [
    {
      title: "近 7 次打卡",
      desc: recent.length ? `按时 ${onTimeCount} 次，熬夜补救 ${lateCount} 次。` : "还没有记录，今晚可以成为第一条。",
      tag: recent.length ? `${onTimeCount}/${recent.length}` : "待开始"
    },
    {
      title: "计划睡眠时长",
      desc: `按当前设置，从 ${state.settings.bedTime} 到 ${state.settings.wakeTime} 约 ${Math.floor(plannedMinutes / 60)} 小时 ${plannedMinutes % 60} 分钟。`,
      tag: plannedMinutes >= 420 ? "不错" : "偏短"
    },
    {
      title: "醒后精神趋势",
      desc: qualityAvg ? `近 ${reviews.length} 次平均睡眠质量 ${qualityAvg}/5。` : "还没有醒后复盘，早上记录一次就能看到趋势。",
      tag: qualityAvg ? `${qualityAvg}/5` : "待记录"
    },
    {
      title: "页面活跃监督",
      desc: activeAgo <= 2 ? "本页面刚刚还有操作。如果已经到点，建议马上离开屏幕。" : `本页面约 ${activeAgo} 分钟没有操作。`,
      tag: status.name === "overdue" ? "盯紧" : "正常"
    },
    {
      title: "监督边界",
      desc: "浏览器不能判断你是否真的睡着，也不能监控全电脑；这里依据打卡、时间和本页面活跃状态做轻量监督。",
      tag: "说明"
    }
  ];
  return items;
}

function plannedSleepMinutes() {
  const bed = timeToMinutes(state.settings.bedTime);
  const wake = timeToMinutes(state.settings.wakeTime);
  const diff = wake - bed;
  return diff > 0 ? diff : diff + 1440;
}

function renderRecords() {
  const list = $("#records-list");
  const records = [...state.checkins].sort((a, b) => b.sleepDay.localeCompare(a.sleepDay));
  if (!records.length) {
    list.innerHTML = `<div class="panel"><p>还没有打卡记录。今晚按下“我准备睡啦”，监督局就开始建档。</p></div>`;
    return;
  }

  list.innerHTML = records.map((record) => {
    const statusText = record.status === "late" ? "熬夜补救" : record.status === "grace" ? "宽限按时" : record.status === "rest" ? "今晚请假" : "准时早睡";
    const review = state.reviews.find((item) => item.sleepDay === record.sleepDay);
    const reviewText = review
      ? `醒后复盘：睡眠质量 ${review.quality}/5，精神状态 ${escapeHtml(review.energy)}。${review.note ? escapeHtml(review.note) : ""}`
      : "还没有醒后复盘。";
    return `
      <article class="record-item">
        <div>
          <span class="record-date">${record.sleepDay}</span>
          <h3>${statusText}</h3>
          <p>${record.note ? escapeHtml(record.note) : "没有留言，但睡觉这件事已经完成。"}</p>
          <p>${reviewText}</p>
        </div>
        <div class="reward-cost">+${record.points}</div>
      </article>
    `;
  }).join("");
}

function saveMorningReview(event) {
  event.preventDefault();
  const cycle = getCycle(new Date());
  const reviewDay = getRecord(cycle.sleepDay) ? cycle.sleepDay : dateKey(addDays(fromDateKey(cycle.sleepDay), -1));
  const existing = state.reviews.find((item) => item.sleepDay === reviewDay);
  const review = existing || { sleepDay: reviewDay };
  review.quality = Number($("#sleep-quality").value || 3);
  review.energy = $("#energy-level").value;
  review.note = $("#review-note").value.trim();
  review.createdAt = new Date().toISOString();
  if (!existing) state.reviews.push(review);
  $("#review-note").value = "";
  saveState();
  renderRecords();
  renderAid();
}

function savePlanner() {
  state.settings.weeklyTarget = Number($("#weekly-target").value || state.settings.weeklyTarget || 5);
  state.settings.wakeIntention = $("#wake-intention").value.trim() || "明早清醒一点，脾气好一点。";
  saveState();
  $("#planner-result").textContent = "计划已保存，今晚就按这个节奏来。";
  renderPlanner();
  renderSettings();
}

function addPromise(event) {
  event.preventDefault();
  const title = $("#promise-title").value.trim();
  if (!title) return;
  state.promises.push({
    id: `promise-${Date.now()}`,
    title
  });
  $("#promise-title").value = "";
  saveState();
  renderPlanner();
}

function togglePromise(id, checked) {
  const day = getPromiseDay();
  state.promiseChecks[day] = state.promiseChecks[day] || {};
  state.promiseChecks[day][id] = checked;
  saveState();
  renderPlanner();
}

function deletePromise(id) {
  state.promises = state.promises.filter((item) => item.id !== id);
  Object.keys(state.promiseChecks).forEach((day) => {
    if (state.promiseChecks[day]) delete state.promiseChecks[day][id];
  });
  saveState();
  renderPlanner();
}

function renderRewards() {
  const list = $("#reward-list");
  const filter = $("#reward-filter") ? $("#reward-filter").value : "all";
  const rewards = filter === "all" ? state.rewards : state.rewards.filter((reward) => reward.category === filter);
  if (!rewards.length) {
    list.innerHTML = `<div class="panel"><p>还没有奖励。可以添加一些真正会让你想早睡的小奖励。</p></div>`;
    return;
  }

  list.innerHTML = rewards.map((reward) => `
    <article class="reward-item">
      <div>
        <h3>${escapeHtml(reward.title)}</h3>
        <p>${escapeHtml(reward.category || "自由")} · 已兑换 ${reward.redeemed || 0} 次</p>
      </div>
      <div class="actions">
        <span class="reward-cost">${reward.cost} 分</span>
        <button class="ghost" data-redeem="${reward.id}">兑换</button>
        <button class="ghost" data-delete-reward="${reward.id}">删除</button>
      </div>
    </article>
  `).join("");
}

function fillDefaultRewards() {
  state.rewards = normalizeRewards(state.rewards);
  saveState();
  $("#reward-result").textContent = "默认奖励已补齐，已有兑换次数不会丢。";
  renderRewards();
}

function pickRandomAffordableReward() {
  const affordable = state.rewards.filter((reward) => Number(reward.cost) <= state.totalPoints);
  if (!affordable.length) {
    $("#reward-result").textContent = "当前积分还不够兑换奖励，今晚早睡再攒一点。";
    return;
  }
  const reward = randomFrom(affordable);
  $("#reward-result").textContent = `今晚可以兑换：${reward.title}（${reward.cost} 分，${reward.category || "自由"}）`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function checkIn() {
  const now = new Date();
  const cycle = getCycle(now);
  if (getRecord(cycle.sleepDay)) {
    $("#checkin-result").textContent = "今晚已经打过卡了，别反复打开自己。";
    return;
  }

  let status = "late";
  let points = 3;
  if (now <= cycle.target) {
    status = "ontime";
    points = 12;
  } else if (now <= cycle.grace) {
    status = "grace";
    points = 10;
  }

  const yesterday = getRecord(dateKey(addDays(fromDateKey(cycle.sleepDay), -1)));
  if (status !== "late" && yesterday && yesterday.status !== "late") points += 3;

  const record = {
    sleepDay: cycle.sleepDay,
    status,
    points,
    note: $("#checkin-note").value.trim(),
    createdAt: now.toISOString()
  };

  state.checkins.push(record);
  state.totalPoints += points;
  saveState();
  $("#checkin-result").textContent = `${promptForStatus("success")} 本次 +${points} 分。`;
  $("#checkin-note").value = "";
  render();
}

function markRestDay() {
  const cycle = getCycle(new Date());
  if (getRecord(cycle.sleepDay)) {
    $("#checkin-result").textContent = "今晚已经有记录了，不需要重复请假。";
    return;
  }
  state.checkins.push({
    sleepDay: cycle.sleepDay,
    status: "rest",
    points: 0,
    note: "今晚请假：特殊情况休息，不计入积分。",
    createdAt: new Date().toISOString()
  });
  saveState();
  $("#checkin-result").textContent = "已记录今晚请假。请假不加分，也不会被当成熬夜补救。";
  render();
}

async function requestNotifications() {
  if (!("Notification" in window)) {
    $("#settings-result").textContent = "当前浏览器不支持桌面通知。";
    state.settings.notifications = false;
    saveState();
    return false;
  }
  if (Notification.permission === "granted") return true;
  const permission = await Notification.requestPermission();
  return permission === "granted";
}

function notify(body, tag = "sleep-bureau") {
  if (!state.settings.notifications || !("Notification" in window) || Notification.permission !== "granted") return;
  new Notification("睡觉监督局", { body, tag, silent: false });
}

function runReminderEngine() {
  const now = new Date();
  const status = getStatus(now);
  const day = status.cycle.sleepDay;
  if (status.name === "checked" || !state.settings.notifications) return;

  if (status.name === "pre" && !state.notificationLog[`${day}:pre`]) {
    notify(promptForStatus("pre"), `${day}:pre`);
    state.notificationLog[`${day}:pre`] = Date.now();
    if (state.settings.autoWinddown) document.body.classList.add("winddown");
    saveState();
  }

  const screenLimitAt = addMinutes(status.cycle.target, -Number(state.settings.screenLimitMinutes || 20));
  if (now >= screenLimitAt && now < status.cycle.target && !state.notificationLog[`${day}:screen-limit`]) {
    notify(`距离睡觉不到 ${state.settings.screenLimitMinutes} 分钟，建议把手机放远，屏幕开始降速。`, `${day}:screen-limit`);
    state.notificationLog[`${day}:screen-limit`] = Date.now();
    saveState();
  }

  if (status.name === "grace" && !state.notificationLog[`${day}:bedtime`]) {
    notify(promptForStatus("bedtime"), `${day}:bedtime`);
    state.notificationLog[`${day}:bedtime`] = Date.now();
    saveState();
  }

  if (status.name === "overdue") {
    const repeatMinutes = Number(state.settings.repeatMinutes || 15);
    const repeatMs = (state.settings.strictMode ? Math.max(5, Math.floor(repeatMinutes / 2)) : repeatMinutes) * 60000;
    if (!state.lastOverdueNoticeAt || Date.now() - state.lastOverdueNoticeAt >= repeatMs) {
      notify(promptForStatus("overdue"), `${day}:overdue`);
      state.lastOverdueNoticeAt = Date.now();
      saveState();
    }
  }
}

function showNudge() {
  $("#nudge-text").textContent = makeNudgeText();
  if (!$("#nudge-dialog").open) $("#nudge-dialog").showModal();
}

function makeNudgeText() {
  const text = randomFrom(promptBank.nudge)
    .replaceAll("你的早睡搭子", state.settings.partnerName || "你的早睡搭子")
    .replaceAll("TA", state.settings.partnerName || "TA");
  return text;
}

function startWinddown() {
  document.body.classList.add("winddown");
  activeView = "aid";
  setActiveView("aid");
  $("#checkin-result").textContent = "晚安模式已开启：灯暗一点，动作慢一点，今天就到这里。";
}

function toggleBreathing() {
  breathingOn = !breathingOn;
  $("#toggle-breathing").textContent = breathingOn ? "暂停" : "开始";
  if (!breathingOn) {
    clearInterval(breathingTimer);
    return;
  }
  let exhale = false;
  const tick = () => {
    exhale = !exhale;
    $("#breath-circle").classList.toggle("exhale", exhale);
    $("#breath-text").textContent = exhale ? "呼气" : "吸气";
    $("#breath-guide").textContent = exhale ? "慢慢呼气 6 秒，把肩膀放下来。" : "轻轻吸气 4 秒，不用太用力。";
  };
  tick();
  breathingTimer = setInterval(tick, 6000);
}

function resetBreathing() {
  breathingOn = false;
  clearInterval(breathingTimer);
  $("#toggle-breathing").textContent = "开始";
  $("#breath-circle").classList.remove("exhale");
  $("#breath-text").textContent = "吸气";
  $("#breath-guide").textContent = "跟着圆圈慢慢来，4 秒吸气，6 秒呼气。";
}

function setActiveView(view) {
  activeView = view;
  $$(".view").forEach((item) => item.classList.toggle("active", item.id === view));
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
}

function exportData() {
  const payload = {
    app: "睡觉监督局",
    version: 1,
    exportedAt: new Date().toISOString(),
    data: state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `sleep-bureau-backup-${dateKey(new Date())}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importData() {
  const file = $("#import-file").files[0];
  if (!file) {
    $("#import-result").textContent = "请先选择备份文件。";
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const incoming = parsed.data || parsed;
      state = mergeState(getDefaultState(), incoming);
      saveState();
      $("#import-result").textContent = "导入成功，监督局资料已恢复。";
      render();
    } catch {
      $("#import-result").textContent = "导入失败：文件格式不正确。";
    }
  };
  reader.readAsText(file);
}

function saveSettings(event) {
  event.preventDefault();
  state.settings = {
    ...state.settings,
    ownerName: $("#owner-name").value.trim() || "我",
    partnerName: $("#partner-name").value.trim() || "TA",
    coupleName: $("#couple-name").value.trim() || "早睡搭子",
    bedTime: $("#bed-time").value || "23:30",
    wakeTime: $("#wake-time").value || "07:30",
    graceMinutes: Number($("#grace-minutes").value || 20),
    leadMinutes: Number($("#lead-minutes").value || 30),
    repeatMinutes: Number($("#repeat-minutes").value || 15),
    teaseLevel: $("#tease-level").value,
    notifications: $("#notify-enabled").checked,
    autoWinddown: $("#winddown-enabled").checked,
    strictMode: $("#strict-mode").checked,
    screenLimitMinutes: Number($("#screen-limit-minutes").value || 20),
    weeklyTarget: Number($("#settings-weekly-target").value || state.settings.weeklyTarget || 5),
    wakeIntention: state.settings.wakeIntention
  };
  saveState();
  $("#settings-result").textContent = "设置已保存，今晚按新规则执勤。";
  render();
}

function addReward(event) {
  event.preventDefault();
  const title = $("#reward-title").value.trim();
  const cost = Number($("#reward-cost").value || 0);
  if (!title || cost <= 0) return;
  state.rewards.push({
    id: `reward-${Date.now()}`,
    title,
    category: $("#reward-category").value,
    cost,
    redeemed: 0
  });
  $("#reward-title").value = "";
  $("#reward-cost").value = 30;
  saveState();
  renderRewards();
}

function redeemReward(id) {
  const reward = state.rewards.find((item) => item.id === id);
  if (!reward) return;
  if (state.totalPoints < reward.cost) {
    alert("积分还不够，今晚早点睡就能继续攒。");
    return;
  }
  state.totalPoints -= reward.cost;
  reward.redeemed = (reward.redeemed || 0) + 1;
  saveState();
  render();
}

function deleteReward(id) {
  state.rewards = state.rewards.filter((item) => item.id !== id);
  saveState();
  renderRewards();
}

function clearRecords() {
  if (!confirm("确定清空所有打卡记录吗？积分会保留，记录会消失。")) return;
  state.checkins = [];
  saveState();
  render();
}

function bindEvents() {
  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => setActiveView(button.dataset.view));
  });

  $("#settings-form").addEventListener("submit", saveSettings);
  $("#sleep-checkin").addEventListener("click", checkIn);
  $("#rest-day").addEventListener("click", markRestDay);
  $("#send-nudge").addEventListener("click", showNudge);
  $("#close-nudge").addEventListener("click", () => $("#nudge-dialog").close());
  $("#new-nudge").addEventListener("click", () => {
    $("#nudge-text").textContent = makeNudgeText();
  });
  $("#copy-nudge").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText($("#nudge-text").textContent);
      $("#copy-nudge").textContent = "已复制";
      setTimeout(() => ($("#copy-nudge").textContent = "复制"), 1200);
    } catch {
      alert("当前环境不允许自动复制，可以手动选中文字复制。");
    }
  });

  $("#refresh-prompt").addEventListener("click", () => {
    const status = getStatus().name;
    $("#prompt-card").textContent = promptForStatus(status === "idle" ? "pre" : status);
  });

  $("#test-notification").addEventListener("click", async () => {
    const ok = await requestNotifications();
    if (ok) {
      state.settings.notifications = true;
      $("#notify-enabled").checked = true;
      saveState();
      notify("测试成功。今晚到点后，监督局会准时提醒你。", "test");
    } else {
      alert("通知权限没有开启，浏览器无法弹出桌面提醒。");
    }
  });

  $("#notify-enabled").addEventListener("change", async (event) => {
    if (event.target.checked) {
      const ok = await requestNotifications();
      event.target.checked = ok;
      state.settings.notifications = ok;
      saveState();
    }
  });

  $("#start-winddown").addEventListener("click", startWinddown);
  $("#toggle-breathing").addEventListener("click", toggleBreathing);
  $("#reset-breathing").addEventListener("click", resetBreathing);
  $("#export-data").addEventListener("click", exportData);
  $("#import-data").addEventListener("click", importData);
  $("#reward-form").addEventListener("submit", addReward);
  $("#reward-filter").addEventListener("change", renderRewards);
  $("#random-reward").addEventListener("click", pickRandomAffordableReward);
  $("#fill-rewards").addEventListener("click", fillDefaultRewards);
  $("#review-form").addEventListener("submit", saveMorningReview);
  $("#save-planner").addEventListener("click", savePlanner);
  $("#promise-form").addEventListener("submit", addPromise);
  $("#clear-records").addEventListener("click", clearRecords);

  $("#winddown-list").addEventListener("change", (event) => {
    const id = event.target.dataset.checkId;
    if (!id) return;
    const day = getCycle().sleepDay;
    state.winddown[day] = state.winddown[day] || {};
    state.winddown[day][id] = event.target.checked;
    saveState();
  });

  $("#reward-list").addEventListener("click", (event) => {
    const redeemId = event.target.dataset.redeem;
    const deleteId = event.target.dataset.deleteReward;
    if (redeemId) redeemReward(redeemId);
    if (deleteId) deleteReward(deleteId);
  });

  $("#promise-list").addEventListener("change", (event) => {
    const id = event.target.dataset.promiseId;
    if (!id) return;
    togglePromise(id, event.target.checked);
  });

  $("#promise-list").addEventListener("click", (event) => {
    const id = event.target.dataset.deletePromise;
    if (!id) return;
    deletePromise(id);
  });

  ["mousemove", "keydown", "click", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, () => {
      state.lastActiveAt = Date.now();
    }, { passive: true });
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      renderToday();
      if (activeView === "trends") renderTrends();
      if (activeView === "planner") renderPlanner();
      if (activeView === "aid") renderAid();
    }
  });
}

function boot() {
  bindEvents();
  render();
  $("#prompt-card").textContent = promptForStatus("pre");
  setInterval(() => {
    renderToday();
  }, 1000);
  setInterval(() => {
    if (activeView === "aid") renderAid();
    if (activeView === "trends") renderTrends();
    if (activeView === "planner") renderPlanner();
    runReminderEngine();
    saveState();
  }, 30000);
  runReminderEngine();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

boot();
