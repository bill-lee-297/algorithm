function solution(genres, plays) {
    var answer = [];
    let genreCount = new Map();

    genres.forEach((v, i) => {
        if (genreCount.get(v)) {
            let sumPlays = genreCount.get(v) + plays[i];
            genreCount.set(v, sumPlays);
        } else {
            genreCount.set(v, plays[i]);
        }
    });

    let genreCountArr = [...genreCount];

    genreCountArr.sort((a, b) => b[1] - a[1]);

    let genreDesc = new Map(genreCountArr);

    for (let key of genreDesc.keys()) {
        let filteredGenre = [];
        genres.forEach((value, index) => {
            if (key === value) {
                filteredGenre.push(index);
            }
        });

        let filteredGenreCount = new Map();

        filteredGenre.forEach((value) => {
            filteredGenreCount.set(value, plays[value]);
        });

        let filteredGenreCountArr = [...filteredGenreCount];
        filteredGenreCountArr.sort((a, b) => b[1] - a[1]);

        for (let i = 0; i < filteredGenreCountArr.length; i++) {
            if (i < 2) {
                answer.push(filteredGenreCountArr[i][0]);
            }
        }
    }

    return answer;
}
