def disemvowel(str: str):
  vowelDict = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1}
  str = list(str)
  print(str)
  for idx, char in reversed(list(enumerate(str))):
    if vowelDict.get(char) == True:
      str.pop(idx)
  return ''.join(str)

print(disemvowel('hello'))