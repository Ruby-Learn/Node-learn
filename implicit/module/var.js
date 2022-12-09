exports.odd = '홀수';
exports.even = '짝수';

// 위와 동일
module.exports = {
    odd: '홀수',
    even: '홀수',
}

// module.exports === exports
// exports  => 참조 => module.exports