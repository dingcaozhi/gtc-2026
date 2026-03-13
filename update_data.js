// 新增的时间段数据
const newTimeSlots = {
    "1:20 pm PDT": [{"title": "Building AI Factories for High-Assurance, Mission-Critical Environments (Presented by Astris AI) [EX82257]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82257/", "time": "Tues. Mar. 17 | 1:20 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Greg Forrest"]}],
    "1:40 pm PDT": [{"title": "Eliminate the Data Bottleneck: Accelerate Enterprise AI at Scale (Presented by Elastic) [EX82307]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82307/", "time": "Tues. Mar. 17 | 1:40 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["James Williams"]}],
    "2:20 pm PDT": [{"title": "A Modular Blueprint for Next-Generation AI Servers: Inside the MGX Architecture (Presented by MSI) [EX82040]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82040/", "time": "Tues. Mar. 17 | 2:20 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Philip Maher"]}],
    "2:40 pm PDT": [{"title": "Tailor-Made Inference: Building SLA-Focused AI Stacks for Enterprise Demands (Presented by Simplismart) [EX82207]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82207/", "time": "Tues. Mar. 17 | 2:40 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Amritanshu Jain"]}],
    "3:20 pm PDT": [
        {"title": "Build Self-Learning Agents on Cloudflare (Presented by Cloudflare) [EX82291]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82291/", "time": "Tues. Mar. 17 | 3:20 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Maximo Guk"]},
        {"title": "Unlocking AI Performance with CXL-Powered KV Cache (Presented by Penguin Solutions) [EX82068]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82068/", "time": "Tues. Mar. 17 | 3:20 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Phil Pokorny"]}
    ],
    "3:40 pm PDT": [
        {"title": "Capital Group, Global Asset Manager, Transforms Investor onboarding with NVIDIA and Infosys AI Next platform (Presented by Infosys) [EX82327]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82327/", "time": "Tues. Mar. 17 | 3:40 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Badri Devalla", "Yuriy Suzdaltsev"]},
        {"title": "The Data Storage Platform That Powers AI Factories (Presented by Everpure) [EX82309]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82309/", "time": "Tues. Mar. 17 | 3:40 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Erin Stevens"]}
    ],
    "4:20 pm PDT": [
        {"title": "Prioritize Accelerated Compute: Maximize Impact in a Supply-Constrained World (Presented by PwC) [EX82433]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82433/", "time": "Tues. Mar. 17 | 4:20 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Dallas Dolen", "Ryan Hawk"]},
        {"title": "Red Hat & NVIDIA: Driving Mainstream Enterprise AI Solutions to Unlock Wide-Scale Adoption of AI (Presented by Red Hat) [EX82275]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82275/", "time": "Tues. Mar. 17 | 4:20 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Scott Herold"]}
    ],
    "4:40 pm PDT": [
        {"title": "From Foundation Models to SLMs: Powering Vertical AI Factories on NVIDIA (Presented by Tech Mahindra, Ltd.) [EX82194]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82194/", "time": "Tues. Mar. 17 | 4:40 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Nikhil Malhotra"]},
        {"title": "The AI Cloud Behind the Breakthroughs: How Core42 Accelerates MBZUAI Research (Presented by Core42) [EX82401]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82401/", "time": "Tues. Mar. 17 | 4:40 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Raghu Chakravarthi"]}
    ],
    "5:00 pm PDT": [
        {"title": "Transform Clinical and Commercial Workflows with AI Agents That Deliver Immediate Impact [EX82371]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82371/", "time": "Tues. Mar. 17 | 5:00 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Raja Shankar", "Sandeep Burugupalli"]},
        {"title": "Your Agent is Expensive and Wrong (Let's Fix Both!) (Presented by Databricks) [EX82242]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82242/", "time": "Tues. Mar. 17 | 5:00 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Nicolas Pelaez"]}
    ],
    "5:20 pm PDT": [
        {"title": "Building Dawn: An AI Agent for Mental Health With Clinically-Grounded Safety [EX82382]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82382/", "time": "Tues. Mar. 17 | 5:20 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Ricardo Rei"]},
        {"title": "Network Automation Lessons Learned From Launching 20+ Multi-Tenant Clouds and AI Factories (Presented by Netris) [EX82094]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82094/", "time": "Tues. Mar. 17 | 5:20 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Alex Saroyan"]}
    ],
    "5:40 pm PDT": [
        {"title": "Opentrons: Close the Gap Between Intent and Execution in the Lab [EX82361]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82361/", "time": "Tues. Mar. 17 | 5:40 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["James Atwood"]},
        {"title": "Why AI Requires Vertically Integrated, AI-Native Cloud Infrastructure (Presented by Lightning AI) [EX81904]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex81904/", "time": "Tues. Mar. 17 | 5:40 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["William Falcon"]}
    ],
    "6:00 pm PDT": [
        {"title": "NVIDIA Inception Presents: Startup Pitches [EX82363]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82363/", "time": "Tues. Mar. 17 | 6:00 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Chris Brown", "Elias Stahl"]},
        {"title": "When Surgical Intelligence Becomes Embodied: The Agentic Operating Room and the Partners Behind It [EX82386]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82386/", "time": "Tues. Mar. 17 | 6:00 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Courtney Knoll", "Shaun Braun"]}
    ],
    "6:20 pm PDT": [{"title": "The Next Era of Surgery: AI-Driven Innovation in the Operating Room [EX82436]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-ex82436/", "time": "Tues. Mar. 17 | 6:20 pm PDT", "type": "Theater Talk", "format": "In-Person", "speakers": ["Stephanie Dupont"]}],
    "7:00 pm PDT": [
        {"title": "从视觉还原到物理交互： 物理可驱动3D 资产生成技术 Beyond Visuals: A Physics-Informed Generative Method for Articulated 3D Assets [S81935]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-s81935/", "time": "Tues. Mar. 17 | 7:00 pm PDT", "type": "Talk", "format": "Virtual", "speakers": ["Dongping Li"]},
        {"title": "利用 NVIDIA Dynamo Router 的 LongCat-Flash 高效推理案例研究：面向智能体时代的模型-系统协同设计 [S81943]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-s81943/", "time": "Tues. Mar. 17 | 7:00 pm PDT", "type": "Talk", "format": "Virtual", "speakers": ["yulei qian"]},
        {"title": "以 WAM 为核心构建全域 AI 2.0，AI + 车技术实践分享 [S82358]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-s82358/", "time": "Tues. Mar. 17 | 7:00 pm PDT", "type": "Talk", "format": "Virtual", "speakers": ["传海 李"]}
    ],
    "8:00 pm PDT": [
        {"title": "基于 Megatron-Core 的动态自适应并行训练方案 [S82347]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-s82347/", "time": "Tues. Mar. 17 | 8:00 pm PDT", "type": "Talk", "format": "Virtual", "speakers": ["国昊 吴", "Kunlun Li"]},
        {"title": "基于 NVIDIA Jetson Thor 的机器人视觉解决方案 [S81962]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-s81962/", "time": "Tues. Mar. 17 | 8:00 pm PDT", "type": "Talk", "format": "Virtual", "speakers": ["Bin Li"]},
        {"title": "智能融合：下一代端到端架构演进 [S81990]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-s81990/", "time": "Tues. Mar. 17 | 8:00 pm PDT", "type": "Talk", "format": "Virtual", "speakers": ["沐 杨"]}
    ],
    "10:30 pm PDT": [{"title": "端到端用于自动驾驶的强化认知（Reinforced Cognitive）框架 [S82202]", "url": "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-s82202/", "time": "Tues. Mar. 17 | 10:30 pm PDT", "type": "Talk", "format": "Virtual", "speakers": ["光 陈"]}]
};

console.log("New data prepared:", Object.keys(newTimeSlots).length, "time slots");
console.log("Total new sessions:", Object.values(newTimeSlots).reduce((a, b) => a + b.length, 0));
