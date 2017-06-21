// ここに関数(function)を書く
// 注意：同じ名前の関数は、下に書いたものが優先される

// 以下は記入例。
// コメントに「どこに書いてあるコードか」が分かるように書く。（最低でもページ数を書く）

// リスト4.1 (p.79)
function score(informationScore, englishScore){
        return {information : informationScore, english : englishScore };
}

var examinationScores = [
        score(59,60),score(84,69),score(77,56),score(53,65),
        score(41,61),score(20,43),score(42,65),score(53,52),
        score(55,59),score(54,61),score(36,51),score(48,51),
        score(64,68),score(70,68),score(45,45),score(54,64),
        score(42,49),score(50,60),score(49,59),score(53,55),
        score(68,52),score(60,60),score(66,59),score(57,48),
        score(52,56),score(55,55),score(82,67),score(61,63),
        score(51,54),score(43,36),score(57,50),score(65,55),
        score(81,63),score(63,50),score(45,50)
];

function getInformationScore(score) {
    return score.information;
}
