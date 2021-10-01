l = ['a', 'v', 'd', 'r', 'g', '1', 'j', 'b']
map = {
  'a': 'A',
  'b': 'B',
  'c': 'C',
  'd': 'D',
}

result = []

for char in l:
  if char in map:
    result.append(map[char])
  else:
    result.append(char)


# m = [e.upper() if e >= 'a' and e <= 'd' else e for e in l]
