function solution(ids) {
    const set = new Set(ids);

    for (let i = 0; i < ids.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }

    return ids.length;
}