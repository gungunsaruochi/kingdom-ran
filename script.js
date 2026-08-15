const characters = [
  
  {
    name: "楊端和",
    country: "山の民",
    skill: "山界ノ統一☆6",
    description: `
自身の趙国、魏国武将に対する攻撃力が20%上昇する。
味方山の民武将の体力上限が100%上昇する。
生存している味方山の民武将の士気が20%回復する。
侵攻時には、味方山の民武将の「裏切り」「恐怖」状態になる確率が60%低下し、攻撃力が30%上昇する。
    `,
    lastRevival: "2026-06-10",
    attackTeam: [],
    defenseTeam: [],
    image: "S__70819903_0.jpg"
  },

  {
    name: "雷土",
    country: "秦",
    skill: "野盗の腹心☆6",
    description: `
自身の体力上限が100%上昇する。
自身の攻撃力と防御力が30%上昇する。
侵攻時には、自身と味方桓騎軍武将の命中率が25%上昇する。
自身に100%のガード効果(2回)を付与する。
    `,
    lastRevival: "2026-07-19",
    attackTeam: [],
    defenseTeam: [],
    image: "S__70819906.jpg"
  },

  {
    name: "太后",
    country: "秦",
    skill: "旅の執着☆6",
    description: `
味方「嬴政」、「嫪毐」の体力上限が100%上昇する。
味方「嬴政」、「嫪毐」の騎兵武将に対する攻撃力と防御力が30%上昇する。
生存している味方「嬴政」、「嫪毐」の体力を20%回復する。
敵盾兵武将のクリティカルダメージを30%低下させる。
    `,
    lastRevival: "2026-05-24",
    attackTeam: [],
    defenseTeam: [],
    image: "taikou.jpg"
  },

  {
    name: "騰",
    country: "秦",
    skill: "生来強者☆6",
    description: `
自身の体力上限が100%上昇する。
味方秦国武将の体力回復量が50%上昇する。
敵魏国武将が生存している場合、敵全武将の攻撃力を20%低下させる。
敵楚国武将が生存している場合、敵全武将のクリティカルダメージを20%低下させる。
敵韓国武将が生存している場合、敵全武将の体力回復量を20%低下させる。
    `,
    lastRevival: "2026-05-24",
    attackTeam: [],
    defenseTeam: [],
    image: "to-.jpg"
  },

  {
    name: "昭王",
    country: "秦",
    skill: "忠義☆6",
    description: `
自身の体力上限が100%上昇する。
自身の攻撃力と防御力が30%上昇する。
自身と味方秦の六大将軍武将の弓兵武将に対する攻撃力が20%上昇する。
自身と生存している味方秦の六大将軍武将の士気を20%回復する。
敵弓兵武将が生存している場合、自身と味方秦の六大将軍武将の「錯乱」「裏切り」状態になる確率が100%低下する。
    `,
    lastRevival: "2026-06-10",
    attackTeam: ["昭王",
                "王騎",],
    defenseTeam: ["昭王",
                 "王騎",],
    image: "sho-o-.jpg",
    formationImage:"sho-o-jp.jpg"
  },

  {
    name: "王騎",
    country: "秦",
    skill: "誓い☆6",
    description: `
自身と味方「摎」の体力上限が100%上昇する。
自身と味方「摎」の攻撃力と防御力が30%上昇する。
自身と味方「摎」が「見切り(40%)」状態になる。
味方騎兵武将の「毒」状態になる確率が60%低下する。
敵弓兵武将のクリティカルダメージを30%低下させる。
    `,
    lastRevival: "2026-05-24",
    attackTeam: ["昭王",
                 "王騎",],
    defenseTeam: ["昭王",
                  "王騎",],
    image: "ouki.jpg",
    formationImage:"o-ki.jp.jpg"
  },
   
  {
    name: "白起",
    country: "秦",
    skill: "不敗☆6",
    description: `
自身の騎兵武将に対する攻撃力が20%上昇する。
味方「昭王」、六大将軍武将の防御力と命中率が20%上昇する。
駐屯時には、敵騎兵武将の攻撃力とクリティカルダメージを20%低下させ、味方兵器の攻撃力と防御力が50%上昇し、城門の体力残存時、城門の体力を50000回復する。
    `,
    lastRevival: "2026-05-24",
    attackTeam: [],
    defenseTeam: [],
    image: "hakuki.jpg"
  },
  
  {
    name: "王翦",
    country: "秦",
    skill: "絶対防御☆6",
    description: `
自身の体力が100%上昇する。
自身の攻撃力と防御力が30%上昇する。
味方秦国武将の騎兵武将に対する防御力が20%上昇し、防御力貫通耐性が40%上昇する。
駐屯時には、敵騎兵武将の攻撃力を20%低下させ、クリティカルダメージを40%低下させる。
    `,
    lastRevival: "2026-07-03",
    attackTeam: [],
    defenseTeam: [],
    image: "o-sen.jpg"
  },
  
 {
    name: "廉頗",
    country: "魏",
    skill: "熱き抱擁☆6",
    description: `
味方廉頗軍武将の体力上限が100%上昇する。
味方廉頗軍武将の攻撃力と防御力が30%上昇する。
自身以外の味方廉頗軍武将が生存している場合、味方全武将に60%のガード効果(2回)を付与する。
    `,
    lastRevival: "2026-07-19",
    attackTeam: [],
    defenseTeam: [],
    image: "S__70819895_0.jpg"
  },

  {
    name: "姜燕",
    country: "魏",
    skill: "正鵠を射る☆6",
    description: `
自身の盾兵武将に対する攻撃力と防御力が40%上昇する。
自身と味方「廉頗」のクリティカルダメージが20%上昇する。
味方「廉頗」が生存している場合、味方武将の体力を20%回復する。
    `,
    lastRevival: "2026-07-19",
    attackTeam: [],
    defenseTeam: [],
    image: "kyo-en.jpg"
  },
  {
    name: "介子坊",
    country: "魏",
    skill: "大将軍への忠心☆6",
    description: `
自身以外の味方廉頗軍武将1名につき、味方廉頗軍武将の攻撃力と防御力が10%上昇する。
敵全武将の廉頗軍武将に対する防御力を30%低下させる。
味方廉頗軍武将の「裏切り」状態になる確率が60%低下する。
    `,
    lastRevival: "2026-04-27",
    attackTeam: [],
    defenseTeam: [],
    image: "S__70819898_0.jpg"
  },

  {
    name: "輪虎",
    country: "魏",
    skill: "天の導き☆6",
    description: `
味方廉頗軍武将が「見切り(20%)」状態になる。
自身と味方「廉頗」のクリティカル発生率が20%上昇する。
味方「廉頗」が生存している場合、味方全武将の士気消費を30%軽減する。
    `,
    lastRevival: "2026-04-27",
    attackTeam: [],
    defenseTeam: [],
    image: "S__70819896_0.jpg"
  },
 
  {
    name: "万極",
    country: "趙",
    skill: "怨讐☆6",
    description: `
自身の体力上限が100%上昇する。
自身の攻撃力と防御力が30%上昇する。
敵に秦国武将がいる場合、味方趙国武将の「恐怖」状態になる確率が100%低下し、敵全武将の防御力と回避率を30%低下させ、自身の攻撃力が40%上昇する。
    `,
    lastRevival: "2026-07-19",
    attackTeam: [],
    defenseTeam: [],
    image: "S__70819890.jpg"
  },

  {
    name: "慶舎",
    country: "趙",
    skill: "狩人の嗅覚☆6",
    description: `
自身の体力上限が100%上昇する。
味方弓兵武将のクリティカル発生率が25%上昇する。
味方弓兵武将の「錯乱」状態の付与確率が30%上昇する。
敵盾兵武将が生存している場合、味方弓兵武将に60%のガード効果(3回)を付与する。
    `,
    lastRevival: "2026-07-19",
    attackTeam: [],
    defenseTeam: [],
    image: "keisha.jpg"
  },

  {
    name: "傅抵",
    country: "趙",
    skill: "閃光☆6",
    description: `
自身の体力上限が100%上昇する。
自身の攻撃力と防御力が30%上昇する。
敵歩兵武将と騎兵武将の回避率を25%低下させる。
自身が「見切り(25%)」状態になる。
    `,
    lastRevival: "2026-07-19",
    attackTeam: [],
    defenseTeam: [],
    image: "hutei.jpg"
  },

  {
    name: "龐煖",
    country: "趙",
    skill: "求道の果て☆6",
    description: `
自身の攻撃力、クリティカル発生率、防御力貫通が30%上昇する。
自身の命中率と回避率が20%上昇する。
    `,
    lastRevival: "2026-07-19",
    attackTeam: [],
    defenseTeam: [],
    image: "S__70819894_0.jpg"
  },
  {
    name: "晋成常",
    country: "趙",
    skill: "殿の意地☆6",
    description: `
味方趙国武将の防御力が20%上昇する。
味方趙国武将の秦国武将に対する防御力が30%上昇する。
敵秦国武将か山の民武将が生存している場合、自身の体力を20%回復する。
    `,
    lastRevival: "2026-07-19",
    attackTeam: [],
    defenseTeam: [],
    image: "S__70819891.jpg"
  },
  {
    name: "媧燐",
    country: "楚",
    skill: "天才の策略☆6",
    description: `
自身の体力上限が100%上昇する。
自身の攻撃力と防御力が30%上昇する。
自身の回避率が60%上昇する。
味方楚国武将の防御力貫通が20%上昇する。
敵全武将のクリティカル発生率を40%低下させる。
    `,
    lastRevival: "2026-07-03",
    attackTeam: [],
    defenseTeam: [],
    image: "karin.jpg"
  },

  {
    name: "汗明",
    country: "楚",
    skill: "至強の知☆6",
    description: `
味方汗明軍武将の体力上限が100%上昇する。
味方汗明軍武将の攻撃力と防御力が30%上昇する。
味方汗明軍武将の攻撃力低下耐性が50%上昇する。
自身以外の味方楚国武将が生存している場合、敵全武将の防御力を30%低下させる。
    `,
    lastRevival: "2026-07-03",
    attackTeam: [],
    defenseTeam: [],
    image: "kanme-.jpg"
  },

  {
    name: "臨武君",
    country: "楚",
    skill: "先陣割砕☆6",
    description: `
自身の体力上限が100%上昇する。
自身の攻撃力が40%上昇する。
自身のクリティカル発生率とクリティカルダメージが30%上昇する。
味方楚国武将の攻撃力低下耐性が60%上昇する。
    `,
    lastRevival: "2026-06-10",
    attackTeam: [],
    defenseTeam: [],
    image: "rinbu.jpg"
  },

  {
    name: "春申君",
    country: "楚",
    skill: "超大国の執政者☆6",
    description: `
味方楚国武将の体力上限が200%上昇する。
味方楚国武将の最大士気が100%上昇する。
敵武将が生存している場合、生存している味方楚国武将の体力を30%回復する。
敵武将が生存している場合、生存している味方楚国武将の士気を20%回復する。
    `,
    lastRevival: "2026-06-10",
    attackTeam: [],
    defenseTeam: [],
    image: "shunsinkun.jpg"
  },
  
  {
    name: "李園",
    country: "楚",
    skill: "強国構築☆6",
    description: `
自身の体力上限が100%上昇する。
自身の攻撃力と防御力が30%上昇する。
敵秦国武将の回避率を40%低下させる。
侵攻時には、敵騎兵武将の攻撃力を20%低下させる。
    `,
    lastRevival: "",
    attackTeam: [],
    defenseTeam: [],
    image: "rien.jpg"
  },
  
  {
    name: "楽毅",
    country: "燕",
    skill: "天下を動かす傑物☆6",
    description: `
味方秦国、趙国、魏国、楚国、韓国、燕国武将の体力上限が100%上昇する。
味方秦国、趙国、魏国、楚国、韓国、燕国武将の防御力が30%上昇する。
    `,
    lastRevival: "2026-05-08",
    attackTeam: [],
    defenseTeam: [],
    image: "S__70819902_0.jpg",
    formationImage: "gakuki.jp.jpg"
  },

  {
    name: "成恢",
    country: "韓",
    skill: "毒の支配☆6",
    description: `
自身の防御力貫通と回避率が30%上昇する。
自身の「毒」状態の付与確率が60%上昇する。
敵全武将の「毒」によって受けるダメージを100%増加させる。
侵攻時には、敵盾兵武将の攻撃力を20%低下させる。
    `,
    lastRevival: "2026-05-08",
    attackTeam: [],
    defenseTeam: [],
    image: "seikai.jpg"
  },
  
{
    name: "呉慶",
    country: "魏",
    skill: "侵略への激情☆6",
    description: `
自身の騎兵武将に対する攻撃力と防御力が30%上昇する。
味方盾兵武将の命中率が30%上昇する。
味方魏国武将の「火傷」状態になる確率が100%低下する。
駐屯時には、敵騎兵武将の攻撃力を40%低下させる。
    `,
    lastRevival: "2026-04-27",
    attackTeam: [],
    defenseTeam: ["乱美迫",
                 "霊凰",
                 "太呂慈",
                "呉慶",],
    image: "S__70819899_0.jpg",
    formationImage: "oyaji.jpg"
  },
  
  {
    name: "乱美迫",
    country: "魏",
    skill: "暴威の鉞☆6",
    description: `
自身の体力上限が100%上昇する。
自身の騎兵武将に対する攻撃力と防御力が30%上昇する。
自身と味方魏火龍武将の体力回復量が50%上昇する。
味方魏火龍武将1名につき、敵騎兵武将の攻撃力を10%低下させる。
駐屯時には、敵騎兵武将が生存している場合、自身の体力を20%回復する。
    `,
    lastRevival: "2026-05-08",
    attackTeam: [],
    defenseTeam: ["乱美迫",
                 "霊凰",
                 "太呂慈",
                "呉慶",],
    image: "S__70819901_0.jpg",
    formationImage: "baubau.jpg"
  },

  {
    name: "霊凰",
    country: "魏",
    skill: "冷酷な軍略☆6",
    description: `
自身の防御力貫通が30%上昇する。
味方魏国武将の命中率が30%上昇する。
敵全武将の弓兵武将に対する防御力を10%低下させる。
敵全武将の魏火龍武将に対する防御力を10%低下させる。
駐屯時には、敵盾兵武将の攻撃力を20%低下させる。
生存している味方「呉鳳明」、「乱美迫」、魏火龍武将の士気を10%回復する。
    `,
    lastRevival: "2026-05-08",
    attackTeam: [],
    defenseTeam: ["乱美迫",
                 "霊凰",
                 "太呂慈",
                "呉慶",],
    image: "re-o-.jpg",
    formationImage:"sisho.jpg"
  },

 {
    name: "太呂慈",
    country: "魏",
    skill: "覚悟の激撃☆6",
    description: `
自身の体力上限が100%上昇する。
自身の防御力が30%上昇する。
侵攻時には、味方魏国武将の攻撃力が20%上昇して攻撃力低下耐性が30%上昇する。
駐屯時には、味方魏国武将の防御力貫通耐性が30%上昇し、敵騎兵武将のクリティカル発生率を40%低下させる。
    `,
    lastRevival: "2026-07-03",
    attackTeam: [],
    defenseTeam: ["乱美迫",
                 "霊凰",
                 "太呂慈",
                "呉慶",],
    image: "T-roji.jpg",
    formationImage:"te-roji.jpg"
  },
 {
    name: "呉鳳明",
    country: "魏",
    skill: "世代の転換☆6",
    description: `
自身の体力上限が100%上昇する。
味方魏国武将の体力上限が50%上昇する。
味方騎兵武将の体力上限が50%上昇する。
自身の攻撃力、防御力、命中率が15%上昇する。
味方魏国武将の攻撃力、防御力、命中率が15%上昇する。
味方騎兵武将の攻撃力、防御力、命中率が15%上昇する。
自身が「見切り(40%)」状態になる。
    `,
    lastRevival: "",
    attackTeam: [],
    defenseTeam: [],
    image: "ho-me-.jpg"
  },
  {
    name: "王賁",
    country: "秦",
    skill: "共にある☆6",
    description: `
味方玉鳳隊武将の体力上限が100%上昇する。
味方玉鳳隊武将の攻撃力と防御力が30%上昇する。
味方玉鳳隊武将に100%のガード効果(1回)を付与する。
自身のクリティカル発生率が30%上昇する。
自身以外の味方玉鳳隊武将が生存している場合、敵武将の攻撃力を40%低下させる。
    `,
    lastRevival: "2026-04-27",
    attackTeam: ["王賁",
    "松琢",
    "関常",
    "楽毅"],
    defenseTeam: ["王賁",
    "松琢",
    "関常",
    "宮康"],
    image: "S__70819900_0.jpg",
    formationImage: "ouhon.jp.jpg",
  },

 
  {
    name: "関常",
    country: "秦",
    skill: "侍従懸命☆6",
    description: `
味方玉鳳隊武将の回避率が30%上昇する。
味方玉鳳隊武将の攻撃力低下耐性が40%上昇する。
生存している味方玉鳳隊武将の体力回復量が30%上昇して体力を30%回復する。
    `,
    lastRevival: "2026-05-17",
    attackTeam: ["王賁",
    "松琢",
    "関常",
    "楽毅"],
    defenseTeam: ["王賁",
    "松琢",
    "関常",
    "宮康"],
    image: "S__70819904_0.jpg",
    formationImage: "kanjo.jp.jpg"
  },

  {
    name: "松琢",
    country: "秦",
    skill: "継ぐ忠心☆6",
    description: `
味方「王賁」、王翦軍武将の騎兵武将に対する攻撃力が20%上昇する。
味方「王賁」、王翦軍武将の命中率が40%上昇する。
味方「王賁」、王翦軍武将の「錯乱」状態になる確率が50%低下する。
    `,
    lastRevival: "2026-07-12",
    attackTeam: ["王賁",
    "松琢",
    "関常",
    "楽毅"],
    defenseTeam: ["王賁",
    "松琢",
    "関常",
    "宮康"],
    image: "S__70819905_0.jpg",
    formationImage:"shotaku.jp.jpg"
  },
  
 {
    name: "宮康",
    country: "秦",
    skill: "堅牢堅固☆6",
    description: `
味方「王賁」、王翦軍武将の防御力が40%上昇する。
味方「王賁」、王翦軍武将のクリティカルダメージが30%上昇する。
駐屯時には、敵騎兵武将の攻撃力とクリティカルダメージを30%低下させる。
    `,
    lastRevival: "2026-06-17",
    attackTeam: ["王賁",
    "松琢",
    "関常",
    "宮康"],
    defenseTeam: ["王賁",
    "松琢",
    "関常",
    "宮康"],
    image: "kyu-ko-.jpg",
    formationImage: "kyuko.jp.jpg"
  },

];

