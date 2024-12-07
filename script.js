// script.js

const cocktails = [
    {
        name: "马提尼",
        story: "马提尼起源于19世纪美国加利福尼亚州，是一种经典的鸡尾酒。",
        style: "干爽、辛辣",
        ingredients: "金酒、干味美思、橄榄或柠檬皮",
        method: "将金酒和干味美思倒入混合杯中，加入冰块搅拌，过滤后倒入马提尼杯中，用橄榄或柠檬皮装饰。",
        image: "images/martini.jpg"  // 使用本地图片
    },
    {
        name: "莫吉托",
        story: "莫吉托是一种古巴的经典鸡尾酒，以薄荷、朗姆酒为主要成分。",
        style: "清爽、甜美",
        ingredients: "白朗姆酒、糖、青柠、薄荷叶、苏打水",
        method: "将薄荷叶和糖放入杯中捣碎，加入青柠汁，加入冰块和朗姆酒，最后倒入苏打水，轻轻搅拌。",
        image: "images/mojito.jpg"  // 使用本地图片
    },
    {
        name: "龙舌兰日出",
        story: "龙舌兰日出最早起源于墨西哥，是一种色彩丰富的鸡尾酒。",
        style: "甜美、果香",
        ingredients: "龙舌兰酒、橙汁、石榴糖浆",
        method: "在玻璃杯中加入冰块，倒入龙舌兰酒和橙汁，最后缓缓加入石榴糖浆，让它沉底。",
        image: "images/tequila_sunrise.jpg"  // 修正了图片名称
    },
    {
        name: "长岛冰茶",
        story: "长岛冰茶是一款非常受欢迎的鸡尾酒，尽管名字里有“冰茶”，但它并不含茶。",
        style: "烈性、甜美",
        ingredients: "伏特加、朗姆酒、金酒、龙舌兰、柠檬汁、可乐、糖浆",
        method: "将所有酒精类饮品和柠檬汁、糖浆加入摇酒器中，加入冰块，摇匀后倒入杯中，最后加入可乐。",
        image: "images/long_island_iced_tea.jpg"  // 使用本地图片
    },
    {
        name: "血腥玛丽",
        story: "血腥玛丽是一种经典的早餐鸡尾酒，常常与早晨的自助餐搭配。",
        style: "辛辣、鲜美",
        ingredients: "伏特加、番茄汁、辣酱、柠檬汁、辣椒粉、胡椒",
        method: "将所有材料加入摇酒器中，加入冰块摇匀后倒入高球杯，最后加上几片橄榄和芹菜装饰。",
        image: "images/bloody_mary.jpg"  // 使用本地图片
    },
    {
        name: "白俄罗斯",
        story: "白俄罗斯是一款经典的酒精鸡尾酒，带有浓郁的奶油味。",
        style: "顺滑、奶香",
        ingredients: "伏特加、咖啡利口酒、奶油",
        method: "将伏特加、咖啡利口酒和奶油倒入搅拌杯中，加入冰块搅拌均匀后，倒入玻璃杯。",
        image: "images/white_russian.jpg"  // 使用本地图片
    },
    {
        name: "蓝色夏威夷",
        story: "蓝色夏威夷是一款清爽、色彩鲜艳的鸡尾酒，通常用于夏季。",
        style: "甜美、果香",
        ingredients: "蓝橙酒、朗姆酒、菠萝汁、椰浆",
        method: "将蓝橙酒、朗姆酒、菠萝汁和椰浆加入摇酒器，加入冰块摇匀后倒入杯中，装饰以菠萝片和樱桃。",
        image: "images/blue_hawaii.jpg"  // 使用本地图片
    },
    {
        name: "黑俄罗斯",
        story: "黑俄罗斯是一款简单而经典的鸡尾酒，通常作为开胃酒使用。",
        style: "烈性、苦涩",
        ingredients: "伏特加、咖啡利口酒",
        method: "将伏特加和咖啡利口酒倒入岩石杯中，加入冰块，搅拌均匀即可。",
        image: "images/black_russian.jpg"  // 使用本地图片
    },
    {
        name: "马格丽塔",
        story: "马格丽塔是一款著名的墨西哥鸡尾酒，以其独特的酸味而闻名。",
        style: "酸爽、清新",
        ingredients: "龙舌兰酒、橙酒、青柠汁、盐",
        method: "将龙舌兰酒、橙酒和青柠汁放入摇酒器中，加入冰块摇匀后，倒入有盐边的杯中。",
        image: "images/margarita.jpg"  // 使用本地图片
    },
    {
        name: "雪莉酒",
        story: "雪莉酒是一款以西班牙为发源地的酒精饮品，口感丰富，回味悠长。",
        style: "干型、果香",
        ingredients: "雪莉酒",
        method: "直接倒入雪莉酒杯中，可根据个人口味加冰块。",
        image: "images/sherry.jpg"  // 使用本地图片
    },
    {
        name: "金汤力",
        story: "金汤力是一款经典的鸡尾酒，起源于英国，以金酒和汤力水为基础。",
        style: "清爽、微苦",
        ingredients: "金酒、汤力水、青柠",
        method: "将金酒倒入高球杯中，加入冰块，最后倒入汤力水，用青柠装饰。",
        image: "images/gintonic.jpg"  // 使用本地图片
    },
    {
        name: "凤梨酸",
        story: "凤梨酸是一款以凤梨为基底的清爽鸡尾酒，适合夏季饮用。",
        style: "甜美、果香",
        ingredients: "凤梨汁、伏特加、柠檬汁、糖浆",
        method: "将所有材料加入摇酒器中，加入冰块摇匀，倒入杯中。",
        image: "images/pineapple_sour.jpg"  // 使用本地图片
    },
    {
        name: "柯梦波丹",
        story: "柯梦波丹是一款非常受欢迎的香港经典鸡尾酒，口感甜美。",
        style: "甜美、果香",
        ingredients: "柯梦波丹酒、橙汁、柠檬汁",
        method: "将柯梦波丹酒、橙汁和柠檬汁放入摇酒器，加入冰块摇匀后倒入杯中。",
        image: "images/kumquat.jpg"  // 使用本地图片
    },
    {
        name: "醉蝶",
        story: "醉蝶是一款非常特别的鸡尾酒，色彩鲜艳且有独特的果香。",
        style: "甜美、花香",
        ingredients: "金酒、百香果酒、柠檬汁、糖浆",
        method: "将金酒、百香果酒和柠檬汁加入摇酒器，加入冰块摇匀，倒入鸡尾酒杯中。",
        image: "images/dizzy_butterfly.jpg"  // 使用本地图片
    }
];

