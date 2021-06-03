def twoSum(list, target):
  newList = list.copy()
  newList.sort()
  print(newList)
  print(list)
  left = 0
  right = len(newList) - 1
  for eye in newList:
    if newList[left] + newList[right] == target:
      return [list.index(newList[left]), list.index(newList[right])]
    elif newList[left] + newList[right] > target:
      right -= 1
    elif newList[left] + newList[right] < target:
      left += 1
    else:
      return []

# def twoSum(list, target):
#   for eye in range(len(list) - 1):
#     firstNum = list[eye]
#     print(eyeCounter, list[eyeCounter])
#     for jay in range(eye + 1, len(list)):
#       secondNum = list[jay]
#       print('eye, jay', firstNum, secondNum)
#       if firstNum + secondNum == target:
#         return [list.index(firstNum), list.index(secondNum)]

result = twoSum([2, 4, 3, 1, 2], 7)
print(result)