let selectedCountry = "all";

const searchInput = document.getElementById("searchInput");
const characterList = document.getElementById("characterList");
const resultCount = document.getElementById("resultCount");
const modal = document.getElementById("characterModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

function getDaysSince(dateString) {
  if (!dateString) return "";

  const today = new Date();
  const revivalDate = new Date(dateString);

  const diffTime = today - revivalDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays >= 0 ? `${diffDays}日経過` : "";
}

function createImageHTML(character, detail = false) {
  const wrapClass = detail
    ? "detail-image-wrap"
    : "character-image-wrap";

  const imageClass = detail
    ? "detail-image"
    : "character-image";

  const placeholderClass = detail
    ? "detail-image-placeholder"
    : "character-image-placeholder";

  if (character.image) {
    return `
      <div class="${wrapClass}">
        <img
          src="${character.image}"
          alt="${character.name}"
          class="${imageClass}"
        >
      </div>
    `;
  }

  return `
    <div class="${wrapClass}">
      <div class="${placeholderClass}">
        武将画像は後で追加
      </div>
    </div>
  `;
}

function renderCharacters() {
  const keyword = searchInput.value.toLowerCase().trim();

  const filteredCharacters = characters.filter(character => {
    const searchableText = `
      ${character.name}
      ${character.country}
      ${character.skill}
      ${character.description}
      ${character.attackTeam.join(" ")}
      ${character.defenseTeam.join(" ")}
    `.toLowerCase();

    const keywordMatch = searchableText.includes(keyword);

    const countryMatch =
      selectedCountry === "all" ||
      character.country === selectedCountry;

    return keywordMatch && countryMatch;
  });

  resultCount.textContent =
    `${filteredCharacters.length}件の武将`;

  characterList.innerHTML = "";

  if (filteredCharacters.length === 0) {
    characterList.innerHTML = `
      <div class="no-results">
        該当する武将が見つかりませんでした。
      </div>
    `;
    return;
  }

  filteredCharacters.forEach(character => {
    const card = document.createElement("article");

    card.className = "character-card";

    card.innerHTML = `
      ${createImageHTML(character)}

      <div class="character-card-body">

        <div class="character-country">
          ${character.country}
        </div>

        <h2 class="character-name">
          ${character.name}
        </h2>

        <div class="skill-row">

          <span class="skill-label">
            ★6追想
          </span>

          <span class="skill-name">
            ${character.skill}
          </span>

        </div>

        <div class="revival">
          最終復刻：
          <strong>
            ${character.lastRevival || "未入力"}
          </strong>
        </div>

        <div class="detail-link">
          詳細を見る →
        </div>

      </div>
    `;

    card.addEventListener("click", () => {
      openCharacterModal(character);
    });

    characterList.appendChild(card);
  });
}
function createFormationHTML(team) {

  if (!team || team.length === 0) {
    return `
      <p class="empty-text">
        未入力
      </p>
    `;
  }

  return `
    <div class="formation-grid">

      ${team.map(memberName => {

        const member =
          characters.find(
            character =>
              character.name === memberName
          );

        if (!member) {
          return `
            <div class="formation-member">

              <div class="formation-member-placeholder">
                画像なし
              </div>

              <div class="formation-member-name">
                ${memberName}
              </div>

            </div>
          `;
        }
const formationSrc =
  member.formationImage || member.image;

return `
  <div class="formation-member">

    ${
      formationSrc
        ? `
          <img
            src="${formationSrc}"
            alt="${member.name}"
            class="formation-member-image"
          >
        `
        : `
          <div class="formation-member-placeholder">
            画像なし
          </div>
        `
    }

    <div class="formation-member-name">
      ${member.name}
    </div>

  </div>
`;

      }).join("")}

    </div>
  `;
}

function openCharacterModal(character) {
  const attackTeamHTML =
  createFormationHTML(character.attackTeam);

const defenseTeamHTML =
  createFormationHTML(character.defenseTeam);
  const revivalHTML = character.lastRevival
    ? `
      <div class="revival-date">
        ${character.lastRevival}
      </div>

      <div class="days-since">
        ${getDaysSince(character.lastRevival)}
      </div>
    `
    : `
      <p class="empty-text">
        復刻日はまだ登録されていません。
      </p>
    `;

  modalContent.innerHTML = `
    ${createImageHTML(character, true)}

    <div class="detail-country">
      ${character.country}
    </div>

    <h2 class="detail-name">
      ${character.name}
    </h2>

    <div class="detail-skill-row">

      <span class="skill-label">
        ★6追想
      </span>

      <h3 class="detail-skill-name">
        ${character.skill}
      </h3>

    </div>

    <div class="skill-description">
      ${character.description}
    </div>

    <section class="detail-section">

      <h3>
        最終復刻日
      </h3>

      ${revivalHTML}

    </section>

    <section class="detail-section">

      <h3>おすすめ編成</h3>

      <div class="formation-category">
        <h4>⚔️ 侵攻</h4>
        ${attackTeamHTML}
      </div>

      <div class="formation-category">
        <h4>🛡️ 駐屯</h4>
        ${defenseTeamHTML}
      </div>

    </section>
  `;

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeCharacterModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

searchInput.addEventListener("input", renderCharacters);

document
  .querySelectorAll(".country-btn")
  .forEach(button => {
    button.addEventListener("click", () => {
      selectedCountry = button.dataset.country;

      document
        .querySelectorAll(".country-btn")
        .forEach(btn => {
          btn.classList.remove("active");
        });

      button.classList.add("active");

      renderCharacters();
    });
  });

closeModal.addEventListener("click", closeCharacterModal);

document
  .querySelector(".modal-overlay")
  .addEventListener("click", closeCharacterModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCharacterModal();
  }
});

renderCharacters();
