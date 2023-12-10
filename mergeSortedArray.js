var merge = function(nums1, m, nums2, n) {
    var p1 = m - 1;
    var p2 = n - 1;
    var p = nums1.length - 1;

    while (p1 >= 0 && p2 >= 0) {
        nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
    }

    while (p2 >= 0) {
        nums1[p--] = nums2[p2--];
    }

    return nums1;
};