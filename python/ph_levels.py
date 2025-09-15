PH = int(input('Enter a PH number (1-14)'))

if PH > 7:
    print('Basic')
elif PH < 7:
    print('Acidic')
elif PH == 7:
    print('Neutral')
else:
    print('This is not a valid number (1-14 ONLY)')