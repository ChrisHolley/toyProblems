# class Solution:
#     def restoreString(self, s: str, indices: List[int]) -> str:
#       return 'yes'
# class Solution:
def restoreString( s, indices) -> str:
    res = [''] * len(s)
    for index, char in enumerate(s):
        res[indices[index]] = char
    return "".join(res)

restoreString('hi', [1])