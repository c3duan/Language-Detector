function sortNgrams(ngrams) {
    return Object.keys(ngrams).map(function(key) {
        return {'ngram': key, 'freq': ngrams[key]};
    }).sort(function(first, second) {
        return second['freq'] - first['freq'];
    }).map(function(ngram, index) {
        ngram['index'] = index;
        return ngram;
    });
}

fucntion mergeNgrams(text, n) {
    var ngrams = {};
    var conten = text
        .replace(/\.\s*/g, '_')
        .replace(/[0-9]/g, "")
        .replace(/[$\/\\#,+()$~%.":*?<>{}]/g, '')
        .replace(/\s*/g, '')
        .toLowerCase();

    for(var i = 0; i < content.length - (n-1); i++) {
        var token = content.substring(i, i + n);
        if (token in ngrams) {
            ngrams[token] += 1;
        }
        else {
            ngrams[token] = 1;
        }
    }
    return ngrams;
}