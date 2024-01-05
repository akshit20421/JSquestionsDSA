var findIntersectionValues = function(nums1, nums2) {
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                count1++;
                break
            }
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        for (let j = 0; j < nums1.length; j++) {
            if (nums2[i] === nums1[j]) {
                count2++;
                break
            }
        }
    }

    return [count1, count2];
};