const recommendButton = document.getElementById('recommend-btn');
const cocktailStoryContent = document.getElementById('cocktail-story-content');
const cocktailStyleContent = document.getElementById('cocktail-style-content');
const cocktailIngredientsContent = document.getElementById('cocktail-ingredients-content');
const cocktailMethodContent = document.getElementById('cocktail-method-content');
const cocktailImage = document.getElementById('cocktail-img');

// 设置默认图片
cocktailImage.src = "images/default.jpg"; // 默认图片的路径
cocktailImage.alt = "默认鸡尾酒图片";

// 随机推荐鸡尾酒
function getRandomCocktail() {
    const randomIndex = Math.floor(Math.random() * cocktails.length);
    return cocktails[randomIndex];
}

// 更新页面内容
function updateCocktailInfo(cocktail) {
    cocktailStoryContent.textContent = cocktail.story;
    cocktailStyleContent.textContent = cocktail.style;
    cocktailIngredientsContent.textContent = cocktail.ingredients;
    cocktailMethodContent.textContent = cocktail.method;
    cocktailImage.src = cocktail.image;  // 引用本地图片
    cocktailImage.alt = `${cocktail.name} 图片`;
    document.getElementById('cocktail-info').style.display = 'grid'; // 显示内容和图片
}

// 点击按钮推荐鸡尾酒
recommendButton.addEventListener('click', () => {
    const randomCocktail = getRandomCocktail();
    updateCocktailInfo(randomCocktail);
});
