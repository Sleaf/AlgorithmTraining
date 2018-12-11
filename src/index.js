const solves = {
  /* https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript */
  chooseBestSum(t, k, ls) {
    var biggestCount = 0;
    var recurseTowns = function (townsSoFar, lastIndex) {
      townsSoFar = townsSoFar || [];
      //base case
      if (townsSoFar.length === k) {
        var sumDistance = townsSoFar.reduce((a, b) => a + b);
        if (sumDistance <= t && sumDistance > biggestCount) {
          biggestCount = sumDistance;
        }
        return; //EJECT
      }
      //recursive case
      for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
        recurseTowns(townsSoFar.concat(ls[i]), i);
      }
    };
    recurseTowns();

    return biggestCount || null;
  },

  /* https://www.codewars.com/kata/number-of-trailing-zeros-of-n/train/javascript */
  zeros(n) {
    let res = 0;
    while (n >= 5) {
      n = ~~(n / 5);
      res += n;
    }
    return res;
  },

  /* https://www.codewars.com/kata/last-digit-of-a-large-number/train/javascript */
  lastDigit(str1, str2) {
    if (+str2 === 0) return 1;
    const latNum = +str1.slice(-1);
    const index2 = +(str2.slice(-1)) % 2;
    const index4 = +(str2.slice(-2)) % 4;
    switch (latNum) {
      case 0:
      case 1:
      case 5:
      case 6:
        return latNum;
      case 2:
        return [6, 2, 4, 8][index4];
      case 3:
        return [1, 3, 9, 7][index4];
      case 7:
        return [1, 7, 9, 3][index4];
      case 8:
        return [6, 8, 4, 2][index4];
      case 4:
        return [6, 4][index2];
      case 9:
        return [1, 9][index2];
    }
  },

  /* https://www.codewars.com/kata/the-observed-pin/train/javascript */
  getPINs(observed) {
    const keyMap = {
      '0': [0, 8].map(i => String(i)),
      '1': [1, 2, 4].map(i => String(i)),
      '2': [1, 2, 3, 5].map(i => String(i)),
      '3': [2, 3, 6].map(i => String(i)),
      '4': [1, 4, 5, 7].map(i => String(i)),
      '5': [2, 4, 6, 5, 8].map(i => String(i)),
      '6': [3, 5, 6, 9].map(i => String(i)),
      '7': [4, 7, 8].map(i => String(i)),
      '8': [5, 7, 8, 9, 0].map(i => String(i)),
      '9': [6, 8, 9].map(i => String(i)),
    };
    let res = [], lastRes = [''];
    for (const sawKey of observed.split('')) {
      const poll = [...lastRes];
      for (const curStr of poll) {
        for (const word of keyMap[sawKey]) {
          res.push(curStr + word)
        }
      }
      lastRes = res;
      res = [];
    }
    return lastRes;
  },

  /* https://www.codewars.com/kata/the-hashtag-generator/train/javascript */
  generateHashtag(str) {
    const res = str.replace(/\s+|\b([A-Za-z])/g, (s) => s.trim().toUpperCase()).trim();
    return res.length > 0 && res.length < 140 ? `#${res}` : false;
  },

  /* https://www.codewars.com/kata/catching-car-mileage-numbers/train/javascript */
  isInteresting(number, awesomePhrases) {
    if (number < 98) return 0;
    if (number < 100) return 1;
    const rules = [];
    rules[0] = numStr => /^\d0+$/.test(numStr);
    rules[1] = numStr => /^(\d)\1+$/.test(numStr);
    rules[2] = numStr => numStr.split('').every((item, index, arr) => {
      item = Number(item);
      if (index > 0) {
        const last = +arr[index - 1];
        return item === 0 ? last === 9 : item === last + 1;
      } else return true;
    });
    rules[3] = numStr => numStr.split('').every((item, index, arr) => {
      item = Number(item);
      if (index > 0) {
        return item === +arr[index - 1] - 1;
      } else return true;
    });
    rules[4] = numStr => numStr.split('').every((item, index, arr) => item === arr[arr.length - index - 1]);
    rules[5] = numStr => awesomePhrases.map(i => String(i)).includes(numStr);
    const isFun = number => rules.some(rule => rule(String(number)));
    return isFun(number) ? 2 : isFun(number + 1) || isFun(number + 2) ? 1 : 0
  },

  /* https://www.codewars.com/kata/5765870e190b1472ec0022a2/train/javascript */
  pathFinder(maze) {
    let result = false;
    const mazeArr = maze.split('\n').map(row => row.split(''));
    const N = mazeArr.length;
    const checked = Array(N).fill(null).map(_ => Array(N));
    const isRoad = (x, y) => !!mazeArr[x] && mazeArr[x][y] === '.';
    const putAround = (x, y) => {
      if (result || (!!checked[x] && checked[x][y]) || !isRoad(x, y)) return;
      checked[x][y] = true;
      if (x === N - 1 && y === N - 1) {
        result = true;
        return;
      }
      putAround(x - 1, y);
      putAround(x + 1, y);
      putAround(x, y - 1);
      putAround(x, y + 1);
    };
    putAround(0, 0);
    return result;
  },

  /* https://www.codewars.com/kata/pyramid-slide-down/train/javascript */
  longestSlideDown(pyramid) {
    for (let i = pyramid.length - 2; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        const cur = pyramid[i][j];
        pyramid[i][j] = Math.max(cur + pyramid[i + 1][j], cur + pyramid[i + 1][j + 1]);
      }
    }
    return pyramid[0][0];
  },

  /* https://www.codewars.com/kata/next-smaller-number-with-the-same-digits/train/javascript */
  nextSmaller(n) {
    const chars = n.toString().split('');
    for (let i = chars.length - 1; i >= 0; i--) {
      if (chars[i] < chars[i - 1]) {
        if (chars[i] === '0' && i === 1) {
          return -1;
        }
        return Object.keys({
          ...chars,
          [i - 1]: chars[i],
          [i]: chars[i - 1]
        }).join('');
      }
    }
    return -1;
  },
};

module.exports = solves;
