import { useState, useEffect, useCallback } from "react";

// ─── 70-DAY PLAN (1 hr/day) ────────────────────────────────────────────────
const buildDay = (week, dayInWeek, topic, bookRef, concepts, problems, revision, mistakes, resources) => ({
  week, dayInWeek, topic, bookRef, concepts, problems, revision, mistakes, resources
});

const DSA_PLAN = {
  1: buildDay(1,1,"Arrays – Basics & Index Operations","Ch.3: Array representation, insert, delete. Skip math proofs.",
    [{id:"c1",text:"Index-based access O(1)"},{id:"c2",text:"Shifting on insert/delete"},{id:"c3",text:"Static vs Dynamic arrays"},{id:"c4",text:"Row-major vs column-major (concept only)"}],
    [{title:"Two Sum",link:"https://leetcode.com/problems/two-sum/",p:"LC",d:"Easy"},{title:"Find Max & Min",link:"https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",p:"GFG",d:"Easy"},{title:"Reverse an Array",link:"https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",p:"GFG",d:"Easy"},{title:"Check if Sorted",link:"https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",p:"LC",d:"Easy"}],
    "Day 1 — no revision yet. Focus only on today.",
    ["Don't use array.length() — it's array.length in Java","Always check bounds before accessing index","0-based indexing in Java — careful with off-by-one"],
    [{type:"video",title:"Arrays in Java – Intro",url:"https://www.youtube.com/results?search_query=arrays+in+java+DSA+beginner",label:"YouTube"},{type:"article",title:"GFG – Arrays in Java",url:"https://www.geeksforgeeks.org/arrays-in-java/",label:"GFG"},{type:"article",title:"LC Arrays 101",url:"https://leetcode.com/explore/learn/card/fun-with-arrays/",label:"LC"}]),

  2: buildDay(1,2,"Arrays – Prefix Sum & Difference Array","Ch.3: Prefix sum patterns.",
    [{id:"c1",text:"Prefix sum array construction"},{id:"c2",text:"Range sum queries in O(1)"},{id:"c3",text:"Difference array for range updates"},{id:"c4",text:"2D prefix sum (concept)"}],
    [{title:"Range Sum Query",link:"https://leetcode.com/problems/range-sum-query-immutable/",p:"LC",d:"Easy"},{title:"Subarray Sum Equals K",link:"https://leetcode.com/problems/subarray-sum-equals-k/",p:"LC",d:"Medium"},{title:"Find Pivot Index",link:"https://leetcode.com/problems/find-pivot-index/",p:"LC",d:"Easy"},{title:"Move Zeroes",link:"https://leetcode.com/problems/move-zeroes/",p:"LC",d:"Easy"}],
    "Re-solve Two Sum (Day 1) without peeking. Time < 10 min.",
    ["Prefix sum[0] = 0 sentinel avoids off-by-one","Range sum: sum[r+1] - sum[l] (0-indexed prefix)","Difference array: always undo at r+1"],
    [{type:"video",title:"Prefix Sum Pattern – Java",url:"https://www.youtube.com/results?search_query=prefix+sum+java+DSA+pattern",label:"YouTube"},{type:"article",title:"GFG – Prefix Sum Array",url:"https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/",label:"GFG"}]),

  3: buildDay(1,3,"Arrays – Two Pointer Technique","Ch.3: Two pointer search patterns.",
    [{id:"c1",text:"Left/right two-pointer approach"},{id:"c2",text:"Sorted array requirement for many patterns"},{id:"c3",text:"Pair sum, triplet sum problems"},{id:"c4",text:"Dutch National Flag (3-way partition)"}],
    [{title:"Best Time to Buy & Sell Stock",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",p:"LC",d:"Easy"},{title:"Container With Most Water",link:"https://leetcode.com/problems/container-with-most-water/",p:"LC",d:"Medium"},{title:"Sort Colors (DNF)",link:"https://leetcode.com/problems/sort-colors/",p:"LC",d:"Medium"},{title:"3Sum",link:"https://leetcode.com/problems/3sum/",p:"LC",d:"Medium"}],
    "Redo Range Sum Query (Day 2) — explain prefix array to yourself verbally.",
    ["Two pointers only guaranteed on sorted arrays — sort first if needed","Avoid using extra space; two-pointer is space O(1)","3Sum: skip duplicate values at outer and inner pointer"],
    [{type:"video",title:"Two Pointer Technique – Full",url:"https://www.youtube.com/results?search_query=two+pointer+technique+java+striver",label:"YouTube"},{type:"article",title:"GFG – Two Pointer Approach",url:"https://www.geeksforgeeks.org/two-pointers-technique/",label:"GFG"}]),

  4: buildDay(1,4,"Arrays – Sliding Window","Ch.3: Sliding window patterns.",
    [{id:"c1",text:"Fixed-size sliding window"},{id:"c2",text:"Variable-size / dynamic window"},{id:"c3",text:"Kadane's Algorithm (max subarray)"},{id:"c4",text:"Window shrink condition"}],
    [{title:"Maximum Average Subarray I",link:"https://leetcode.com/problems/maximum-average-subarray-i/",p:"LC",d:"Easy"},{title:"Maximum Subarray (Kadane's)",link:"https://leetcode.com/problems/maximum-subarray/",p:"LC",d:"Easy"},{title:"Longest Subarray with Sum K",link:"https://www.geeksforgeeks.org/longest-sub-array-sum-k/",p:"GFG",d:"Medium"},{title:"Longest Substring Without Repeating",link:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",p:"LC",d:"Medium"}],
    "Re-solve Container With Most Water (Day 3) — can you do it in one pass?",
    ["Fixed window: add right, remove left each step","Variable window: shrink while condition breaks","Kadane's: reset to current element (not 0) on negative sum"],
    [{type:"video",title:"Sliding Window Full Pattern",url:"https://www.youtube.com/results?search_query=sliding+window+pattern+java+striver+full",label:"YouTube"},{type:"article",title:"GFG – Sliding Window Technique",url:"https://www.geeksforgeeks.org/window-sliding-technique/",label:"GFG"}]),

  5: buildDay(1,5,"Time & Space Complexity Deep Dive","Ch.1: Big-O notation, best/worst/average case.",
    [{id:"c1",text:"Big-O, Big-Θ, Big-Ω notation"},{id:"c2",text:"Amortized analysis basics"},{id:"c3",text:"Space complexity (auxiliary vs total)"},{id:"c4",text:"Recognizing complexity from code loops"}],
    [{title:"Best Time to Buy & Sell Stock II",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",p:"LC",d:"Medium"},{title:"Product of Array Except Self",link:"https://leetcode.com/problems/product-of-array-except-self/",p:"LC",d:"Medium"},{title:"Maximum Product Subarray",link:"https://leetcode.com/problems/maximum-product-subarray/",p:"LC",d:"Medium"}],
    "Re-solve Kadane's (Day 4) — identify its time and space complexity aloud.",
    ["O(n log n) ≠ O(n²) — sorting matters for complexity","Nested loop ≠ always O(n²): check the inner loop bound","Recursive space = call stack depth"],
    [{type:"video",title:"Big-O Notation Explained",url:"https://www.youtube.com/results?search_query=big+o+notation+explained+java+DSA",label:"YouTube"},{type:"article",title:"GFG – Time Complexity Analysis",url:"https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/",label:"GFG"}]),

  6: buildDay(1,6,"Arrays – Hard Problems + Revision","Ch.3 hard patterns. Trapping water, merge intervals.",
    [{id:"c1",text:"Trapping Rain Water (stack/two-pointer)"},{id:"c2",text:"Merge Intervals pattern"},{id:"c3",text:"Next permutation logic"},{id:"c4",text:"Majority element (Boyer-Moore voting)"}],
    [{title:"Trapping Rain Water",link:"https://leetcode.com/problems/trapping-rain-water/",p:"LC",d:"Hard"},{title:"Merge Intervals",link:"https://leetcode.com/problems/merge-intervals/",p:"LC",d:"Medium"},{title:"Next Permutation",link:"https://leetcode.com/problems/next-permutation/",p:"LC",d:"Medium"},{title:"Majority Element",link:"https://leetcode.com/problems/majority-element/",p:"LC",d:"Easy"}],
    "Re-attempt Sort Colors and 3Sum (Days 3–4). Notice patterns.",
    ["Trapping Rain Water: precompute maxLeft[] and maxRight[]","Merge intervals: sort by start first","Boyer-Moore: vote cancels with opposite elements"],
    [{type:"video",title:"Trapping Rain Water – Multiple Approaches",url:"https://www.youtube.com/results?search_query=trapping+rain+water+all+approaches+java",label:"YouTube"},{type:"article",title:"GFG – Merge Intervals",url:"https://www.geeksforgeeks.org/merging-intervals/",label:"GFG"}]),

  7: buildDay(1,7,"Week 1 REVISION 🔁","Re-read your own code from Days 1–6 only.",
    [{id:"c1",text:"Arrays: prefix sum, two-pointer, sliding window"},{id:"c2",text:"Kadane's algorithm pattern"},{id:"c3",text:"Complexity analysis of each problem"},{id:"c4",text:"Dutch National Flag, Boyer-Moore voting"}],
    [{title:"Re-attempt: Subarray Sum Equals K",link:"https://leetcode.com/problems/subarray-sum-equals-k/",p:"LC",d:"Medium"},{title:"Re-attempt: Trapping Rain Water",link:"https://leetcode.com/problems/trapping-rain-water/",p:"LC",d:"Hard"},{title:"Re-attempt: 3Sum",link:"https://leetcode.com/problems/3sum/",p:"LC",d:"Medium"},{title:"Missing Number",link:"https://leetcode.com/problems/missing-number/",p:"LC",d:"Easy"}],
    "Full Week 1 array revision. Log weak areas before Week 2.",
    ["Don't rush revision — understanding beats speed here","Can you explain every solution to a friend? If not, re-read","Add all struggles to Weak Areas tab NOW"],
    [{type:"video",title:"Array Problems Revision Striver",url:"https://www.youtube.com/results?search_query=array+problems+revision+striver+java",label:"YouTube"},{type:"article",title:"LC Arrays 101 Full",url:"https://leetcode.com/explore/learn/card/fun-with-arrays/",label:"LC"}]),

  8: buildDay(2,1,"Strings – Basics & Java String API","Ch.4: String immutability, StringBuilder.",
    [{id:"c1",text:"String immutability in Java"},{id:"c2",text:"StringBuilder for mutation — O(n) vs O(n²)"},{id:"c3",text:"Common String methods: charAt, substring, indexOf"},{id:"c4",text:"char to index: (ch - 'a')"}],
    [{title:"Valid Palindrome",link:"https://leetcode.com/problems/valid-palindrome/",p:"LC",d:"Easy"},{title:"Reverse Words in a String",link:"https://leetcode.com/problems/reverse-words-in-a-string/",p:"LC",d:"Medium"},{title:"Longest Common Prefix",link:"https://leetcode.com/problems/longest-common-prefix/",p:"LC",d:"Easy"},{title:"Count & Say",link:"https://leetcode.com/problems/count-and-say/",p:"LC",d:"Medium"}],
    "Re-solve Missing Number (Day 7) mentally — what's the math trick?",
    ["String == compares reference; use .equals() in Java","String + String in a loop is O(n²) — use StringBuilder","trim() before processing user input strings"],
    [{type:"video",title:"Strings in Java DSA Complete",url:"https://www.youtube.com/results?search_query=strings+in+java+DSA+complete+tutorial",label:"YouTube"},{type:"article",title:"GFG – String Class in Java",url:"https://www.geeksforgeeks.org/string-class-in-java/",label:"GFG"}]),

  9: buildDay(2,2,"Strings – Frequency Maps & Anagrams","Ch.4: Character frequency patterns.",
    [{id:"c1",text:"HashMap for frequency counting"},{id:"c2",text:"int[26] array for lowercase letters"},{id:"c3",text:"Anagram detection — frequency matching"},{id:"c4",text:"Group anagrams using sorted key"}],
    [{title:"Valid Anagram",link:"https://leetcode.com/problems/valid-anagram/",p:"LC",d:"Easy"},{title:"Group Anagrams",link:"https://leetcode.com/problems/group-anagrams/",p:"LC",d:"Medium"},{title:"First Non-Repeating Character",link:"https://www.geeksforgeeks.org/given-a-string-find-its-first-non-repeating-character/",p:"GFG",d:"Easy"},{title:"Find All Anagrams in String",link:"https://leetcode.com/problems/find-all-anagrams-in-a-string/",p:"LC",d:"Medium"}],
    "Re-solve Valid Palindrome (Day 8) in under 5 min.",
    ["int[26] is faster than HashMap for lowercase-only strings","Group Anagrams: sorted string as key is the trick","Anagram in sliding window = update freq on expand/shrink"],
    [{type:"video",title:"Anagram Problems Java",url:"https://www.youtube.com/results?search_query=anagram+problems+java+DSA+pattern",label:"YouTube"},{type:"article",title:"GFG – Check Anagram",url:"https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/",label:"GFG"}]),

  10: buildDay(2,3,"HashMap & HashSet Fundamentals","Ch.11: Hashing internals, collision, load factor.",
    [{id:"c1",text:"HashMap: put, get, containsKey — O(1) avg"},{id:"c2",text:"HashSet: contains, add — O(1) avg"},{id:"c3",text:"Collision handling (chaining vs open addressing)"},{id:"c4",text:"Load factor and rehashing concept"}],
    [{title:"Two Sum (HashMap approach)",link:"https://leetcode.com/problems/two-sum/",p:"LC",d:"Easy"},{title:"Longest Consecutive Sequence",link:"https://leetcode.com/problems/longest-consecutive-sequence/",p:"LC",d:"Medium"},{title:"Contains Duplicate",link:"https://leetcode.com/problems/contains-duplicate/",p:"LC",d:"Easy"},{title:"4Sum II",link:"https://leetcode.com/problems/4sum-ii/",p:"LC",d:"Medium"}],
    "Re-solve Group Anagrams (Day 9) — trace through your HashMap mentally.",
    ["HashMap lookup O(1) avg but O(n) worst (hash collision)","LinkedHashMap preserves insertion order if needed","Never modify a Map while iterating — use entrySet copy"],
    [{type:"video",title:"HashMap HashSet Java DSA",url:"https://www.youtube.com/results?search_query=hashmap+hashset+java+DSA+full",label:"YouTube"},{type:"article",title:"GFG – HashMap in Java",url:"https://www.geeksforgeeks.org/java-util-hashmap-in-java-with-examples/",label:"GFG"}]),

  11: buildDay(2,4,"Strings – Substring & Sliding Window","Ch.4 + sliding window on strings.",
    [{id:"c1",text:"Minimum window substring pattern"},{id:"c2",text:"Character map with need/have counters"},{id:"c3",text:"Rabin-Karp rolling hash (concept)"},{id:"c4",text:"KMP pattern matching (concept only)"}],
    [{title:"Minimum Window Substring",link:"https://leetcode.com/problems/minimum-window-substring/",p:"LC",d:"Hard"},{title:"Permutation in String",link:"https://leetcode.com/problems/permutation-in-string/",p:"LC",d:"Medium"},{title:"Longest Substring with At Most K Distinct",link:"https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/",p:"GFG",d:"Medium"}],
    "Re-solve Find All Anagrams in String (Day 9) — sliding window approach.",
    ["Min window: track 'have' and 'need' counts separately","Shrink left pointer only when valid window found","Permutation check = anagram check in fixed-size window"],
    [{type:"video",title:"Minimum Window Substring – Breakdown",url:"https://www.youtube.com/results?search_query=minimum+window+substring+java+explained",label:"YouTube"},{type:"article",title:"GFG – Smallest Window Containing All Chars",url:"https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/",label:"GFG"}]),

  12: buildDay(2,5,"Strings – Hard Problems","Ch.4 harder string problems.",
    [{id:"c1",text:"Z-function for pattern matching"},{id:"c2",text:"Palindromic substrings (expand around center)"},{id:"c3",text:"Longest palindromic substring (Manacher concept)"},{id:"c4",text:"String encoding/decoding"}],
    [{title:"Longest Palindromic Substring",link:"https://leetcode.com/problems/longest-palindromic-substring/",p:"LC",d:"Medium"},{title:"Palindromic Substrings",link:"https://leetcode.com/problems/palindromic-substrings/",p:"LC",d:"Medium"},{title:"Encode and Decode Strings",link:"https://www.geeksforgeeks.org/encode-and-decode-strings/",p:"GFG",d:"Medium"},{title:"String to Integer (atoi)",link:"https://leetcode.com/problems/string-to-integer-atoi/",p:"LC",d:"Medium"}],
    "Re-solve Longest Consecutive Sequence (Day 10) — HashSet O(n) approach.",
    ["Expand around center: 2n-1 centers for even/odd palindromes","atoi edge cases: overflow, whitespace, sign","Encoding: length-prefix is cleaner than delimiter-based"],
    [{type:"video",title:"Palindrome Substring Problems",url:"https://www.youtube.com/results?search_query=longest+palindromic+substring+java+all+approaches",label:"YouTube"},{type:"article",title:"GFG – Longest Palindromic Substring",url:"https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/",label:"GFG"}]),

  13: buildDay(2,6,"Hashing – Frequency & Subarray Patterns","Ch.11: Advanced hashing applications.",
    [{id:"c1",text:"Frequency count with hashing"},{id:"c2",text:"Subarray with given sum (prefix+hash)"},{id:"c3",text:"Top K frequent elements (heap+hash)"},{id:"c4",text:"Isomorphic strings / word pattern"}],
    [{title:"Top K Frequent Elements",link:"https://leetcode.com/problems/top-k-frequent-elements/",p:"LC",d:"Medium"},{title:"Word Pattern",link:"https://leetcode.com/problems/word-pattern/",p:"LC",d:"Easy"},{title:"Isomorphic Strings",link:"https://leetcode.com/problems/isomorphic-strings/",p:"LC",d:"Easy"},{title:"Ransom Note",link:"https://leetcode.com/problems/ransom-note/",p:"LC",d:"Easy"}],
    "Re-solve Minimum Window Substring (Day 11) — trace through with small example.",
    ["Top K: bucket sort approach O(n) beats PriorityQueue O(n log k)","Isomorphic: need TWO maps (both directions)","Word pattern: map word→char AND char→word"],
    [{type:"video",title:"Top K Frequent – Bucket Sort Trick",url:"https://www.youtube.com/results?search_query=top+k+frequent+elements+bucket+sort+java",label:"YouTube"},{type:"article",title:"GFG – Top K Frequent",url:"https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/",label:"GFG"}]),

  14: buildDay(2,7,"Week 2 REVISION 🔁","Strings + Hashing week review.",
    [{id:"c1",text:"String patterns: palindrome, anagram, window"},{id:"c2",text:"HashMap O(1) operations and edge cases"},{id:"c3",text:"Frequency array vs HashMap tradeoffs"},{id:"c4",text:"Sliding window on strings"}],
    [{title:"Re-attempt: Minimum Window Substring",link:"https://leetcode.com/problems/minimum-window-substring/",p:"LC",d:"Hard"},{title:"Re-attempt: Group Anagrams",link:"https://leetcode.com/problems/group-anagrams/",p:"LC",d:"Medium"},{title:"Re-attempt: Longest Consecutive Sequence",link:"https://leetcode.com/problems/longest-consecutive-sequence/",p:"LC",d:"Medium"},{title:"Longest Palindrome (build one)",link:"https://leetcode.com/problems/longest-palindrome/",p:"LC",d:"Easy"}],
    "Full Week 2 review. Update Weak Areas tab.",
    ["Strings week is heavy — if you rushed, slow down here","Hash collisions matter in interviews — know at least one approach","Don't skip logging weak areas: they'll repeat in Month 2"],
    [{type:"video",title:"String+HashMap Problems Revision",url:"https://www.youtube.com/results?search_query=string+hashmap+problems+java+revision",label:"YouTube"},{type:"article",title:"GFG – Hashing Data Structure",url:"https://www.geeksforgeeks.org/hashing-data-structure/",label:"GFG"}]),

  15: buildDay(3,1,"Linked List – Singly LL Basics","Ch.5: Node structure, traversal, insert/delete.",
    [{id:"c1",text:"Node structure: data + next in Java"},{id:"c2",text:"Insert at head/tail/position"},{id:"c3",text:"Delete by value/position"},{id:"c4",text:"Dummy/sentinel node trick"}],
    [{title:"Reverse Linked List",link:"https://leetcode.com/problems/reverse-a-linked-list/",p:"LC",d:"Easy"},{title:"Middle of Linked List",link:"https://leetcode.com/problems/middle-of-the-linked-list/",p:"LC",d:"Easy"},{title:"Merge Two Sorted Lists",link:"https://leetcode.com/problems/merge-two-sorted-lists/",p:"LC",d:"Easy"},{title:"Remove Nth Node From End",link:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/",p:"LC",d:"Medium"}],
    "Re-solve Top K Frequent Elements (Day 13) — bucket sort approach.",
    ["Always check head == null before head.next","Update prev.next BEFORE losing the next pointer","Dummy head avoids null checks for head deletions"],
    [{type:"video",title:"Linked List Java Striver Full",url:"https://www.youtube.com/results?search_query=linked+list+java+striver+DSA+full",label:"YouTube"},{type:"article",title:"GFG – Linked List DS",url:"https://www.geeksforgeeks.org/data-structures/linked-list/",label:"GFG"}]),

  16: buildDay(3,2,"Linked List – Fast/Slow Pointer","Ch.5: Runner technique, cycle detection.",
    [{id:"c1",text:"Fast & Slow pointer (Floyd's algorithm)"},{id:"c2",text:"Cycle detection and cycle start"},{id:"c3",text:"Finding middle in one pass"},{id:"c4",text:"Palindrome LL using slow/fast"}],
    [{title:"Linked List Cycle",link:"https://leetcode.com/problems/linked-list-cycle/",p:"LC",d:"Easy"},{title:"Linked List Cycle II",link:"https://leetcode.com/problems/linked-list-cycle-ii/",p:"LC",d:"Medium"},{title:"Palindrome Linked List",link:"https://leetcode.com/problems/palindrome-linked-list/",p:"LC",d:"Easy"},{title:"Reorder List",link:"https://leetcode.com/problems/reorder-list/",p:"LC",d:"Medium"}],
    "Re-solve Reverse Linked List (Day 15) iteratively AND recursively.",
    ["Floyd's: fast=2x slow; they meet inside cycle","Cycle start: reset one pointer to head, move both at speed 1","fast.next.next crashes on 1-node — always check fast && fast.next"],
    [{type:"video",title:"Floyd Cycle Detection Java",url:"https://www.youtube.com/results?search_query=floyd+cycle+detection+linked+list+java+explained",label:"YouTube"},{type:"article",title:"GFG – Detect Loop in LL",url:"https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",label:"GFG"}]),

  17: buildDay(3,3,"Linked List – DLL & Merge Problems","Ch.5: Doubly LL + merge/sort patterns.",
    [{id:"c1",text:"DLL: prev pointer, bidirectional traversal"},{id:"c2",text:"Insert/delete in DLL — update both pointers"},{id:"c3",text:"Merge sort on linked list"},{id:"c4",text:"Flatten multilevel LL"}],
    [{title:"Flatten a Multilevel DLL",link:"https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",p:"LC",d:"Medium"},{title:"Sort List (merge sort)",link:"https://leetcode.com/problems/sort-list/",p:"LC",d:"Medium"},{title:"Add Two Numbers",link:"https://leetcode.com/problems/add-two-numbers/",p:"LC",d:"Medium"},{title:"Intersection of Two Linked Lists",link:"https://leetcode.com/problems/intersection-of-two-linked-lists/",p:"LC",d:"Easy"}],
    "Re-solve Reorder List (Day 16) — three steps: find mid, reverse second half, merge.",
    ["DLL delete: update node.prev.next AND node.next.prev","Merge sort LL: find mid with slow/fast, split, recurse","Add Two Numbers: carry forward — handle extra node at end"],
    [{type:"video",title:"DLL Java Tutorial",url:"https://www.youtube.com/results?search_query=doubly+linked+list+java+DSA+tutorial",label:"YouTube"},{type:"article",title:"GFG – DLL",url:"https://www.geeksforgeeks.org/doubly-linked-list/",label:"GFG"}]),

  18: buildDay(3,4,"Stack – Basics & Monotonic Stack","Ch.6: Stack push/pop/peek + monotonic patterns.",
    [{id:"c1",text:"Stack: LIFO, push/pop/peek O(1)"},{id:"c2",text:"Monotonic increasing stack"},{id:"c3",text:"Monotonic decreasing stack"},{id:"c4",text:"Next greater / next smaller element"}],
    [{title:"Valid Parentheses",link:"https://leetcode.com/problems/valid-parentheses/",p:"LC",d:"Easy"},{title:"Daily Temperatures",link:"https://leetcode.com/problems/daily-temperatures/",p:"LC",d:"Medium"},{title:"Next Greater Element I",link:"https://leetcode.com/problems/next-greater-element-i/",p:"LC",d:"Easy"},{title:"Largest Rectangle in Histogram",link:"https://leetcode.com/problems/largest-rectangle-in-histogram/",p:"LC",d:"Hard"}],
    "Re-solve Add Two Numbers (Day 17) — trace with [2→4→3] + [5→6→4].",
    ["Use Deque<Integer> not legacy Stack class in Java","Monotonic: decide next greater vs smaller BEFORE coding","Histogram: push sentinel 0 at both ends to avoid edge cases"],
    [{type:"video",title:"Monotonic Stack Pattern Full",url:"https://www.youtube.com/results?search_query=monotonic+stack+pattern+java+explained+full",label:"YouTube"},{type:"article",title:"GFG – Monotonic Stack",url:"https://www.geeksforgeeks.org/monotonic-stack/",label:"GFG"}]),

  19: buildDay(3,5,"Stack – Advanced Applications","Ch.6: Stack in expression evaluation.",
    [{id:"c1",text:"Min Stack — O(1) getMin()"},{id:"c2",text:"Stock span problem"},{id:"c3",text:"Asteroid Collision pattern"},{id:"c4",text:"Decode string (stack + recursion)"}],
    [{title:"Min Stack",link:"https://leetcode.com/problems/min-stack/",p:"LC",d:"Medium"},{title:"Stock Span Problem",link:"https://www.geeksforgeeks.org/the-stock-span-problem/",p:"GFG",d:"Medium"},{title:"Asteroid Collision",link:"https://leetcode.com/problems/asteroid-collision/",p:"LC",d:"Medium"},{title:"Decode String",link:"https://leetcode.com/problems/decode-string/",p:"LC",d:"Medium"}],
    "Re-solve Daily Temperatures (Day 18) — explain monotonic stack to yourself.",
    ["Min stack: pair (val, minSoFar) to avoid linear search","Stock span: pop while top <= current; count pops + 1","Decode string: push chars until ']', then pop until '['"],
    [{type:"video",title:"Min Stack + Stock Span Java",url:"https://www.youtube.com/results?search_query=min+stack+stock+span+problem+java",label:"YouTube"},{type:"article",title:"GFG – Stack Applications",url:"https://www.geeksforgeeks.org/stack-data-structure/",label:"GFG"}]),

  20: buildDay(3,6,"Queue & Deque Patterns","Ch.7: Queue FIFO, circular queue, deque.",
    [{id:"c1",text:"Queue: FIFO, enqueue/dequeue O(1)"},{id:"c2",text:"Circular queue — avoid wasted space"},{id:"c3",text:"Deque: double-ended queue"},{id:"c4",text:"Sliding window maximum (monotonic deque)"}],
    [{title:"Implement Queue using Stacks",link:"https://leetcode.com/problems/implement-queue-using-stacks/",p:"LC",d:"Easy"},{title:"Sliding Window Maximum",link:"https://leetcode.com/problems/sliding-window-maximum/",p:"LC",d:"Hard"},{title:"Design Circular Queue",link:"https://leetcode.com/problems/design-circular-queue/",p:"LC",d:"Medium"},{title:"First Negative in Every Window",link:"https://www.geeksforgeeks.org/first-negative-integer-every-window-size-k/",p:"GFG",d:"Medium"}],
    "Re-solve Decode String (Day 19) — can you do it iteratively?",
    ["Queue using 2 stacks: lazy transfer is O(1) amortized","Sliding window max: deque stores indices not values","Circular queue: (rear + 1) % capacity for wrap-around"],
    [{type:"video",title:"Sliding Window Maximum Deque",url:"https://www.youtube.com/results?search_query=sliding+window+maximum+deque+java+explained",label:"YouTube"},{type:"article",title:"GFG – Circular Queue",url:"https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/",label:"GFG"}]),

  21: buildDay(3,7,"Week 3 REVISION 🔁","LL + Stack + Queue week review.",
    [{id:"c1",text:"LL: reversal, fast/slow, cycle detection"},{id:"c2",text:"Stack: monotonic, min-stack, span"},{id:"c3",text:"Queue: deque, sliding window max"},{id:"c4",text:"Design patterns for all three"}],
    [{title:"Re-attempt: Largest Rectangle Histogram",link:"https://leetcode.com/problems/largest-rectangle-in-histogram/",p:"LC",d:"Hard"},{title:"Re-attempt: Sliding Window Maximum",link:"https://leetcode.com/problems/sliding-window-maximum/",p:"LC",d:"Hard"},{title:"Re-attempt: Reorder List",link:"https://leetcode.com/problems/reorder-list/",p:"LC",d:"Medium"},{title:"LRU Cache",link:"https://leetcode.com/problems/lru-cache/",p:"LC",d:"Medium"}],
    "Full Week 3 review. LRU Cache combines DLL + HashMap!",
    ["LRU Cache is a classic interview question — understand it deeply","Hard problems need multiple passes: read, plan, then code","Update Weak Areas before Week 4"],
    [{type:"video",title:"LRU Cache Java Implementation",url:"https://www.youtube.com/results?search_query=LRU+cache+java+implementation+DSA",label:"YouTube"},{type:"article",title:"GFG – LRU Cache Implementation",url:"https://www.geeksforgeeks.org/lru-cache-implementation/",label:"GFG"}]),

  22: buildDay(4,1,"Binary Search – Classic Pattern","Ch.8: Binary search on sorted array.",
    [{id:"c1",text:"Classic binary search — O(log n)"},{id:"c2",text:"Lower bound (first occurrence)"},{id:"c3",text:"Upper bound (last occurrence)"},{id:"c4",text:"mid = left + (right - left) / 2 (overflow safe)"}],
    [{title:"Binary Search",link:"https://leetcode.com/problems/binary-search/",p:"LC",d:"Easy"},{title:"Search Insert Position",link:"https://leetcode.com/problems/search-insert-position/",p:"LC",d:"Easy"},{title:"First and Last Position in Array",link:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",p:"LC",d:"Medium"},{title:"Count Occurrences in Sorted Array",link:"https://www.geeksforgeeks.org/count-occurrences-in-sorted-array/",p:"GFG",d:"Easy"}],
    "Re-solve LRU Cache (Day 21) — trace through a get/put sequence.",
    ["mid = (lo + hi) / 2 overflows for large ints — use lo + (hi-lo)/2","Lower bound: move right pointer to mid-1 even when found","Binary search only works on monotonically ordered data"],
    [{type:"video",title:"Binary Search Java Complete",url:"https://www.youtube.com/results?search_query=binary+search+java+striver+complete",label:"YouTube"},{type:"article",title:"GFG – Binary Search",url:"https://www.geeksforgeeks.org/binary-search/",label:"GFG"}]),

  23: buildDay(4,2,"Binary Search – On Answer","Ch.8: BS on answer space.",
    [{id:"c1",text:"Binary search on answer (not array index)"},{id:"c2",text:"Minimize the maximum / maximize the minimum"},{id:"c3",text:"Capacity/weight feasibility check pattern"},{id:"c4",text:"Square root, nth root via BS"}],
    [{title:"Koko Eating Bananas",link:"https://leetcode.com/problems/koko-eating-bananas/",p:"LC",d:"Medium"},{title:"Ship Within D Days",link:"https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",p:"LC",d:"Medium"},{title:"Find Minimum in Rotated Array",link:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",p:"LC",d:"Medium"},{title:"Sqrt(x)",link:"https://leetcode.com/problems/sqrtx/",p:"LC",d:"Easy"}],
    "Re-solve First and Last Position (Day 22) — both lower and upper bound.",
    ["BS on answer: define feasible(mid) function first","Koko: check if total ceil(pile/speed) <= h","Rotated array: identify which half is sorted, then decide"],
    [{type:"video",title:"Binary Search on Answer Pattern",url:"https://www.youtube.com/results?search_query=binary+search+on+answer+pattern+java+striver",label:"YouTube"},{type:"article",title:"GFG – BS on Answer",url:"https://www.geeksforgeeks.org/binary-search-on-answer/",label:"GFG"}]),

  24: buildDay(4,3,"Binary Search – Rotated & 2D","Ch.8: BS on rotated/2D arrays.",
    [{id:"c1",text:"Search in rotated sorted array"},{id:"c2",text:"BS on 2D matrix (treat as 1D)"},{id:"c3",text:"Search in row+column sorted matrix"},{id:"c4",text:"Peak element finding"}],
    [{title:"Search in Rotated Sorted Array",link:"https://leetcode.com/problems/search-in-rotated-sorted-array/",p:"LC",d:"Medium"},{title:"Search a 2D Matrix",link:"https://leetcode.com/problems/search-a-2d-matrix/",p:"LC",d:"Medium"},{title:"Find Peak Element",link:"https://leetcode.com/problems/find-peak-element/",p:"LC",d:"Medium"},{title:"Search in Row-Column Sorted Matrix",link:"https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/",p:"GFG",d:"Medium"}],
    "Re-solve Koko Eating Bananas (Day 23) — write the feasibility function cleanly.",
    ["Rotated: always find the sorted half first","2D matrix as 1D: row = mid/cols, col = mid%cols","Peak: binary search works because nums[mid]>nums[mid+1] → left half has peak"],
    [{type:"video",title:"Rotated Array Binary Search",url:"https://www.youtube.com/results?search_query=search+rotated+sorted+array+binary+search+java",label:"YouTube"},{type:"article",title:"GFG – Search Rotated Array",url:"https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/",label:"GFG"}]),

  25: buildDay(4,4,"Recursion – Basics & Backtracking Intro","Ch.9: Recursion, base case, call stack.",
    [{id:"c1",text:"Base case, recursive case structure"},{id:"c2",text:"Recursion tree visualization"},{id:"c3",text:"Tail recursion vs head recursion"},{id:"c4",text:"Call stack and stack overflow"}],
    [{title:"Fibonacci (memoized)",link:"https://leetcode.com/problems/fibonacci-number/",p:"LC",d:"Easy"},{title:"Power Function (fast pow)",link:"https://leetcode.com/problems/powx-n/",p:"LC",d:"Medium"},{title:"Reverse String (recursive)",link:"https://leetcode.com/problems/reverse-string/",p:"LC",d:"Easy"},{title:"Generate Parentheses",link:"https://leetcode.com/problems/generate-parentheses/",p:"LC",d:"Medium"}],
    "Re-solve Search in Rotated Array (Day 24) — explain which-half-is-sorted logic.",
    ["Every recursion needs a base case — define it first","Draw the recursion tree before coding","Fast power: even→pow(x, n/2)², odd→x * pow(x, n-1)"],
    [{type:"video",title:"Recursion Basics Java Full",url:"https://www.youtube.com/results?search_query=recursion+basics+java+DSA+striver+full",label:"YouTube"},{type:"article",title:"GFG – Recursion in Java",url:"https://www.geeksforgeeks.org/recursion/",label:"GFG"}]),

  26: buildDay(4,5,"Recursion – Backtracking Patterns","Ch.9: Backtracking technique.",
    [{id:"c1",text:"Backtracking: choose, explore, unchoose"},{id:"c2",text:"Subset generation"},{id:"c3",text:"Permutation generation"},{id:"c4",text:"Pruning for efficiency"}],
    [{title:"Subsets",link:"https://leetcode.com/problems/subsets/",p:"LC",d:"Medium"},{title:"Permutations",link:"https://leetcode.com/problems/permutations/",p:"LC",d:"Medium"},{title:"Combination Sum",link:"https://leetcode.com/problems/combination-sum/",p:"LC",d:"Medium"},{title:"Letter Combinations Phone",link:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",p:"LC",d:"Medium"}],
    "Re-solve Generate Parentheses (Day 25) — trace the recursion tree.",
    ["Backtracking: always 'undo' (remove from list) after recursion","Subsets: include or exclude each element","Combination Sum: allow reuse by not incrementing start index"],
    [{type:"video",title:"Backtracking Patterns Java",url:"https://www.youtube.com/results?search_query=backtracking+patterns+java+striver+full",label:"YouTube"},{type:"article",title:"GFG – Backtracking",url:"https://www.geeksforgeeks.org/backtracking-algorithms/",label:"GFG"}]),

  27: buildDay(4,6,"Divide & Conquer","Ch.9: Divide and conquer paradigm.",
    [{id:"c1",text:"Divide and conquer paradigm"},{id:"c2",text:"Merge sort — O(n log n)"},{id:"c3",text:"Quick sort — O(n log n) avg"},{id:"c4",text:"Master theorem for recurrences"}],
    [{title:"Sort Array (merge sort)",link:"https://leetcode.com/problems/sort-an-array/",p:"LC",d:"Medium"},{title:"Merge k Sorted Lists",link:"https://leetcode.com/problems/merge-k-sorted-lists/",p:"LC",d:"Hard"},{title:"Kth Largest Element (quickselect)",link:"https://leetcode.com/problems/kth-largest-element-in-an-array/",p:"LC",d:"Medium"},{title:"Count Inversions",link:"https://www.geeksforgeeks.org/counting-inversions/",p:"GFG",d:"Medium"}],
    "Re-solve Subsets and Permutations (Day 26) — count the output sizes.",
    ["Merge sort: stable, predictable O(n log n) — prefer for interviews","Quickselect: average O(n), worst O(n²) — mention Lomuto vs Hoare","Count inversions = modified merge sort — classic problem"],
    [{type:"video",title:"Merge Sort + Quick Sort Java",url:"https://www.youtube.com/results?search_query=merge+sort+quick+sort+java+implementation+DSA",label:"YouTube"},{type:"article",title:"GFG – Merge Sort",url:"https://www.geeksforgeeks.org/merge-sort/",label:"GFG"}]),

  28: buildDay(4,7,"Week 4 REVISION 🔁","Binary Search + Recursion week review.",
    [{id:"c1",text:"BS patterns: classic, on-answer, rotated, 2D"},{id:"c2",text:"Recursion: tree, fast-pow, generate"},{id:"c3",text:"Backtracking: subsets, permutations, combos"},{id:"c4",text:"Divide & Conquer: merge/quick sort"}],
    [{title:"Re-attempt: Merge k Sorted Lists",link:"https://leetcode.com/problems/merge-k-sorted-lists/",p:"LC",d:"Hard"},{title:"Re-attempt: Combination Sum",link:"https://leetcode.com/problems/combination-sum/",p:"LC",d:"Medium"},{title:"Re-attempt: Ship Within D Days",link:"https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",p:"LC",d:"Medium"},{title:"N-Queens",link:"https://leetcode.com/problems/n-queens/",p:"LC",d:"Hard"}],
    "Month 1 done! Review all 4 weeks briefly before Month 2.",
    ["Month 1 recap: Arrays, Strings, LL, Stack, Queue, BS, Recursion","You now have the full foundation for Month 2's harder DSA","Log all Month 1 weak areas — Month 2 will use these concepts"],
    [{type:"video",title:"BS + Backtracking Revision",url:"https://www.youtube.com/results?search_query=binary+search+backtracking+java+revision+DSA",label:"YouTube"},{type:"article",title:"GFG – DSA Complete Roadmap",url:"https://www.geeksforgeeks.org/data-structures/",label:"GFG"}]),

  29: buildDay(5,1,"Trees – Binary Tree Basics","Ch.10: BT structure, traversals.",
    [{id:"c1",text:"BT node: data, left, right in Java"},{id:"c2",text:"Inorder, Preorder, Postorder (recursive)"},{id:"c3",text:"Level order traversal (BFS with queue)"},{id:"c4",text:"Height and diameter of tree"}],
    [{title:"Binary Tree Inorder Traversal",link:"https://leetcode.com/problems/binary-tree-inorder-traversal/",p:"LC",d:"Easy"},{title:"Maximum Depth of Binary Tree",link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/",p:"LC",d:"Easy"},{title:"Binary Tree Level Order",link:"https://leetcode.com/problems/binary-tree-level-order-traversal/",p:"LC",d:"Medium"},{title:"Diameter of Binary Tree",link:"https://leetcode.com/problems/diameter-of-binary-tree/",p:"LC",d:"Easy"}],
    "Re-solve N-Queens (Day 28) — trace 4-queens manually on paper.",
    ["Height: max(left, right) + 1, base case = 0 for null","Diameter: left_height + right_height at each node","Level order: use Queue, process level by level with size snapshot"],
    [{type:"video",title:"Binary Tree Traversals Java",url:"https://www.youtube.com/results?search_query=binary+tree+traversals+java+striver+full",label:"YouTube"},{type:"article",title:"GFG – Binary Tree DS",url:"https://www.geeksforgeeks.org/binary-tree-data-structure/",label:"GFG"}]),

  30: buildDay(5,2,"Trees – Views & Path Problems","Ch.10: Tree views, path sum.",
    [{id:"c1",text:"Left view, right view (level order trick)"},{id:"c2",text:"Top view, bottom view (vertical order)"},{id:"c3",text:"Path sum problems"},{id:"c4",text:"Root to leaf path with target"}],
    [{title:"Binary Tree Right Side View",link:"https://leetcode.com/problems/binary-tree-right-side-view/",p:"LC",d:"Medium"},{title:"Path Sum II",link:"https://leetcode.com/problems/path-sum-ii/",p:"LC",d:"Medium"},{title:"Binary Tree Maximum Path Sum",link:"https://leetcode.com/problems/binary-tree-maximum-path-sum/",p:"LC",d:"Hard"},{title:"Sum Root to Leaf Numbers",link:"https://leetcode.com/problems/sum-root-to-leaf-numbers/",p:"LC",d:"Medium"}],
    "Re-solve Level Order Traversal (Day 29) — add zigzag order variant.",
    ["Right side view: last node at each BFS level","Max path sum: at each node, combine left_gain + right_gain + val","Path sum II: backtrack (remove node after recursive call)"],
    [{type:"video",title:"Tree Views Java All Types",url:"https://www.youtube.com/results?search_query=binary+tree+views+java+left+right+top+bottom",label:"YouTube"},{type:"article",title:"GFG – Top View of BT",url:"https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/",label:"GFG"}]),

  31: buildDay(5,3,"Trees – LCA & Symmetric","Ch.10: LCA, symmetric, balanced checks.",
    [{id:"c1",text:"Lowest Common Ancestor (LCA)"},{id:"c2",text:"Symmetric tree check"},{id:"c3",text:"Balanced binary tree check"},{id:"c4",text:"Check if BT is identical"}],
    [{title:"Lowest Common Ancestor of BT",link:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",p:"LC",d:"Medium"},{title:"Symmetric Tree",link:"https://leetcode.com/problems/symmetric-tree/",p:"LC",d:"Easy"},{title:"Balanced Binary Tree",link:"https://leetcode.com/problems/balanced-binary-tree/",p:"LC",d:"Easy"},{title:"Same Tree",link:"https://leetcode.com/problems/same-tree/",p:"LC",d:"Easy"}],
    "Re-solve Binary Tree Maximum Path Sum (Day 30) — why do we clamp gains at 0?",
    ["LCA: if root == p or q, return root; combine left+right results","Balanced: O(n²) naive vs O(n) one-pass with height","Symmetric: mirror check, not equality check"],
    [{type:"video",title:"LCA Binary Tree Java",url:"https://www.youtube.com/results?search_query=lowest+common+ancestor+binary+tree+java",label:"YouTube"},{type:"article",title:"GFG – LCA in BT",url:"https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/",label:"GFG"}]),

  32: buildDay(5,4,"BST – Operations & Patterns","Ch.10: Binary Search Tree.",
    [{id:"c1",text:"BST property: left < root < right"},{id:"c2",text:"BST insert, delete, search — O(h)"},{id:"c3",text:"Inorder of BST = sorted array"},{id:"c4",text:"Kth smallest in BST"}],
    [{title:"Validate BST",link:"https://leetcode.com/problems/validate-binary-search-tree/",p:"LC",d:"Medium"},{title:"Kth Smallest in BST",link:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/",p:"LC",d:"Medium"},{title:"Delete Node in BST",link:"https://leetcode.com/problems/delete-node-in-a-bst/",p:"LC",d:"Medium"},{title:"Convert Sorted Array to BST",link:"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",p:"LC",d:"Easy"}],
    "Re-solve LCA (Day 31) — now solve LCA for BST (simpler logic).",
    ["Validate BST: pass min/max bounds in recursion, not just parent","Delete BST: 3 cases — no child, one child, two children (successor)","Kth smallest: inorder traversal, count k nodes"],
    [{type:"video",title:"BST Operations Java Complete",url:"https://www.youtube.com/results?search_query=binary+search+tree+operations+java+striver",label:"YouTube"},{type:"article",title:"GFG – Binary Search Tree",url:"https://www.geeksforgeeks.org/binary-search-tree-data-structure/",label:"GFG"}]),

  33: buildDay(5,5,"Trees – Serialization & Construction","Ch.10: Build tree from traversals.",
    [{id:"c1",text:"Construct BT from preorder+inorder"},{id:"c2",text:"Construct BT from postorder+inorder"},{id:"c3",text:"Serialize and deserialize binary tree"},{id:"c4",text:"Morris traversal (O(1) space)"}],
    [{title:"Construct BT from Preorder+Inorder",link:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",p:"LC",d:"Medium"},{title:"Serialize and Deserialize BT",link:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",p:"LC",d:"Hard"},{title:"Flatten BT to Linked List",link:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",p:"LC",d:"Medium"},{title:"Populating Next Right Pointers",link:"https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",p:"LC",d:"Medium"}],
    "Re-solve Validate BST (Day 32) — trace with a skewed BST.",
    ["Construct from pre+in: preorder[0] = root; find in inorder to split","Serialize: preorder with null markers is cleanest","Flatten to LL: right subtree after left subtree (preorder order)"],
    [{type:"video",title:"Construct BT from Traversals",url:"https://www.youtube.com/results?search_query=construct+binary+tree+preorder+inorder+java",label:"YouTube"},{type:"article",title:"GFG – BT from Traversals",url:"https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/",label:"GFG"}]),

  34: buildDay(5,6,"Trees – Hard & Trie Intro","Ch.10 hard + Trie structure.",
    [{id:"c1",text:"Trie: insert, search, startsWith"},{id:"c2",text:"TrieNode: children[26] + isEnd"},{id:"c3",text:"Word Search on grid (DFS+backtracking)"},{id:"c4",text:"Binary Tree cameras (hard greedy)"}],
    [{title:"Implement Trie",link:"https://leetcode.com/problems/implement-trie-prefix-tree/",p:"LC",d:"Medium"},{title:"Word Search II",link:"https://leetcode.com/problems/word-search-ii/",p:"LC",d:"Hard"},{title:"Replace Words",link:"https://leetcode.com/problems/replace-words/",p:"LC",d:"Medium"},{title:"Count Distinct Substrings using Trie",link:"https://www.geeksforgeeks.org/count-distinct-substrings-of-a-string-using-suffix-trie/",p:"GFG",d:"Medium"}],
    "Re-solve Serialize/Deserialize BT (Day 33) — use level-order instead of preorder.",
    ["Trie insert: create node if children[c-'a'] is null","Word Search: mark cell visited by overwriting with '#'","Trie isEnd flag marks complete word, not just prefix"],
    [{type:"video",title:"Trie Data Structure Java",url:"https://www.youtube.com/results?search_query=trie+data+structure+java+implementation+full",label:"YouTube"},{type:"article",title:"GFG – Trie DS",url:"https://www.geeksforgeeks.org/trie-insert-and-search/",label:"GFG"}]),

  35: buildDay(5,7,"Week 5 REVISION 🔁","Trees week review.",
    [{id:"c1",text:"BT traversals: all 4 types"},{id:"c2",text:"Path problems, views, LCA"},{id:"c3",text:"BST operations and properties"},{id:"c4",text:"Trie structure and usage"}],
    [{title:"Re-attempt: Binary Tree Maximum Path Sum",link:"https://leetcode.com/problems/binary-tree-maximum-path-sum/",p:"LC",d:"Hard"},{title:"Re-attempt: Word Search II",link:"https://leetcode.com/problems/word-search-ii/",p:"LC",d:"Hard"},{title:"Re-attempt: Serialize/Deserialize BT",link:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",p:"LC",d:"Hard"},{title:"Count Good Nodes in BT",link:"https://leetcode.com/problems/count-good-nodes-in-binary-tree/",p:"LC",d:"Medium"}],
    "Full Week 5 review. Trees are the hardest week so far — take time.",
    ["Trees combine recursion + data structure — revisit weak recursion first","Hard tree problems need drawing the tree first, then code","Log all tree weak areas — Week 9 (DP) needs tree DP concepts"],
    [{type:"video",title:"Tree Problems Full Revision",url:"https://www.youtube.com/results?search_query=binary+tree+problems+revision+striver+java",label:"YouTube"},{type:"article",title:"GFG – BT Complete Guide",url:"https://www.geeksforgeeks.org/binary-tree-data-structure/",label:"GFG"}]),

  36: buildDay(6,1,"Heap / Priority Queue – Basics","Ch.12: Heap structure, heapify.",
    [{id:"c1",text:"Max heap / min heap property"},{id:"c2",text:"PriorityQueue in Java (min-heap default)"},{id:"c3",text:"Heapify up (insert) and heapify down (extract)"},{id:"c4",text:"Heap sort in O(n log n)"}],
    [{title:"Kth Largest Element",link:"https://leetcode.com/problems/kth-largest-element-in-an-array/",p:"LC",d:"Medium"},{title:"Last Stone Weight",link:"https://leetcode.com/problems/last-stone-weight/",p:"LC",d:"Easy"},{title:"K Closest Points to Origin",link:"https://leetcode.com/problems/k-closest-points-to-origin/",p:"LC",d:"Medium"},{title:"Find Median from Data Stream",link:"https://leetcode.com/problems/find-median-from-data-stream/",p:"LC",d:"Hard"}],
    "Re-solve Count Good Nodes in BT (Day 35) — DFS with max-so-far.",
    ["PriorityQueue<> pq = new PriorityQueue<>(Collections.reverseOrder()) for max-heap","Kth largest: min-heap of size k (pop when > k)","Median: two heaps (max-heap for lower half, min-heap for upper)"],
    [{type:"video",title:"Heap PriorityQueue Java DSA",url:"https://www.youtube.com/results?search_query=heap+priority+queue+java+DSA+striver",label:"YouTube"},{type:"article",title:"GFG – Heap Data Structure",url:"https://www.geeksforgeeks.org/heap-data-structure/",label:"GFG"}]),

  37: buildDay(6,2,"Heap – Advanced Patterns","Ch.12: Heap applications.",
    [{id:"c1",text:"Top K frequent elements (heap+hash)"},{id:"c2",text:"Merge K sorted arrays/lists"},{id:"c3",text:"Task scheduler problem"},{id:"c4",text:"Sliding window median"}],
    [{title:"Top K Frequent Words",link:"https://leetcode.com/problems/top-k-frequent-words/",p:"LC",d:"Medium"},{title:"Merge K Sorted Lists",link:"https://leetcode.com/problems/merge-k-sorted-lists/",p:"LC",d:"Hard"},{title:"Task Scheduler",link:"https://leetcode.com/problems/task-scheduler/",p:"LC",d:"Medium"},{title:"Reorganize String",link:"https://leetcode.com/problems/reorganize-string/",p:"LC",d:"Medium"}],
    "Re-solve Find Median from Data Stream (Day 36) — trace 5 insertions.",
    ["Top K words: max-heap or PQ with custom comparator (freq→alpha)","Merge K lists: use min-heap on (value, listIndex, nodeIndex)","Task scheduler: greedy — most frequent task first"],
    [{type:"video",title:"Top K Problems Heap Java",url:"https://www.youtube.com/results?search_query=top+k+problems+heap+java+DSA+patterns",label:"YouTube"},{type:"article",title:"GFG – Task Scheduler",url:"https://www.geeksforgeeks.org/task-scheduler/",label:"GFG"}]),

  38: buildDay(6,3,"BST – Advanced + Ordered Map","Ch.10 advanced BST + TreeMap.",
    [{id:"c1",text:"TreeMap in Java — O(log n) operations"},{id:"c2",text:"TreeMap: floorKey, ceilingKey, subMap"},{id:"c3",text:"BST iterator (inorder with stack)"},{id:"c4",text:"Recover BST (swapped nodes)"}],
    [{title:"BST Iterator",link:"https://leetcode.com/problems/binary-search-tree-iterator/",p:"LC",d:"Medium"},{title:"Recover BST",link:"https://leetcode.com/problems/recover-binary-search-tree/",p:"LC",d:"Medium"},{title:"Count of Smaller Numbers After Self",link:"https://leetcode.com/problems/count-of-smaller-numbers-after-self/",p:"LC",d:"Hard"},{title:"My Calendar I",link:"https://leetcode.com/problems/my-calendar-i/",p:"LC",d:"Medium"}],
    "Re-solve Task Scheduler (Day 37) — what's the math formula approach?",
    ["BST Iterator: lazy evaluation — push left spine into stack","Recover BST: Morris inorder finds the two swapped nodes","TreeMap.ceilingKey(k) returns smallest key >= k"],
    [{type:"video",title:"TreeMap Java DSA Applications",url:"https://www.youtube.com/results?search_query=treemap+java+DSA+applications+tutorial",label:"YouTube"},{type:"article",title:"GFG – TreeMap in Java",url:"https://www.geeksforgeeks.org/treemap-in-java/",label:"GFG"}]),

  39: buildDay(6,4,"Sorting Algorithms Deep Dive","Ch.2: All sorting algorithms.",
    [{id:"c1",text:"Counting sort — O(n+k)"},{id:"c2",text:"Radix sort — O(d*n)"},{id:"c3",text:"Bucket sort — O(n) average"},{id:"c4",text:"When to use which sorting algorithm"}],
    [{title:"Sort Colors (counting sort)",link:"https://leetcode.com/problems/sort-colors/",p:"LC",d:"Medium"},{title:"Maximum Gap",link:"https://leetcode.com/problems/maximum-gap/",p:"LC",d:"Hard"},{title:"Largest Number",link:"https://leetcode.com/problems/largest-number/",p:"LC",d:"Medium"},{title:"H-Index",link:"https://leetcode.com/problems/h-index/",p:"LC",d:"Medium"}],
    "Re-solve Recover BST (Day 38) — trace Morris traversal on paper.",
    ["Counting sort only works on bounded range integers","Maximum Gap: bucket sort concept — O(n) solution","Custom sort: Comparator.compare(a,b) negative = a before b"],
    [{type:"video",title:"All Sorting Algorithms Java",url:"https://www.youtube.com/results?search_query=all+sorting+algorithms+java+counting+radix+bucket",label:"YouTube"},{type:"article",title:"GFG – Sorting Algorithms",url:"https://www.geeksforgeeks.org/sorting-algorithms/",label:"GFG"}]),

  40: buildDay(6,5,"Greedy Algorithms – Basics","Ch.9: Greedy approach and proofs.",
    [{id:"c1",text:"Greedy choice property"},{id:"c2",text:"Optimal substructure"},{id:"c3",text:"Activity selection / interval scheduling"},{id:"c4",text:"Fractional knapsack"}],
    [{title:"Jump Game",link:"https://leetcode.com/problems/jump-game/",p:"LC",d:"Medium"},{title:"Jump Game II",link:"https://leetcode.com/problems/jump-game-ii/",p:"LC",d:"Medium"},{title:"Non-overlapping Intervals",link:"https://leetcode.com/problems/non-overlapping-intervals/",p:"LC",d:"Medium"},{title:"Minimum Number of Arrows",link:"https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",p:"LC",d:"Medium"}],
    "Re-solve Largest Number (Day 39) — explain the comparator logic.",
    ["Greedy doesn't always work — verify with counterexample before using","Jump Game II: track furthest reachable, extend at each 'boundary'","Non-overlapping intervals: sort by end time, greedy pick"],
    [{type:"video",title:"Greedy Algorithms Java DSA",url:"https://www.youtube.com/results?search_query=greedy+algorithm+java+DSA+patterns+striver",label:"YouTube"},{type:"article",title:"GFG – Greedy Algorithms",url:"https://www.geeksforgeeks.org/greedy-algorithms/",label:"GFG"}]),

  41: buildDay(6,6,"Greedy – Hard + Interval Problems","Ch.9: Advanced greedy.",
    [{id:"c1",text:"Gas station circular greedy"},{id:"c2",text:"Candy distribution greedy"},{id:"c3",text:"Meeting rooms problems"},{id:"c4",text:"Partition labels greedy"}],
    [{title:"Gas Station",link:"https://leetcode.com/problems/gas-station/",p:"LC",d:"Medium"},{title:"Candy",link:"https://leetcode.com/problems/candy/",p:"LC",d:"Hard"},{title:"Meeting Rooms II",link:"https://www.geeksforgeeks.org/find-minimum-number-of-meeting-rooms-required/",p:"GFG",d:"Medium"},{title:"Partition Labels",link:"https://leetcode.com/problems/partition-labels/",p:"LC",d:"Medium"}],
    "Re-solve Jump Game II (Day 40) — what does 'boundary' represent?",
    ["Gas station: if total gas >= total cost, solution always exists","Candy: two-pass greedy (left→right, right→left), take max","Meeting rooms: sort by start, use min-heap of end times"],
    [{type:"video",title:"Gas Station + Candy Java",url:"https://www.youtube.com/results?search_query=gas+station+candy+problem+java+greedy",label:"YouTube"},{type:"article",title:"GFG – Greedy Hard Problems",url:"https://www.geeksforgeeks.org/greedy-algorithms/",label:"GFG"}]),

  42: buildDay(6,7,"Week 6 REVISION 🔁","Heap + Sorting + Greedy review.",
    [{id:"c1",text:"Heap patterns: top-K, merge, median"},{id:"c2",text:"Sorting: when to use counting/radix/bucket"},{id:"c3",text:"Greedy: intervals, scheduling, gas station"},{id:"c4",text:"TreeMap usage patterns"}],
    [{title:"Re-attempt: Find Median from Data Stream",link:"https://leetcode.com/problems/find-median-from-data-stream/",p:"LC",d:"Hard"},{title:"Re-attempt: Candy",link:"https://leetcode.com/problems/candy/",p:"LC",d:"Hard"},{title:"Re-attempt: Merge K Sorted Lists",link:"https://leetcode.com/problems/merge-k-sorted-lists/",p:"LC",d:"Hard"},{title:"IPO (top greedy+heap)",link:"https://leetcode.com/problems/ipo/",p:"LC",d:"Hard"}],
    "Full Week 6 review. Update Weak Areas before Week 7.",
    ["Heap + Greedy often combine in hard interview problems","Know when greedy fails and DP is needed (0/1 knapsack ≠ fractional)","IPO combines heap + sorting + greedy — great practice"],
    [{type:"video",title:"Heap+Greedy Combined Problems",url:"https://www.youtube.com/results?search_query=heap+greedy+combined+problems+java+DSA",label:"YouTube"},{type:"article",title:"GFG – Priority Queue Applications",url:"https://www.geeksforgeeks.org/applications-priority-queue/",label:"GFG"}]),

  43: buildDay(7,1,"Graphs – Basics & BFS","Ch.13: Graph representation, BFS.",
    [{id:"c1",text:"Adjacency list vs adjacency matrix"},{id:"c2",text:"BFS — level-by-level O(V+E)"},{id:"c3",text:"Shortest path in unweighted graph"},{id:"c4",text:"Connected components"}],
    [{title:"Number of Islands",link:"https://leetcode.com/problems/number-of-islands/",p:"LC",d:"Medium"},{title:"BFS of Graph",link:"https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",p:"GFG",d:"Easy"},{title:"Rotting Oranges",link:"https://leetcode.com/problems/rotting-oranges/",p:"LC",d:"Medium"},{title:"01 Matrix",link:"https://leetcode.com/problems/01-matrix/",p:"LC",d:"Medium"}],
    "Re-solve IPO (Day 42) — trace through 3 projects manually.",
    ["Always use visited[] array to avoid revisiting in BFS","Adjacency list: ArrayList<List<Integer>> adj = new ArrayList<>()","Multi-source BFS: enqueue all sources at start (Rotting Oranges)"],
    [{type:"video",title:"BFS Graph Java Complete",url:"https://www.youtube.com/results?search_query=BFS+graph+java+striver+complete",label:"YouTube"},{type:"article",title:"GFG – BFS Graph",url:"https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",label:"GFG"}]),

  44: buildDay(7,2,"Graphs – DFS & Cycle Detection","Ch.13: DFS, cycle detection.",
    [{id:"c1",text:"DFS — recursive and iterative"},{id:"c2",text:"Cycle detection in undirected graph"},{id:"c3",text:"Cycle detection in directed graph"},{id:"c4",text:"DFS timestamps for ordering"}],
    [{title:"DFS of Graph",link:"https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",p:"GFG",d:"Easy"},{title:"Detect Cycle Undirected (BFS)",link:"https://www.geeksforgeeks.org/detect-cycle-undirected-graph/",p:"GFG",d:"Medium"},{title:"Detect Cycle Directed Graph",link:"https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",p:"GFG",d:"Medium"},{title:"Clone Graph",link:"https://leetcode.com/problems/clone-graph/",p:"LC",d:"Medium"}],
    "Re-solve Number of Islands (Day 43) — now solve it using DFS.",
    ["Undirected cycle: use parent tracking in DFS/BFS","Directed cycle: use 3-color DFS (white=0, gray=1, black=2)","Clone Graph: use HashMap<Node,Node> old→new"],
    [{type:"video",title:"Cycle Detection Graph Java",url:"https://www.youtube.com/results?search_query=cycle+detection+directed+undirected+graph+java+striver",label:"YouTube"},{type:"article",title:"GFG – DFS Graph",url:"https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",label:"GFG"}]),

  45: buildDay(7,3,"Graphs – Topological Sort","Ch.13: DAG ordering.",
    [{id:"c1",text:"Topological sort — DFS approach"},{id:"c2",text:"Topological sort — Kahn's BFS (indegree)"},{id:"c3",text:"Course schedule problems"},{id:"c4",text:"Alien dictionary ordering"}],
    [{title:"Course Schedule",link:"https://leetcode.com/problems/course-schedule/",p:"LC",d:"Medium"},{title:"Course Schedule II",link:"https://leetcode.com/problems/course-schedule-ii/",p:"LC",d:"Medium"},{title:"Alien Dictionary",link:"https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/",p:"GFG",d:"Hard"},{title:"Finish Tasks in Minimum Sessions",link:"https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/",p:"LC",d:"Medium"}],
    "Re-solve Clone Graph (Day 44) — trace with 4-node graph.",
    ["Kahn's: if queue empties before processing all nodes → cycle!","Course Schedule: topo sort on prerequisite DAG","Alien dict: build graph from adjacent word pairs only"],
    [{type:"video",title:"Topological Sort Java Striver",url:"https://www.youtube.com/results?search_query=topological+sort+kahn+dfs+java+striver",label:"YouTube"},{type:"article",title:"GFG – Topological Sorting",url:"https://www.geeksforgeeks.org/topological-sorting/",label:"GFG"}]),

  46: buildDay(7,4,"Graphs – Union-Find (DSU)","Ch.13: Disjoint Set Union.",
    [{id:"c1",text:"Union-Find with path compression"},{id:"c2",text:"Union by rank (size)"},{id:"c3",text:"Detecting redundant connections"},{id:"c4",text:"Dynamic connectivity problems"}],
    [{title:"Number of Provinces",link:"https://leetcode.com/problems/number-of-provinces/",p:"LC",d:"Medium"},{title:"Redundant Connection",link:"https://leetcode.com/problems/redundant-connection/",p:"LC",d:"Medium"},{title:"Accounts Merge",link:"https://leetcode.com/problems/accounts-merge/",p:"LC",d:"Medium"},{title:"Most Stones Removed",link:"https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/",p:"LC",d:"Medium"}],
    "Re-solve Course Schedule II (Day 45) — return the actual order.",
    ["Path compression: parent[x] = find(parent[x]) recursively","Union by rank: attach smaller tree under larger","If find(u) == find(v) before union → cycle detected"],
    [{type:"video",title:"Union Find DSU Java Full",url:"https://www.youtube.com/results?search_query=union+find+disjoint+set+java+striver+full",label:"YouTube"},{type:"article",title:"GFG – DSU",url:"https://www.geeksforgeeks.org/disjoint-set-union-randomized-algorithm/",label:"GFG"}]),

  47: buildDay(7,5,"Graphs – Shortest Path","Ch.13: Dijkstra, Bellman-Ford.",
    [{id:"c1",text:"Dijkstra's algorithm — O((V+E) log V)"},{id:"c2",text:"Dijkstra with priority queue in Java"},{id:"c3",text:"Bellman-Ford for negative weights"},{id:"c4",text:"Shortest path in DAG"}],
    [{title:"Network Delay Time",link:"https://leetcode.com/problems/network-delay-time/",p:"LC",d:"Medium"},{title:"Cheapest Flights Within K Stops",link:"https://leetcode.com/problems/cheapest-flights-within-k-stops/",p:"LC",d:"Medium"},{title:"Path With Minimum Effort",link:"https://leetcode.com/problems/path-with-minimum-effort/",p:"LC",d:"Medium"},{title:"Shortest Path in Binary Matrix",link:"https://leetcode.com/problems/shortest-path-in-binary-matrix/",p:"LC",d:"Medium"}],
    "Re-solve Accounts Merge (Day 46) — what does each DSU component represent?",
    ["Dijkstra: use dist[] array, initialize to INF except source=0","Dijkstra doesn't work with negative edges — use Bellman-Ford","Cheapest Flights: Bellman-Ford with k iterations"],
    [{type:"video",title:"Dijkstra Java Striver",url:"https://www.youtube.com/results?search_query=dijkstra+algorithm+java+striver+priority+queue",label:"YouTube"},{type:"article",title:"GFG – Dijkstra's Algorithm",url:"https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",label:"GFG"}]),

  48: buildDay(7,6,"Graphs – MST & Advanced","Ch.13: Minimum Spanning Tree.",
    [{id:"c1",text:"Prim's algorithm (greedy + heap)"},{id:"c2",text:"Kruskal's algorithm (sort + DSU)"},{id:"c3",text:"MST applications"},{id:"c4",text:"Bridges and articulation points"}],
    [{title:"Min Cost to Connect All Points (Prim's)",link:"https://leetcode.com/problems/min-cost-to-connect-all-points/",p:"LC",d:"Medium"},{title:"Connecting Cities With Minimum Cost",link:"https://www.geeksforgeeks.org/connect-n-ropes-minimum-cost/",p:"GFG",d:"Medium"},{title:"Critical Connections (bridges)",link:"https://leetcode.com/problems/critical-connections-in-a-network/",p:"LC",d:"Hard"},{title:"Swim in Rising Water",link:"https://leetcode.com/problems/swim-in-rising-water/",p:"LC",d:"Hard"}],
    "Re-solve Network Delay Time (Day 47) — try Bellman-Ford version.",
    ["Kruskal: sort edges by weight, use DSU to avoid cycles","Prim's: start from any node, always pick minimum edge to unvisited","Bridges: DFS with low[] and disc[] arrays"],
    [{type:"video",title:"Prim's and Kruskal's Java",url:"https://www.youtube.com/results?search_query=prims+kruskal+algorithm+java+striver+DSA",label:"YouTube"},{type:"article",title:"GFG – Minimum Spanning Tree",url:"https://www.geeksforgeeks.org/minimum-spanning-tree/",label:"GFG"}]),

  49: buildDay(7,7,"Week 7 REVISION 🔁","Graph algorithms review.",
    [{id:"c1",text:"BFS/DFS on grids and adjacency lists"},{id:"c2",text:"Cycle detection: directed vs undirected"},{id:"c3",text:"Topological sort + Dijkstra + DSU"},{id:"c4",text:"MST: Prim's vs Kruskal's"}],
    [{title:"Re-attempt: Critical Connections",link:"https://leetcode.com/problems/critical-connections-in-a-network/",p:"LC",d:"Hard"},{title:"Re-attempt: Alien Dictionary",link:"https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/",p:"GFG",d:"Hard"},{title:"Re-attempt: Swim in Rising Water",link:"https://leetcode.com/problems/swim-in-rising-water/",p:"LC",d:"Hard"},{title:"Word Ladder",link:"https://leetcode.com/problems/word-ladder/",p:"LC",d:"Hard"}],
    "Full Week 7 review. Graphs are interview gold — invest time here.",
    ["Graph problems: first identify if it's BFS/DFS/topo/DSU/Dijkstra","Draw the graph before coding for any graph problem","Word Ladder = BFS shortest path on implicit graph"],
    [{type:"video",title:"Graph Problems Full Revision",url:"https://www.youtube.com/results?search_query=graph+problems+full+revision+striver+java",label:"YouTube"},{type:"article",title:"GFG – Graph DS Complete",url:"https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",label:"GFG"}]),

  50: buildDay(8,1,"Advanced Binary Search + Two Pointers","Revisit BS + 2P on harder problems.",
    [{id:"c1",text:"Median of Two Sorted Arrays"},{id:"c2",text:"BS on infinite arrays"},{id:"c3",text:"4Sum problem"},{id:"c4",text:"Subsets & permutations review"}],
    [{title:"Median of Two Sorted Arrays",link:"https://leetcode.com/problems/median-of-two-sorted-arrays/",p:"LC",d:"Hard"},{title:"4Sum",link:"https://leetcode.com/problems/4sum/",p:"LC",d:"Medium"},{title:"Find K-th Smallest Pair Distance",link:"https://leetcode.com/problems/find-k-th-smallest-pair-distance/",p:"LC",d:"Hard"},{title:"Aggressive Cows",link:"https://www.geeksforgeeks.org/aggressive-cows/",p:"GFG",d:"Hard"}],
    "Re-solve Word Ladder (Day 49) — count BFS levels.",
    ["Median 2 arrays: binary search on partition of smaller array","4Sum: sort + two outer loops + two pointers","Aggressive cows: binary search on distance answer space"],
    [{type:"video",title:"Median Two Sorted Arrays Binary Search",url:"https://www.youtube.com/results?search_query=median+two+sorted+arrays+binary+search+java",label:"YouTube"},{type:"article",title:"GFG – Aggressive Cows",url:"https://www.geeksforgeeks.org/aggressive-cows/",label:"GFG"}]),

  51: buildDay(8,2,"Interval Problems – Full Patterns","Interval scheduling, sweep line.",
    [{id:"c1",text:"Interval overlap check"},{id:"c2",text:"Insert interval problem"},{id:"c3",text:"Sweep line algorithm"},{id:"c4",text:"Meeting rooms with heap"}],
    [{title:"Insert Interval",link:"https://leetcode.com/problems/insert-interval/",p:"LC",d:"Medium"},{title:"Meeting Rooms II",link:"https://www.geeksforgeeks.org/find-minimum-number-of-meeting-rooms-required/",p:"GFG",d:"Medium"},{title:"Employee Free Time",link:"https://www.geeksforgeeks.org/employee-free-time/",p:"GFG",d:"Hard"},{title:"Maximum CPU Load",link:"https://www.geeksforgeeks.org/maximum-cpu-load/",p:"GFG",d:"Medium"}],
    "Re-solve Aggressive Cows (Day 50) — write the feasibility function.",
    ["Insert interval: 3 phases — before, overlap, after","Sweep line: events[] with +1 start and -1 end","Meeting rooms II: sort starts, sort ends, compare front of each"],
    [{type:"video",title:"Interval Problems All Patterns Java",url:"https://www.youtube.com/results?search_query=interval+problems+all+patterns+java+DSA",label:"YouTube"},{type:"article",title:"GFG – Interval Scheduling",url:"https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/",label:"GFG"}]),

  52: buildDay(8,3,"Bit Manipulation","Bitwise operators, XOR tricks.",
    [{id:"c1",text:"AND, OR, XOR, NOT, shifts"},{id:"c2",text:"XOR for finding single number"},{id:"c3",text:"Bit masking for subsets"},{id:"c4",text:"Count set bits (Brian Kernighan)"}],
    [{title:"Single Number",link:"https://leetcode.com/problems/single-number/",p:"LC",d:"Easy"},{title:"Number of 1 Bits",link:"https://leetcode.com/problems/number-of-1-bits/",p:"LC",d:"Easy"},{title:"Power of Two",link:"https://leetcode.com/problems/power-of-two/",p:"LC",d:"Easy"},{title:"Subsets via Bitmask",link:"https://leetcode.com/problems/subsets/",p:"LC",d:"Medium"},{title:"Single Number III",link:"https://leetcode.com/problems/single-number-iii/",p:"LC",d:"Medium"}],
    "Re-solve Insert Interval (Day 51) — trace with [[1,3],[6,9]], insert [2,5].",
    ["n & (n-1) removes lowest set bit — use for counting set bits","n & (-n) isolates lowest set bit","XOR: a^a=0 and a^0=a — cancel duplicates"],
    [{type:"video",title:"Bit Manipulation Java DSA Full",url:"https://www.youtube.com/results?search_query=bit+manipulation+java+DSA+complete+striver",label:"YouTube"},{type:"article",title:"GFG – Bit Manipulation",url:"https://www.geeksforgeeks.org/bits-manipulation-important-tactics/",label:"GFG"}]),

  53: buildDay(8,4,"Math & Number Theory","GCD, LCM, prime sieve, modular arithmetic.",
    [{id:"c1",text:"Euclidean GCD — O(log min(a,b))"},{id:"c2",text:"Sieve of Eratosthenes — O(n log log n)"},{id:"c3",text:"Modular arithmetic: (a+b)%m"},{id:"c4",text:"Fast exponentiation mod p"}],
    [{title:"Count Primes",link:"https://leetcode.com/problems/count-primes/",p:"LC",d:"Medium"},{title:"Greatest Common Divisor",link:"https://leetcode.com/problems/find-greatest-common-divisor-of-array/",p:"LC",d:"Easy"},{title:"Ugly Number II",link:"https://leetcode.com/problems/ugly-number-ii/",p:"LC",d:"Medium"},{title:"Reverse Integer",link:"https://leetcode.com/problems/reverse-integer/",p:"LC",d:"Medium"}],
    "Re-solve Single Number III (Day 52) — explain the XOR bit grouping.",
    ["Sieve: mark composites starting from i*i (not 2*i)","GCD with 0: gcd(a,0) = a","Modular arithmetic: apply % at every step to prevent overflow"],
    [{type:"video",title:"Math Number Theory Java DSA",url:"https://www.youtube.com/results?search_query=math+number+theory+java+DSA+primes+GCD",label:"YouTube"},{type:"article",title:"GFG – Sieve of Eratosthenes",url:"https://www.geeksforgeeks.org/sieve-of-eratosthenes/",label:"GFG"}]),

  54: buildDay(8,5,"Matrix Problems","2D grid traversal, matrix rotation.",
    [{id:"c1",text:"Matrix rotation 90° in-place"},{id:"c2",text:"Matrix spiral traversal"},{id:"c3",text:"Set zeroes in matrix"},{id:"c4",text:"Search in sorted matrix"}],
    [{title:"Rotate Image",link:"https://leetcode.com/problems/rotate-image/",p:"LC",d:"Medium"},{title:"Spiral Matrix",link:"https://leetcode.com/problems/spiral-matrix/",p:"LC",d:"Medium"},{title:"Set Matrix Zeroes",link:"https://leetcode.com/problems/set-matrix-zeroes/",p:"LC",d:"Medium"},{title:"Game of Life",link:"https://leetcode.com/problems/game-of-life/",p:"LC",d:"Medium"}],
    "Re-solve Count Primes (Day 53) — verify sieve marks correctly.",
    ["Rotate: transpose then reverse each row","Spiral: maintain top/bottom/left/right boundaries","Set zeroes: use first row/col as markers (O(1) space)"],
    [{type:"video",title:"Matrix Problems Java All Types",url:"https://www.youtube.com/results?search_query=matrix+problems+java+rotate+spiral+striver",label:"YouTube"},{type:"article",title:"GFG – Rotate Matrix",url:"https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",label:"GFG"}]),

  55: buildDay(8,6,"Mixed Practice – Month 2 Hard","Mixed medium-hard problems.",
    [{id:"c1",text:"Combining graph + DP patterns"},{id:"c2",text:"Heap + greedy combinations"},{id:"c3",text:"String + DP combinations"},{id:"c4",text:"Tree + BFS combinations"}],
    [{title:"Pacific Atlantic Water Flow",link:"https://leetcode.com/problems/pacific-atlantic-water-flow/",p:"LC",d:"Medium"},{title:"Surrounded Regions",link:"https://leetcode.com/problems/surrounded-regions/",p:"LC",d:"Medium"},{title:"Minimum Height Trees",link:"https://leetcode.com/problems/minimum-height-trees/",p:"LC",d:"Medium"},{title:"Walls and Gates",link:"https://www.geeksforgeeks.org/multi-source-bfs/",p:"GFG",d:"Medium"}],
    "Re-solve Spiral Matrix (Day 54) — trace 4×4 matrix.",
    ["Pacific Atlantic: reverse flow — BFS from both oceans","Surrounded Regions: BFS from border 'O's, mark safe","Min Height Trees: repeatedly trim leaf nodes"],
    [{type:"video",title:"Multi-source BFS Problems Java",url:"https://www.youtube.com/results?search_query=multi+source+BFS+problems+java+DSA",label:"YouTube"},{type:"article",title:"GFG – Multi Source BFS",url:"https://www.geeksforgeeks.org/multi-source-bfs/",label:"GFG"}]),

  56: buildDay(8,7,"Week 8 REVISION 🔁","Month 2 full review.",
    [{id:"c1",text:"BS hard problems + interval patterns"},{id:"c2",text:"Bit manipulation tricks"},{id:"c3",text:"Matrix traversals"},{id:"c4",text:"Graph hard: bridges, MST, Dijkstra"}],
    [{title:"Re-attempt: Median of Two Sorted Arrays",link:"https://leetcode.com/problems/median-of-two-sorted-arrays/",p:"LC",d:"Hard"},{title:"Re-attempt: Critical Connections",link:"https://leetcode.com/problems/critical-connections-in-a-network/",p:"LC",d:"Hard"},{title:"Re-attempt: Pacific Atlantic",link:"https://leetcode.com/problems/pacific-atlantic-water-flow/",p:"LC",d:"Medium"},{title:"Maximum Frequency Stack",link:"https://leetcode.com/problems/maximum-frequency-stack/",p:"LC",d:"Hard"}],
    "Month 2 done! Major review before Month 3 (DP).",
    ["Month 2 covered Trees, Heap, Graphs, Greedy, Sorting, BS hard","DP in Month 3 will heavily use recursion from Month 1","Log ALL remaining weak areas before starting Week 9"],
    [{type:"video",title:"Month 2 DSA Revision All Topics",url:"https://www.youtube.com/results?search_query=DSA+month+2+revision+graphs+trees+heap+greedy+java",label:"YouTube"},{type:"article",title:"GFG – Graph+Tree+Heap Complete",url:"https://www.geeksforgeeks.org/data-structures/",label:"GFG"}]),

  57: buildDay(9,1,"DP – Intro & 1D Patterns","Ch.15: DP fundamentals, memoization.",
    [{id:"c1",text:"DP vs greedy vs recursion"},{id:"c2",text:"Top-down (memoization) approach"},{id:"c3",text:"Bottom-up (tabulation) approach"},{id:"c4",text:"Identifying overlapping subproblems"}],
    [{title:"Climbing Stairs",link:"https://leetcode.com/problems/climbing-stairs/",p:"LC",d:"Easy"},{title:"House Robber",link:"https://leetcode.com/problems/house-robber/",p:"LC",d:"Medium"},{title:"Coin Change",link:"https://leetcode.com/problems/coin-change/",p:"LC",d:"Medium"},{title:"Minimum Cost Climbing Stairs",link:"https://leetcode.com/problems/min-cost-climbing-stairs/",p:"LC",d:"Easy"}],
    "Re-solve Maximum Frequency Stack (Day 56) — how does the HashMap of stacks work?",
    ["DP state: define what dp[i] represents BEFORE coding","Coin Change: dp[amount] = min(dp[amount-coin]+1) for each coin","House Robber: dp[i] = max(dp[i-1], dp[i-2]+nums[i])"],
    [{type:"video",title:"DP Introduction Java Striver",url:"https://www.youtube.com/results?search_query=dynamic+programming+introduction+java+striver+complete",label:"YouTube"},{type:"article",title:"GFG – DP Introduction",url:"https://www.geeksforgeeks.org/dynamic-programming/",label:"GFG"}]),

  58: buildDay(9,2,"DP – Longest Subsequence Patterns","LIS, LCS classics.",
    [{id:"c1",text:"Longest Increasing Subsequence (LIS)"},{id:"c2",text:"LIS with binary search O(n log n)"},{id:"c3",text:"Longest Common Subsequence (LCS)"},{id:"c4",text:"Print LCS (backtracking dp table)"}],
    [{title:"Longest Increasing Subsequence",link:"https://leetcode.com/problems/longest-increasing-subsequence/",p:"LC",d:"Medium"},{title:"Longest Common Subsequence",link:"https://leetcode.com/problems/longest-common-subsequence/",p:"LC",d:"Medium"},{title:"Russian Doll Envelopes",link:"https://leetcode.com/problems/russian-doll-envelopes/",p:"LC",d:"Hard"},{title:"Longest String Chain",link:"https://leetcode.com/problems/longest-string-chain/",p:"LC",d:"Medium"}],
    "Re-solve Coin Change (Day 57) — tabulation vs memoization.",
    ["LIS: dp[i] = max length ending at i; O(n²) but O(n log n) with BS","LCS: dp[i][j] = LCS of s1[0..i] and s2[0..j]","Russian Doll: sort by width asc, height desc → LIS on heights"],
    [{type:"video",title:"LIS LCS DP Java Striver",url:"https://www.youtube.com/results?search_query=LIS+LCS+dynamic+programming+java+striver",label:"YouTube"},{type:"article",title:"GFG – LIS",url:"https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",label:"GFG"}]),

  59: buildDay(9,3,"DP – Knapsack Patterns","0/1 knapsack and variants.",
    [{id:"c1",text:"0/1 Knapsack — include or exclude"},{id:"c2",text:"Unbounded knapsack (reuse items)"},{id:"c3",text:"Subset sum problem"},{id:"c4",text:"Partition equal subset sum"}],
    [{title:"Partition Equal Subset Sum",link:"https://leetcode.com/problems/partition-equal-subset-sum/",p:"LC",d:"Medium"},{title:"Target Sum",link:"https://leetcode.com/problems/target-sum/",p:"LC",d:"Medium"},{title:"Ones and Zeroes",link:"https://leetcode.com/problems/ones-and-zeroes/",p:"LC",d:"Medium"},{title:"Coin Change II (unbounded)",link:"https://leetcode.com/problems/coin-change-ii/",p:"LC",d:"Medium"}],
    "Re-solve Russian Doll Envelopes (Day 58) — why sort height descending?",
    ["0/1 knapsack: dp[i][w] = max value with i items and weight w","Subset sum = knapsack with value = weight","Partition equal subset: target = sum/2, check if reachable"],
    [{type:"video",title:"Knapsack DP Java All Variants",url:"https://www.youtube.com/results?search_query=knapsack+0+1+unbounded+dp+java+striver",label:"YouTube"},{type:"article",title:"GFG – 0/1 Knapsack",url:"https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",label:"GFG"}]),

  60: buildDay(9,4,"DP – Matrix & Grid Patterns","DP on 2D grids.",
    [{id:"c1",text:"Unique paths on grid"},{id:"c2",text:"Minimum path sum"},{id:"c3",text:"Dungeon Game (reverse DP)"},{id:"c4",text:"Triangle DP (bottom-up)"}],
    [{title:"Unique Paths",link:"https://leetcode.com/problems/unique-paths/",p:"LC",d:"Medium"},{title:"Minimum Path Sum",link:"https://leetcode.com/problems/minimum-path-sum/",p:"LC",d:"Medium"},{title:"Dungeon Game",link:"https://leetcode.com/problems/dungeon-game/",p:"LC",d:"Hard"},{title:"Triangle",link:"https://leetcode.com/problems/triangle/",p:"LC",d:"Medium"}],
    "Re-solve Partition Equal Subset Sum (Day 59) — 1D space optimization.",
    ["Unique paths: dp[i][j] = dp[i-1][j] + dp[i][j-1]","Dungeon: traverse bottom-right to top-left","Triangle: start from bottom row, minimize upward"],
    [{type:"video",title:"Grid DP Problems Java",url:"https://www.youtube.com/results?search_query=grid+dp+problems+java+striver+unique+paths",label:"YouTube"},{type:"article",title:"GFG – Minimum Path Sum",url:"https://www.geeksforgeeks.org/min-cost-path-dp-6/",label:"GFG"}]),

  61: buildDay(9,5,"DP – String Patterns","Edit distance, palindromes.",
    [{id:"c1",text:"Edit Distance (Levenshtein)"},{id:"c2",text:"Longest Palindromic Subsequence"},{id:"c3",text:"Minimum insertions for palindrome"},{id:"c4",text:"Word break problem"}],
    [{title:"Edit Distance",link:"https://leetcode.com/problems/edit-distance/",p:"LC",d:"Medium"},{title:"Longest Palindromic Subsequence",link:"https://leetcode.com/problems/longest-palindromic-subsequence/",p:"LC",d:"Medium"},{title:"Word Break",link:"https://leetcode.com/problems/word-break/",p:"LC",d:"Medium"},{title:"Palindrome Partitioning II",link:"https://leetcode.com/problems/palindrome-partitioning-ii/",p:"LC",d:"Hard"}],
    "Re-solve Dungeon Game (Day 60) — why does reverse DP work here?",
    ["Edit distance: 3 operations — insert, delete, replace","Palindromic subsequence: LPS(s) = LCS(s, reverse(s))","Word break: dp[i] = any dp[j] && dict.contains(s[j..i])"],
    [{type:"video",title:"Edit Distance DP Java",url:"https://www.youtube.com/results?search_query=edit+distance+DP+java+striver",label:"YouTube"},{type:"article",title:"GFG – Edit Distance",url:"https://www.geeksforgeeks.org/edit-distance-dp-5/",label:"GFG"}]),

  62: buildDay(9,6,"DP – Stock & State Machine","Stock problems with DP states.",
    [{id:"c1",text:"Stock buy/sell with cooldown"},{id:"c2",text:"Stock with transaction fee"},{id:"c3",text:"At most k transactions"},{id:"c4",text:"State machine DP design"}],
    [{title:"Best Time Stock with Cooldown",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",p:"LC",d:"Medium"},{title:"Best Time Stock with Fee",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",p:"LC",d:"Medium"},{title:"Best Time Stock IV (k tx)",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",p:"LC",d:"Hard"},{title:"Paint Fence",link:"https://www.geeksforgeeks.org/painting-fence-algorithm/",p:"GFG",d:"Medium"}],
    "Re-solve Word Break (Day 61) — trace with 'leetcode' and dict=[leet, code].",
    ["State machine: define states (hold, sold, rest) explicitly","Cooldown: sold[i] = hold[i-1] + price; hold[i] = max(hold[i-1], rest[i-1]-price)","K transactions: dp[k][i] = max profit with k tx up to day i"],
    [{type:"video",title:"Stock DP State Machine Java",url:"https://www.youtube.com/results?search_query=stock+buy+sell+DP+state+machine+java",label:"YouTube"},{type:"article",title:"GFG – Stock Problems DP",url:"https://www.geeksforgeeks.org/stock-buy-sell-to-maximize-profit/",label:"GFG"}]),

  63: buildDay(9,7,"Week 9 REVISION 🔁","DP 1D + patterns review.",
    [{id:"c1",text:"1D DP: House Robber, Coin Change, LIS"},{id:"c2",text:"2D DP: LCS, Edit Distance, Knapsack"},{id:"c3",text:"Grid DP: Unique Paths, Dungeon"},{id:"c4",text:"Stock DP state machine"}],
    [{title:"Re-attempt: Best Time Stock IV",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",p:"LC",d:"Hard"},{title:"Re-attempt: Edit Distance",link:"https://leetcode.com/problems/edit-distance/",p:"LC",d:"Medium"},{title:"Re-attempt: Palindrome Partitioning II",link:"https://leetcode.com/problems/palindrome-partitioning-ii/",p:"LC",d:"Hard"},{title:"Minimum Falling Path Sum",link:"https://leetcode.com/problems/minimum-falling-path-sum/",p:"LC",d:"Medium"}],
    "Full Week 9 review. DP is the most tested Month 3 topic.",
    ["DP: always define state first, then transition, then base case","Draw a small DP table on paper before coding","Log all DP patterns you're weak on — Week 10 goes harder"],
    [{type:"video",title:"DP Revision All Patterns Striver",url:"https://www.youtube.com/results?search_query=DP+revision+all+patterns+striver+java",label:"YouTube"},{type:"article",title:"GFG – DP Complete Guide",url:"https://www.geeksforgeeks.org/dynamic-programming/",label:"GFG"}]),

  64: buildDay(10,1,"DP – Advanced: Digit DP","Digit DP pattern.",
    [{id:"c1",text:"Digit DP framework (tight constraint)"},{id:"c2",text:"Count numbers with property in range"},{id:"c3",text:"N-Queens backtracking optimization"},{id:"c4",text:"Sudoku solver (backtracking)"}],
    [{title:"Count Numbers with Unique Digits",link:"https://leetcode.com/problems/count-numbers-with-unique-digits/",p:"LC",d:"Medium"},{title:"Numbers At Most N Given Digit Set",link:"https://leetcode.com/problems/numbers-at-most-n-given-digit-set/",p:"LC",d:"Hard"},{title:"Sudoku Solver",link:"https://leetcode.com/problems/sudoku-solver/",p:"LC",d:"Hard"},{title:"N-Queens II",link:"https://leetcode.com/problems/n-queens-ii/",p:"LC",d:"Hard"}],
    "Re-solve Minimum Falling Path Sum (Day 63) — O(1) space version.",
    ["Digit DP: memoize on (position, tight, count) states","Sudoku: try 1-9, check row+col+box, recurse, backtrack","N-Queens: use 3 boolean arrays for row, diag1, diag2"],
    [{type:"video",title:"Digit DP Java Pattern",url:"https://www.youtube.com/results?search_query=digit+dp+java+pattern+explained",label:"YouTube"},{type:"article",title:"GFG – Digit DP",url:"https://www.geeksforgeeks.org/digit-dp-introduction/",label:"GFG"}]),

  65: buildDay(10,2,"DP – Advanced: DP on Trees","Tree DP patterns.",
    [{id:"c1",text:"DP on tree: rerooting technique"},{id:"c2",text:"Tree DP with subtree states"},{id:"c3",text:"Max path sum with DP"},{id:"c4",text:"House Robber on trees"}],
    [{title:"House Robber III (tree DP)",link:"https://leetcode.com/problems/house-robber-iii/",p:"LC",d:"Medium"},{title:"Binary Tree Cameras",link:"https://leetcode.com/problems/binary-tree-cameras/",p:"LC",d:"Hard"},{title:"Distribute Coins in BT",link:"https://leetcode.com/problems/distribute-coins-in-binary-tree/",p:"LC",d:"Medium"},{title:"Max Product of Splitted BT",link:"https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/",p:"LC",d:"Medium"}],
    "Re-solve Sudoku Solver (Day 64) — trace first valid placement.",
    ["Tree DP: return pair (robbed, notRobbed) from each subtree","BT cameras: 3 states per node — no camera, covered, has camera","Distribute coins: |excess| at each node = moves needed"],
    [{type:"video",title:"Tree DP Java Patterns",url:"https://www.youtube.com/results?search_query=tree+DP+java+patterns+house+robber+tree",label:"YouTube"},{type:"article",title:"GFG – DP on Trees",url:"https://www.geeksforgeeks.org/dp-on-trees/",label:"GFG"}]),

  66: buildDay(10,3,"DP – Advanced: Bitmask DP","Bitmask DP for NP-hard.",
    [{id:"c1",text:"Bitmask to represent subsets"},{id:"c2",text:"TSP with bitmask DP"},{id:"c3",text:"Minimum cost to visit all nodes"},{id:"c4",text:"Profile DP on grids"}],
    [{title:"Minimum XOR Sum of Two Arrays",link:"https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/",p:"LC",d:"Hard"},{title:"Shortest Path Visiting All Nodes",link:"https://leetcode.com/problems/shortest-path-visiting-all-nodes/",p:"LC",d:"Hard"},{title:"Stickers to Spell Word",link:"https://leetcode.com/problems/stickers-to-spell-word/",p:"LC",d:"Hard"},{title:"Parallel Courses II",link:"https://leetcode.com/problems/parallel-courses-ii/",p:"LC",d:"Hard"}],
    "Re-solve Binary Tree Cameras (Day 65) — what are the 3 states?",
    ["Bitmask DP: dp[mask] = best result after visiting nodes in mask","Shortest Path All Nodes: BFS + bitmask state","Profile DP: process columns, state = which cells are filled"],
    [{type:"video",title:"Bitmask DP Java Hard Problems",url:"https://www.youtube.com/results?search_query=bitmask+DP+java+TSP+shortest+path",label:"YouTube"},{type:"article",title:"GFG – Bitmask DP",url:"https://www.geeksforgeeks.org/bitmask-dp/",label:"GFG"}]),

  67: buildDay(10,4,"DP – Interval & Game DP","Interval DP, game theory DP.",
    [{id:"c1",text:"Interval DP: solve subproblems on intervals"},{id:"c2",text:"Burst balloons pattern"},{id:"c3",text:"Stone game DP"},{id:"c4",text:"Matrix chain multiplication"}],
    [{title:"Burst Balloons",link:"https://leetcode.com/problems/burst-balloons/",p:"LC",d:"Hard"},{title:"Stone Game",link:"https://leetcode.com/problems/stone-game/",p:"LC",d:"Medium"},{title:"Strange Printer",link:"https://leetcode.com/problems/strange-printer/",p:"LC",d:"Hard"},{title:"Minimum Cost to Merge Stones",link:"https://leetcode.com/problems/minimum-cost-to-merge-stones/",p:"LC",d:"Hard"}],
    "Re-solve Shortest Path Visiting All Nodes (Day 66) — trace BFS levels.",
    ["Burst balloons: think about LAST balloon to burst in range","Interval DP: dp[i][j] = answer for subarray i..j","Stone game: dp[i][j] = max score difference for optimal play"],
    [{type:"video",title:"Burst Balloons Interval DP",url:"https://www.youtube.com/results?search_query=burst+balloons+interval+DP+java+explained",label:"YouTube"},{type:"article",title:"GFG – Interval DP",url:"https://www.geeksforgeeks.org/dynamic-programming-on-intervals/",label:"GFG"}]),

  68: buildDay(10,5,"Advanced Backtracking","Word search, N-Queens, Sudoku hard.",
    [{id:"c1",text:"Word Search II with Trie pruning"},{id:"c2",text:"Expression Add Operators"},{id:"c3",text:"Remove Invalid Parentheses"},{id:"c4",text:"Palindrome Partitioning (backtrack+DP)"}],
    [{title:"Palindrome Partitioning",link:"https://leetcode.com/problems/palindrome-partitioning/",p:"LC",d:"Medium"},{title:"Remove Invalid Parentheses",link:"https://leetcode.com/problems/remove-invalid-parentheses/",p:"LC",d:"Hard"},{title:"Expression Add Operators",link:"https://leetcode.com/problems/expression-add-operators/",p:"LC",d:"Hard"},{title:"Zuma Game",link:"https://leetcode.com/problems/zuma-game/",p:"LC",d:"Hard"}],
    "Re-solve Burst Balloons (Day 67) — trace dp[0][3] for [3,1,5,8].",
    ["Remove Invalid Parens: BFS (level = removals count) is cleaner","Palindrome Partition: precompute isPalin[i][j] with DP","Expression ops: track current running product for precedence"],
    [{type:"video",title:"Hard Backtracking Problems Java",url:"https://www.youtube.com/results?search_query=hard+backtracking+problems+java+DSA",label:"YouTube"},{type:"article",title:"GFG – Backtracking Advanced",url:"https://www.geeksforgeeks.org/backtracking-algorithms/",label:"GFG"}]),

  69: buildDay(10,6,"Week 10 REVISION + Mock Problems","Advanced DP + Backtracking review.",
    [{id:"c1",text:"Digit DP, tree DP, bitmask DP"},{id:"c2",text:"Interval DP, game theory DP"},{id:"c3",text:"Hard backtracking with pruning"},{id:"c4",text:"Identify DP vs greedy vs backtracking"}],
    [{title:"Re-attempt: Burst Balloons",link:"https://leetcode.com/problems/burst-balloons/",p:"LC",d:"Hard"},{title:"Re-attempt: Expression Add Operators",link:"https://leetcode.com/problems/expression-add-operators/",p:"LC",d:"Hard"},{title:"Re-attempt: Remove Invalid Parentheses",link:"https://leetcode.com/problems/remove-invalid-parentheses/",p:"LC",d:"Hard"},{title:"Scramble String",link:"https://leetcode.com/problems/scramble-string/",p:"LC",d:"Hard"}],
    "Full Week 10 review. These are FAANG-level problems.",
    ["You should be aiming for <45 min on medium DP by now","Hard DP: if you can't solve in 45 min, understand the solution deeply","The goal is pattern recognition, not memorization"],
    [{type:"video",title:"Advanced DP Full Revision",url:"https://www.youtube.com/results?search_query=advanced+DP+problems+revision+java+FAANG",label:"YouTube"},{type:"article",title:"GFG – DP Hard Problems",url:"https://www.geeksforgeeks.org/dynamic-programming/",label:"GFG"}]),

  70: buildDay(11,1,"🏆 FINAL DAY – Mock + Revision","Full 70-day plan complete. Time to interview!",
    [{id:"c1",text:"Solve 30 most important problems one more time"},{id:"c2",text:"Verbal explanation practice for all patterns"},{id:"c3",text:"Time complexity analysis for every DS"},{id:"c4",text:"Write pseudocode from memory for core algorithms"}],
    [{title:"Mock: Two Sum",link:"https://leetcode.com/problems/two-sum/",p:"LC",d:"Easy"},{title:"Mock: LRU Cache",link:"https://leetcode.com/problems/lru-cache/",p:"LC",d:"Medium"},{title:"Mock: Word Ladder",link:"https://leetcode.com/problems/word-ladder/",p:"LC",d:"Hard"},{title:"Mock: Burst Balloons",link:"https://leetcode.com/problems/burst-balloons/",p:"LC",d:"Hard"}],
    "Re-solve your top 5 weak areas from the Weak Areas tab — final cleanup.",
    ["In interviews: think aloud, start with brute force, optimize","Always clarify constraints: sorted? duplicates? negative nums?","70 days = foundation. Keep grinding post-plan!"],
    [{type:"video",title:"DSA Mock Interview Practice",url:"https://www.youtube.com/results?search_query=DSA+mock+interview+practice+FAANG+java",label:"YouTube"},{type:"article",title:"LeetCode Top Interview 150",url:"https://leetcode.com/studyplan/top-interview-150/",label:"LC"}]),
};

// ─── Constants ────────────────────────────────────────────────────────────────
const MONTH_CONFIG = [
  { month: 1, name: "Pure Foundation", weeks: [1,2,3,4], days: [1,28], color: "#a78bfa" },
  { month: 2, name: "Core DSA", weeks: [5,6,7,8], days: [29,56], color: "#38bdf8" },
  { month: 3, name: "Advanced Problem Solving", weeks: [9,10,11], days: [57,70], color: "#34d399" },
];
const WEEK_NAMES = {1:"Arrays & Two-Pointer",2:"Strings + Hashing",3:"LL + Stack + Queue",4:"Binary Search + Recursion",5:"Trees & Traversal",6:"Ordered Structures + Greedy",7:"Graph Traversal",8:"Advanced Patterns",9:"DP 1D + Patterns",10:"Advanced DP + Backtracking",11:"Mock Interviews"};
const PLAT_COLOR = { LC:"#FFA116", GFG:"#2F8D46" };
const DIFF_COLOR = { Easy:"#4ade80", Medium:"#fbbf24", Hard:"#f87171" };
const CONF_COLOR = { Low:"#f87171", Medium:"#fbbf24", High:"#4ade80" };
const LABEL_COLOR = { YouTube:"#f87171", GFG:"#2F8D46", LC:"#FFA116" };
const ALL_DAYS = Array.from({length:70},(_,i)=>i+1);

// ─── Storage helpers ──────────────────────────────────────────────────────────
const STORAGE_VERSION = "v1";

function getStorageKey(username) {
  return `dsa70_${STORAGE_VERSION}_${username.toLowerCase().trim()}`;
}

function saveProgress(username, data) {
  try {
    localStorage.setItem(getStorageKey(username), JSON.stringify(data));
    return true;
  } catch(e) {
    console.error("Save failed:", e);
    return false;
  }
}

function loadProgress(username) {
  try {
    const raw = localStorage.getItem(getStorageKey(username));
    return raw ? JSON.parse(raw) : null;
  } catch(e) {
    return null;
  }
}

function listUsers() {
  try {
    const users = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(`dsa70_${STORAGE_VERSION}_`)) {
        users.push(key.replace(`dsa70_${STORAGE_VERSION}_`, ""));
      }
    }
    return users;
  } catch(e) { return []; }
}

// ─── Username Login Screen ────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [name, setName] = useState("");
  const [existingUsers, setExistingUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setExistingUsers(listUsers());
  }, []);

  const handleLogin = (username) => {
    const trimmed = (username || name).trim();
    if (!trimmed) { setError("Please enter your name!"); return; }
    if (trimmed.length < 2) { setError("Name must be at least 2 characters"); return; }
    onLogin(trimmed);
  };

  return (
    <div style={{
      minHeight:"100vh", background:"#060609", display:"flex", alignItems:"center",
      justifyContent:"center", fontFamily:"'JetBrains Mono','Courier New',monospace"
    }}>
      <div style={{width:"100%", maxWidth:440, padding:"0 20px"}}>
        {/* Logo */}
        <div style={{textAlign:"center", marginBottom:36}}>
          <div style={{
            fontSize:13, fontWeight:800, letterSpacing:4,
            background:"linear-gradient(90deg,#a78bfa,#38bdf8,#34d399)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            marginBottom:8
          }}>⚡ B P S KRUTHI</div>
          <div style={{fontSize:22, fontWeight:800, color:"#f1f5f9", marginBottom:6}}>
            70-Day DSA Roadmap
          </div>
          <div style={{fontSize:10, color:"#6b7280", letterSpacing:2}}>
            JAVA · KARUMANCHI · 1 HR / DAY
          </div>
        </div>

        {/* Login box */}
        <div style={{
          background:"#0d0d1a", border:"1px solid #1e1b4b", borderRadius:14,
          padding:"28px 28px"
        }}>
          <div style={{fontSize:10, color:"#a78bfa", letterSpacing:2, marginBottom:4, fontWeight:700}}>
            ENTER YOUR NAME TO CONTINUE
          </div>
          <div style={{fontSize:9, color:"#6b7280", marginBottom:18, lineHeight:1.7}}>
            Your progress saves automatically to this browser under your name.
            Use the same name each time to resume where you left off.
          </div>

          <input
            value={name}
            onChange={e => { setName(e.target.value); setError(""); }}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            placeholder="e.g. Kruthi, kruthi123, ..."
            autoFocus
            style={{
              width:"100%", boxSizing:"border-box",
              background:"#070710", border:`1px solid ${error ? "#f87171" : "#374151"}`,
              borderRadius:8, padding:"11px 14px", color:"#e2e8f0",
              fontFamily:"'JetBrains Mono','Courier New',monospace",
              fontSize:12, outline:"none", marginBottom:error ? 6 : 14
            }}
          />
          {error && <div style={{color:"#f87171", fontSize:9, marginBottom:10}}>{error}</div>}

          <button
            onClick={() => handleLogin()}
            style={{
              width:"100%", padding:"11px", borderRadius:8, border:"none",
              background:"linear-gradient(90deg,#a78bfa,#38bdf8)",
              color:"#000", fontWeight:800, fontSize:11,
              fontFamily:"'JetBrains Mono','Courier New',monospace",
              cursor:"pointer", letterSpacing:1
            }}
          >
            START / RESUME →
          </button>

          {existingUsers.length > 0 && (
            <div style={{marginTop:18}}>
              <div style={{fontSize:8, color:"#6b7280", letterSpacing:2, marginBottom:8}}>
                SAVED PROFILES ON THIS BROWSER
              </div>
              <div style={{display:"flex", flexWrap:"wrap", gap:6}}>
                {existingUsers.map(u => (
                  <button
                    key={u}
                    onClick={() => handleLogin(u)}
                    style={{
                      padding:"5px 12px", borderRadius:20,
                      background:"#070710", border:"1px solid #374151",
                      color:"#9ca3af", cursor:"pointer", fontSize:9,
                      fontFamily:"'JetBrains Mono','Courier New',monospace"
                    }}
                  >
                    👤 {u}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{textAlign:"center", marginTop:18, fontSize:8, color:"#4b5563", lineHeight:1.8}}>
          Progress is saved locally in your browser's storage.<br/>
          Works on Netlify — data persists across sessions on the same device.
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function DSA70Day() {
  const [username, setUsername] = useState(null);
  const [activeDay, setActiveDay] = useState(1);
  const [view, setView] = useState("plan");
  const [checklist, setChecklist] = useState({});
  const [solvedProblems, setSolvedProblems] = useState({});
  const [learnedConcepts, setLearnedConcepts] = useState({});
  const [confidence, setConfidence] = useState({});
  const [weakAreas, setWeakAreas] = useState([]);
  const [newWeak, setNewWeak] = useState("");
  const [expandedWeeks, setExpandedWeeks] = useState({1:true});
  const [saveStatus, setSaveStatus] = useState(""); // "saved" | "saving" | ""

  // ── Load on login ──
  useEffect(() => {
    if (!username) return;
    const saved = loadProgress(username);
    if (saved) {
      setActiveDay(saved.activeDay || 1);
      setChecklist(saved.checklist || {});
      setSolvedProblems(saved.solvedProblems || {});
      setLearnedConcepts(saved.learnedConcepts || {});
      setConfidence(saved.confidence || {});
      setWeakAreas(saved.weakAreas || []);
      setExpandedWeeks(saved.expandedWeeks || {1:true});
    }
  }, [username]);

  // ── Auto-save on any state change ──
  const doSave = useCallback(() => {
    if (!username) return;
    setSaveStatus("saving");
    const ok = saveProgress(username, {
      activeDay, checklist, solvedProblems, learnedConcepts,
      confidence, weakAreas, expandedWeeks
    });
    setSaveStatus(ok ? "saved" : "error");
    setTimeout(() => setSaveStatus(""), 1800);
  }, [username, activeDay, checklist, solvedProblems, learnedConcepts, confidence, weakAreas, expandedWeeks]);

  useEffect(() => {
    if (!username) return;
    const t = setTimeout(doSave, 600); // debounce 600ms
    return () => clearTimeout(t);
  }, [doSave]);

  const day = DSA_PLAN[activeDay];

  const toggleProblem = (d, i) => setSolvedProblems(p => ({...p, [`${d}_p${i}`]:!p[`${d}_p${i}`]}));
  const toggleConcept = (d, cid) => setLearnedConcepts(p => ({...p, [`${d}_${cid}`]:!p[`${d}_${cid}`]}));
  const toggleCheck = (d, id) => setChecklist(p => ({...p, [`${d}_${id}`]:!p[`${d}_${id}`]}));
  const setConf = (d, l) => setConfidence(p => ({...p, [d]:l}));
  const addWeak = () => { if (newWeak.trim()) { setWeakAreas(p=>[...p,{text:newWeak.trim(),date:`Day ${activeDay}`}]); setNewWeak(""); }};
  const removeWeak = i => setWeakAreas(p=>p.filter((_,idx)=>idx!==i));

  const getDayProgress = d => {
    const plan = DSA_PLAN[d]; if (!plan) return 0;
    const total = plan.problems.length + plan.concepts.length + 3;
    let done = 0;
    plan.problems.forEach((_,i)=>{ if(solvedProblems[`${d}_p${i}`]) done++; });
    plan.concepts.forEach(c=>{ if(learnedConcepts[`${d}_${c.id}`]) done++; });
    if(checklist[`${d}_topic`]) done++;
    if(checklist[`${d}_revision`]) done++;
    if(checklist[`${d}_mistakes`]) done++;
    return Math.round((done/total)*100);
  };

  const totalSolved = Object.values(solvedProblems).filter(Boolean).length;
  const totalLearned = Object.values(learnedConcepts).filter(Boolean).length;
  const allProblems = Object.values(DSA_PLAN).reduce((a,d)=>a+d.problems.length,0);
  const allConcepts = Object.values(DSA_PLAN).reduce((a,d)=>a+d.concepts.length,0);
  const overallProgress = Math.round((ALL_DAYS.reduce((s,d)=>s+getDayProgress(d),0))/(70*100)*100);

  const conf = confidence[activeDay];
  const mc = MONTH_CONFIG.find(m=>activeDay>=m.days[0]&&activeDay<=m.days[1]) || MONTH_CONFIG[0];

  if (!username) return <LoginScreen onLogin={setUsername} />;

  return (
    <div style={{minHeight:"100vh",background:"#060609",color:"#e2e8f0",fontFamily:"'JetBrains Mono','Courier New',monospace",display:"flex",flexDirection:"column",fontSize:13}}>
      
      {/* ── HEADER ── */}
      <div style={{background:"linear-gradient(135deg,#0a0a12 0%,#0f0f1a 100%)",borderBottom:"1px solid #1e1b4b",padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
        <div>
          <div style={{fontSize:16,fontWeight:800,letterSpacing:3,background:"linear-gradient(90deg,#a78bfa,#38bdf8,#34d399)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
            ⚡ B P S KRUTHI — 70-DAY DSA ROADMAP
          </div>
          <div style={{fontSize:9,color:"#6b7280",marginTop:2,letterSpacing:2}}>JAVA · KARUMANCHI · 1 HR / DAY · {mc.name.toUpperCase()}</div>
        </div>
        <div style={{display:"flex",gap:18,alignItems:"center",flexWrap:"wrap"}}>
          <MiniStat label="PROBLEMS" value={`${totalSolved}/${allProblems}`} color="#38bdf8"/>
          <MiniStat label="CONCEPTS" value={`${totalLearned}/${allConcepts}`} color="#34d399"/>
          <MiniStat label="WEAK AREAS" value={weakAreas.length} color="#f87171"/>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:14,fontWeight:800,color:"#a78bfa"}}>{overallProgress}%</div>
            <div style={{fontSize:8,color:"#6b7280",letterSpacing:1}}>OVERALL</div>
            <div style={{width:60,height:3,background:"#1e1b4b",borderRadius:2,marginTop:3}}>
              <div style={{width:`${overallProgress}%`,height:"100%",background:"linear-gradient(90deg,#a78bfa,#38bdf8)",borderRadius:2}}/>
            </div>
          </div>
          {/* User + save status */}
          <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:3}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{fontSize:9,color:"#a78bfa",background:"#a78bfa22",padding:"2px 8px",borderRadius:20,border:"1px solid #a78bfa44"}}>
                👤 {username}
              </span>
              <button onClick={()=>{setUsername(null);}} style={{background:"none",border:"1px solid #374151",borderRadius:4,color:"#6b7280",cursor:"pointer",fontSize:8,padding:"2px 6px",fontFamily:"inherit"}}>
                ⎋ SWITCH
              </button>
            </div>
            <div style={{fontSize:8, color: saveStatus==="saved"?"#4ade80":saveStatus==="saving"?"#fbbf24":saveStatus==="error"?"#f87171":"#4b5563", letterSpacing:1}}>
              {saveStatus==="saved"?"✓ SAVED":saveStatus==="saving"?"⟳ SAVING...":saveStatus==="error"?"✗ SAVE FAILED":"● AUTO-SAVE ON"}
            </div>
          </div>
        </div>
      </div>

      {/* ── NAV TABS ── */}
      <div style={{background:"#07070e",borderBottom:"1px solid #1e1b4b",padding:"0 20px",display:"flex",overflowX:"auto",gap:0}}>
        {[["plan","📘 DAILY PLAN"],["tracker","📊 TRACKER"],["roadmap","🗺️ ROADMAP"],["resources","📚 RESOURCES"],["weak","⚠️ WEAK AREAS"]].map(([v,label])=>(
          <button key={v} onClick={()=>setView(v)} style={{background:"none",border:"none",borderBottom:view===v?"2px solid #a78bfa":"2px solid transparent",color:view===v?"#a78bfa":"#6b7280",padding:"10px 14px",cursor:"pointer",fontSize:9,fontFamily:"'JetBrains Mono','Courier New',monospace",letterSpacing:1,fontWeight:view===v?700:400,whiteSpace:"nowrap"}}>
            {label}
          </button>
        ))}
      </div>

      <div style={{display:"flex",flex:1,minHeight:0}}>

        {/* ── SIDEBAR ── */}
        <div style={{width:220,background:"#07070e",borderRight:"1px solid #1e1b4b",overflowY:"auto",padding:"10px 0",flexShrink:0}}>
          {MONTH_CONFIG.map(m=>(
            <div key={m.month}>
              <div style={{padding:"8px 12px 4px",fontSize:8,color:m.color,letterSpacing:2,fontWeight:700,borderTop:m.month>1?"1px solid #1e1b4b":"none",marginTop:m.month>1?6:0}}>
                M{m.month}: {m.name.toUpperCase()}
              </div>
              {m.weeks.map(w=>{
                const wDays = ALL_DAYS.filter(d=>DSA_PLAN[d]&&DSA_PLAN[d].week===w);
                const isExpanded = !!expandedWeeks[w];
                const wProg = wDays.length ? Math.round(wDays.reduce((s,d)=>s+getDayProgress(d),0)/wDays.length) : 0;
                return (
                  <div key={w}>
                    <div onClick={()=>setExpandedWeeks(p=>({...p,[w]:!p[w]}))} style={{display:"flex",alignItems:"center",gap:6,padding:"5px 12px",cursor:"pointer",borderLeft:`2px solid ${isExpanded?m.color:"transparent"}`,background:isExpanded?"#0d0d1a":"transparent"}}>
                      <span style={{fontSize:8,color:isExpanded?m.color:"#4b5563"}}>{isExpanded?"▼":"▶"}</span>
                      <span style={{fontSize:9,color:isExpanded?"#e2e8f0":"#6b7280",flex:1,fontWeight:600}}>W{w}: {WEEK_NAMES[w]}</span>
                      <span style={{fontSize:8,color:wProg>50?m.color:"#6b7280"}}>{wProg}%</span>
                    </div>
                    {isExpanded && wDays.map(d=>{
                      const prog = getDayProgress(d);
                      const isA = d===activeDay;
                      return (
                        <div key={d} onClick={()=>{setActiveDay(d);setView("plan");}} style={{display:"flex",alignItems:"center",gap:7,padding:"4px 12px 4px 22px",cursor:"pointer",background:isA?"#0d0d1a":"transparent",borderLeft:isA?`2px solid ${m.color}`:"2px solid transparent"}}>
                          <div style={{width:14,height:14,borderRadius:3,border:`1px solid ${isA?m.color:prog===100?"#4ade80":"#374151"}`,background:prog===100?"#4ade8022":isA?m.color+"22":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                            {prog===100?<span style={{fontSize:7,color:"#4ade80"}}>✓</span>:<span style={{fontSize:7,color:isA?m.color:"#6b7280"}}>{d}</span>}
                          </div>
                          <div style={{flex:1}}>
                            <div style={{fontSize:9,color:isA?"#e2e8f0":"#9ca3af",lineHeight:1.3}}>{DSA_PLAN[d]?.topic?.split("–")[0]?.trim()}</div>
                            {prog>0&&prog<100&&<div style={{width:"100%",height:2,background:"#1e1b4b",borderRadius:1,marginTop:2}}><div style={{width:`${prog}%`,height:"100%",background:m.color,borderRadius:1}}/></div>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* ── MAIN ── */}
        <div style={{flex:1,overflowY:"auto",padding:"16px 20px"}}>

          {/* ════ DAILY PLAN ════ */}
          {view==="plan" && day && (
            <div>
              <div style={{background:"linear-gradient(135deg,#0d0d1a,#0f0f20)",border:`1px solid ${mc.color}44`,borderRadius:12,padding:"16px 20px",marginBottom:14,display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
                <div>
                  <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:4,flexWrap:"wrap"}}>
                    <span style={{fontSize:8,color:mc.color,background:mc.color+"22",padding:"2px 7px",borderRadius:4,letterSpacing:1}}>DAY {activeDay} OF 70</span>
                    <span style={{fontSize:8,color:"#6b7280",background:"#1e1b4b",padding:"2px 7px",borderRadius:4}}>WEEK {day.week} — {WEEK_NAMES[day.week]}</span>
                    <span style={{fontSize:8,color:"#6b7280",background:"#1e1b4b",padding:"2px 7px",borderRadius:4}}>MONTH {mc.month}</span>
                  </div>
                  <div style={{fontSize:16,fontWeight:800,color:"#f1f5f9",marginBottom:4}}>{day.topic}</div>
                  <div style={{fontSize:9,color:"#9ca3af",lineHeight:1.5}}>📖 {day.bookRef}</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:6}}>
                  <div style={{fontSize:8,color:"#6b7280",letterSpacing:1}}>TODAY'S CONFIDENCE</div>
                  <div style={{display:"flex",gap:5}}>
                    {["Low","Medium","High"].map(l=>(
                      <button key={l} onClick={()=>setConf(activeDay,l)} style={{padding:"3px 9px",borderRadius:20,border:`1px solid ${conf===l?CONF_COLOR[l]:"#374151"}`,background:conf===l?CONF_COLOR[l]+"22":"transparent",color:conf===l?CONF_COLOR[l]:"#6b7280",cursor:"pointer",fontSize:9,fontFamily:"inherit",fontWeight:conf===l?700:400}}>
                        {l}
                      </button>
                    ))}
                  </div>
                  <div style={{fontSize:9,color:"#4ade80"}}>{getDayProgress(activeDay)}% done today</div>
                </div>
              </div>

              {/* 1hr Schedule */}
              <div style={{background:"#0a0a12",border:"1px solid #1e1b4b",borderRadius:8,padding:"10px 14px",marginBottom:14,display:"flex",gap:12,flexWrap:"wrap"}}>
                {[["0:00–0:15","📖 Concepts","Study today's topics"],["0:15–0:45","💻 Practice","Solve problems"],["0:45–0:55","🔁 Revision","Do revision task"],["0:55–1:00","📝 Reflect","Log weak areas"]].map(([t,e,d])=>(
                  <div key={t} style={{flex:1,minWidth:100}}>
                    <div style={{fontSize:9,color:mc.color,fontWeight:700}}>{t}</div>
                    <div style={{fontSize:10,color:"#e2e8f0",fontWeight:600}}>{e}</div>
                    <div style={{fontSize:9,color:"#6b7280"}}>{d}</div>
                  </div>
                ))}
              </div>

              <Sec2 title="🧠 CONCEPTS" color="#a78bfa">
                {day.concepts.map(c=>{
                  const done=!!learnedConcepts[`${activeDay}_${c.id}`];
                  return (
                    <div key={c.id} onClick={()=>toggleConcept(activeDay,c.id)} style={{display:"flex",alignItems:"center",gap:9,padding:"8px 12px",background:done?"#0a0a1a":"#0d0d1a",borderRadius:7,border:`1px solid ${done?"#a78bfa44":"#1e1b4b"}`,cursor:"pointer"}}>
                      <CB checked={done} color="#a78bfa"/>
                      <span style={{fontSize:11,color:done?"#a78bfa":"#e2e8f0",textDecoration:done?"line-through":"none"}}>{c.text}</span>
                      {done&&<span style={{marginLeft:"auto",fontSize:8,color:"#a78bfa"}}>✓</span>}
                    </div>
                  );
                })}
                <CheckRow dayNum={activeDay} id="topic" label="All concepts studied" checklist={checklist} toggle={toggleCheck} color="#a78bfa"/>
              </Sec2>

              <Sec2 title="💻 PROBLEMS" color="#38bdf8">
                {day.problems.map((p,i)=>{
                  const solved=!!solvedProblems[`${activeDay}_p${i}`];
                  return (
                    <div key={i} style={{display:"flex",alignItems:"center",gap:9,padding:"9px 12px",background:solved?"#071520":"#0d0d1a",borderRadius:7,border:`1px solid ${solved?"#38bdf844":"#1e1b4b"}`}}>
                      <div onClick={()=>toggleProblem(activeDay,i)} style={{cursor:"pointer"}}><CB checked={solved} color="#4ade80"/></div>
                      <a href={p.link} target="_blank" rel="noreferrer" style={{flex:1,color:solved?"#6b7280":"#e2e8f0",textDecoration:"none",fontSize:11,textDecorationLine:solved?"line-through":"none"}}>{p.title}</a>
                      <Pill text={p.p} color={PLAT_COLOR[p.p]}/>
                      <Pill text={p.d} color={DIFF_COLOR[p.d]}/>
                    </div>
                  );
                })}
              </Sec2>

              <Sec2 title="🔁 REVISION (0:45–0:55)" color="#fbbf24">
                <div style={{padding:"10px 14px",background:"#0d0d1a",borderRadius:7,border:"1px solid #1e1b4b",fontSize:11,color:"#fde68a",lineHeight:1.7}}>{day.revision}</div>
                <CheckRow dayNum={activeDay} id="revision" label="Revision done" checklist={checklist} toggle={toggleCheck} color="#fbbf24"/>
              </Sec2>

              <Sec2 title="⚠️ COMMON MISTAKES" color="#f87171">
                {day.mistakes.map((m,i)=>(
                  <div key={i} style={{display:"flex",gap:8,padding:"8px 12px",background:"#0d0d1a",borderRadius:7,border:"1px solid #1e1b4b"}}>
                    <span style={{color:"#f87171",flexShrink:0,fontSize:10,marginTop:1}}>!</span>
                    <span style={{fontSize:11,color:"#fca5a5",lineHeight:1.6}}>{m}</span>
                  </div>
                ))}
                <CheckRow dayNum={activeDay} id="mistakes" label="Mistakes reviewed" checklist={checklist} toggle={toggleCheck} color="#f87171"/>
              </Sec2>

              <Sec2 title="📚 RESOURCES (Use if stuck)" color="#c084fc">
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}>
                  {day.resources.map((r,i)=>(
                    <a key={i} href={r.url} target="_blank" rel="noreferrer" style={{padding:"10px 12px",background:"#0d0d1a",border:`1px solid ${LABEL_COLOR[r.label]}33`,borderRadius:8,textDecoration:"none",display:"flex",flexDirection:"column",gap:4}}>
                      <div style={{display:"flex",alignItems:"center",gap:6}}>
                        <span style={{fontSize:11}}>{r.type==="video"?"▶":"📄"}</span>
                        <Pill text={r.label} color={LABEL_COLOR[r.label]}/>
                        <span style={{marginLeft:"auto",fontSize:8,color:"#6b7280"}}>{r.type.toUpperCase()}</span>
                      </div>
                      <div style={{color:"#e2e8f0",fontSize:10,lineHeight:1.4}}>{r.title} ↗</div>
                    </a>
                  ))}
                </div>
              </Sec2>
            </div>
          )}

          {/* ════ TRACKER ════ */}
          {view==="tracker" && (
            <div>
              <div style={{fontSize:13,fontWeight:800,color:"#38bdf8",marginBottom:12,letterSpacing:1}}>📊 70-DAY PROGRESS TRACKER</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:20}}>
                {[{l:"Problems Solved",v:totalSolved,t:allProblems,c:"#38bdf8"},{l:"Concepts Learned",v:totalLearned,t:allConcepts,c:"#a78bfa"},{l:"Weak Areas",v:weakAreas.length,t:null,c:"#f87171"}].map(s=>(
                  <div key={s.l} style={{background:"#0d0d1a",border:"1px solid #1e1b4b",borderRadius:9,padding:"12px 14px"}}>
                    <div style={{fontSize:8,color:"#6b7280",letterSpacing:1,marginBottom:5}}>{s.l.toUpperCase()}</div>
                    <div style={{fontSize:20,fontWeight:800,color:s.c}}>{s.v}{s.t?`/${s.t}`:""}</div>
                    {s.t&&<div style={{height:4,background:"#1e1b4b",borderRadius:2,marginTop:6}}><div style={{width:`${Math.round((s.v/s.t)*100)}%`,height:"100%",background:s.c,borderRadius:2}}/></div>}
                  </div>
                ))}
              </div>
              {MONTH_CONFIG.map(m=>(
                <div key={m.month} style={{marginBottom:20}}>
                  <div style={{fontSize:10,fontWeight:700,color:m.color,letterSpacing:2,marginBottom:8,borderBottom:`1px solid ${m.color}33`,paddingBottom:6}}>
                    MONTH {m.month}: {m.name.toUpperCase()}
                  </div>
                  {m.weeks.map(w=>{
                    const wDays = ALL_DAYS.filter(d=>DSA_PLAN[d]&&DSA_PLAN[d].week===w);
                    return (
                      <div key={w} style={{marginBottom:10}}>
                        <div style={{fontSize:9,color:m.color,marginBottom:5,letterSpacing:1}}>WEEK {w}: {WEEK_NAMES[w].toUpperCase()}</div>
                        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4}}>
                          {wDays.map(d=>{
                            const prog=getDayProgress(d);
                            const isA=d===activeDay;
                            const sc=DSA_PLAN[d].problems.filter((_,i)=>solvedProblems[`${d}_p${i}`]).length;
                            const cc=DSA_PLAN[d].concepts.filter(c=>learnedConcepts[`${d}_${c.id}`]).length;
                            return (
                              <div key={d} onClick={()=>{setActiveDay(d);setView("plan");}} style={{background:isA?m.color+"22":"#0d0d1a",border:`1px solid ${isA?m.color:prog===100?"#4ade8044":"#1e1b4b"}`,borderRadius:7,padding:"7px 6px",cursor:"pointer",textAlign:"center"}}>
                                <div style={{fontSize:9,color:isA?m.color:prog===100?"#4ade80":"#6b7280",fontWeight:isA?800:400}}>D{d}</div>
                                <div style={{fontSize:8,color:"#9ca3af",marginTop:2}}>{cc}c {sc}p</div>
                                <div style={{height:3,background:"#1e1b4b",borderRadius:2,marginTop:4}}>
                                  <div style={{width:`${prog}%`,height:"100%",background:prog===100?"#4ade80":m.color,borderRadius:2}}/>
                                </div>
                                <div style={{fontSize:7,color:prog===100?"#4ade80":"#6b7280",marginTop:2}}>{prog}%</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* ════ ROADMAP ════ */}
          {view==="roadmap" && (
            <div>
              <div style={{fontSize:13,fontWeight:800,color:"#34d399",marginBottom:4,letterSpacing:1}}>🗺️ 70-DAY ROADMAP OVERVIEW</div>
              <div style={{fontSize:9,color:"#6b7280",marginBottom:16}}>Based on your mind map — 3 months, 11 weeks, 1 hr/day</div>
              {MONTH_CONFIG.map(m=>(
                <div key={m.month} style={{background:"#0d0d1a",border:`1px solid ${m.color}44`,borderRadius:12,padding:"14px 18px",marginBottom:14}}>
                  <div style={{fontSize:12,fontWeight:800,color:m.color,marginBottom:10}}>MONTH {m.month}: {m.name.toUpperCase()} (Days {m.days[0]}–{m.days[1]})</div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8}}>
                    {m.weeks.map(w=>{
                      const wDays=ALL_DAYS.filter(d=>DSA_PLAN[d]&&DSA_PLAN[d].week===w);
                      const wProg=wDays.length?Math.round(wDays.reduce((s,d)=>s+getDayProgress(d),0)/wDays.length):0;
                      return (
                        <div key={w} style={{background:"#070710",border:`1px solid ${m.color}22`,borderRadius:8,padding:"10px 12px"}}>
                          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}>
                            <span style={{fontSize:9,fontWeight:700,color:m.color}}>WEEK {w}: {WEEK_NAMES[w]}</span>
                            <span style={{fontSize:9,color:wProg===100?"#4ade80":"#6b7280"}}>{wProg}%</span>
                          </div>
                          <div style={{height:3,background:"#1e1b4b",borderRadius:2,marginBottom:6}}>
                            <div style={{width:`${wProg}%`,height:"100%",background:m.color,borderRadius:2}}/>
                          </div>
                          <div style={{fontSize:8,color:"#9ca3af",lineHeight:1.6}}>
                            {wDays.map(d=>{
                              const p=getDayProgress(d);
                              return <span key={d} onClick={()=>{setActiveDay(d);setView("plan");}} style={{cursor:"pointer",marginRight:6,color:p===100?"#4ade80":d===activeDay?m.color:"#6b7280",fontWeight:d===activeDay?700:400}}>D{d}</span>;
                            })}
                          </div>
                          <div style={{fontSize:8,color:"#6b7280",marginTop:5}}>
                            {wDays.length} days · {wDays.reduce((s,d)=>s+DSA_PLAN[d].problems.length,0)} problems
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ════ RESOURCES ════ */}
          {view==="resources" && (
            <div>
              <div style={{fontSize:13,fontWeight:800,color:"#c084fc",marginBottom:4,letterSpacing:1}}>📚 ALL RESOURCES</div>
              <div style={{fontSize:9,color:"#6b7280",marginBottom:12}}>Curated for every day. Watch YouTube when stuck, read GFG for theory, grind LeetCode for practice.</div>
              {MONTH_CONFIG.map(m=>(
                <div key={m.month}>
                  <div style={{fontSize:9,color:m.color,letterSpacing:2,fontWeight:700,marginBottom:8,marginTop:12}}>{`MONTH ${m.month}: ${m.name.toUpperCase()}`}</div>
                  {m.weeks.map(w=>{
                    const wDays=ALL_DAYS.filter(d=>DSA_PLAN[d]&&DSA_PLAN[d].week===w);
                    return (
                      <div key={w} style={{marginBottom:12}}>
                        <div style={{fontSize:8,color:"#6b7280",marginBottom:6,letterSpacing:1}}>WEEK {w}: {WEEK_NAMES[w]}</div>
                        {wDays.map(d=>{
                          const plan=DSA_PLAN[d];
                          return (
                            <div key={d} style={{marginBottom:8}}>
                              <div style={{fontSize:8,color:m.color,marginBottom:4}}>Day {d} — {plan.topic}</div>
                              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
                                {plan.resources.map((r,i)=>(
                                  <a key={i} href={r.url} target="_blank" rel="noreferrer" style={{padding:"8px 10px",background:"#0d0d1a",border:`1px solid ${LABEL_COLOR[r.label]}33`,borderRadius:7,textDecoration:"none",display:"flex",gap:6,alignItems:"center"}}>
                                    <span style={{fontSize:10}}>{r.type==="video"?"▶":"📄"}</span>
                                    <Pill text={r.label} color={LABEL_COLOR[r.label]}/>
                                    <span style={{color:"#e2e8f0",fontSize:9,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.title} ↗</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* ════ WEAK AREAS ════ */}
          {view==="weak" && (
            <div>
              <div style={{fontSize:13,fontWeight:800,color:"#f87171",marginBottom:4,letterSpacing:1}}>⚠️ WEAK AREA TRACKER</div>
              <div style={{fontSize:9,color:"#6b7280",marginBottom:14}}>Log anything you struggle with. Review every revision day before next week.</div>
              <div style={{display:"flex",gap:7,marginBottom:14}}>
                <input value={newWeak} onChange={e=>setNewWeak(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addWeak()} placeholder='e.g. "Sliding window shrink condition"' style={{flex:1,background:"#0d0d1a",border:"1px solid #374151",borderRadius:7,padding:"8px 12px",color:"#e2e8f0",fontFamily:"'JetBrains Mono','Courier New',monospace",fontSize:10,outline:"none"}}/>
                <button onClick={addWeak} style={{padding:"8px 14px",background:"#f87171",border:"none",borderRadius:7,color:"#000",cursor:"pointer",fontFamily:"inherit",fontSize:10,fontWeight:700}}>+ ADD</button>
              </div>
              {weakAreas.length===0
                ? <div style={{textAlign:"center",padding:"32px",color:"#6b7280",fontSize:11}}>🎯 No weak areas yet. You'll discover them as you solve.</div>
                : <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:16}}>
                    {weakAreas.map((w,i)=>(
                      <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"9px 12px",background:"#0d0d1a",border:"1px solid #f8717122",borderRadius:8}}>
                        <span style={{color:"#f87171",fontSize:11}}>⚡</span>
                        <span style={{flex:1,fontSize:10,color:"#fca5a5"}}>{w.text}</span>
                        <span style={{fontSize:8,color:"#6b7280"}}>{w.date}</span>
                        <button onClick={()=>removeWeak(i)} style={{background:"none",border:"none",color:"#6b7280",cursor:"pointer",fontSize:14}}>×</button>
                      </div>
                    ))}
                  </div>
              }
              <div style={{background:"#0a0a12",border:"1px solid #1e1b4b",borderRadius:9,padding:"12px 14px"}}>
                <div style={{fontSize:9,fontWeight:700,color:"#fbbf24",marginBottom:8}}>💡 FIX WEAK AREAS (REPEAT THIS CYCLE)</div>
                {["Re-read just that concept in Karumanchi (10 min max)","Find 2 GFG articles explaining it differently","Solve 3 easy problems specifically on that pattern","Teach it back to yourself — write pseudocode from memory","Revisit after 2 days with a completely fresh mind"].map((t,i)=>(
                  <div key={i} style={{fontSize:10,color:"#9ca3af",padding:"4px 0",display:"flex",gap:8}}>
                    <span style={{color:"#fbbf24"}}>{i+1}.</span>{t}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Sec2({title,color,children}){
  return (
    <div style={{marginBottom:14}}>
      <div style={{fontSize:9,fontWeight:700,color,letterSpacing:2,marginBottom:6}}>{title}</div>
      <div style={{display:"flex",flexDirection:"column",gap:5}}>{children}</div>
    </div>
  );
}
function CB({checked,color}){
  return (
    <div style={{width:15,height:15,borderRadius:3,flexShrink:0,border:`2px solid ${checked?color:"#374151"}`,background:checked?color:"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>
      {checked&&<span style={{color:"#000",fontSize:8,fontWeight:900}}>✓</span>}
    </div>
  );
}
function CheckRow({dayNum,id,label,checklist,toggle,color}){
  const checked=!!checklist[`${dayNum}_${id}`];
  return (
    <div onClick={()=>toggle(dayNum,id)} style={{display:"flex",alignItems:"center",gap:9,padding:"7px 11px",background:checked?"#0a0a1a":"#0d0d1a",borderRadius:7,border:`1px solid ${checked?color+"44":"#1e1b4b"}`,cursor:"pointer",marginTop:2}}>
      <CB checked={checked} color={color||"#4ade80"}/>
      <span style={{fontSize:10,color:checked?color:"#6b7280"}}>{label}</span>
    </div>
  );
}
function Pill({text,color}){
  return <span style={{padding:"1px 5px",borderRadius:3,background:color+"22",color,fontSize:8,fontWeight:700}}>{text}</span>;
}
function MiniStat({label,value,color}){
  return (
    <div style={{textAlign:"center"}}>
      <div style={{fontSize:14,fontWeight:800,color}}>{value}</div>
      <div style={{fontSize:7,color:"#6b7280",letterSpacing:1,marginTop:1}}>{label}</div>
    </div>
  );
}