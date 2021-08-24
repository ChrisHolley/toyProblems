def longest_substring_with_k_distinct(str1, k):
  tracker = {}
  longest_substring = 0
  current_substring_len = 0
  current_substring = ''

  for idx, char in enumerate(str1):
    if char in tracker:
      tracker[char] += 1
      current_substring_len += 1
      current_substring += char

    else:
      tracker[char] = 1
      current_substring_len += 1
      current_substring += char

    while len(tracker) > k:
      current_substring_len -= 1
      tracker[current_substring[0]] -= 1
      if tracker[current_substring[0]] == 0:
        del tracker[current_substring[0]]
      current_substring = current_substring.replace(current_substring[0], '', 1)
      print(tracker)
      print(current_substring)
    if current_substring_len > longest_substring:
      longest_substring = current_substring_len

  return longest_substring




# Example 1:
# Input: String="araaci", K=2
# Output: 4
# Explanation: The longest substring with no more than '2' distinct characters is "araa".
print(longest_substring_with_k_distinct('araaci', 2))

# Example 2:
# Input: String="araaci", K=1
# Output: 2
# Explanation: The longest substring with no more than '1' distinct characters is "aa".
print(longest_substring_with_k_distinct('araaci', 1))

# Example 3:
# Input: String="cbbebi", K=3
# Output: 5
# Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
print(longest_substring_with_k_distinct('cbbebi', 3))