/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (67.28%)
 * Likes:    115
 * Dislikes: 0
 * Total Accepted:    26K
 * Total Submissions: 38.6K
 * Testcase Example:  '"Let\'s take LeetCode contest"'
 *
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc" 
 * 
 * 
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // const arrayStr = s.trim().split(' ');
    // const arrayStr = s.trim().split(/\s/g);
    return s.trim().split(/\s/g).map( itemStr => {
        return itemStr.split('').reverse().join('')
    }).join(' ');
};
// reverseWords("Let's take LeetCode contest");
