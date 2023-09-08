import re
intro = 'Testing Regex '
regex = '^\[(\d{4}|\d{2})(\/|-)\d{2}(\/|-)\d{2} \d{2}:\d{2}(:\d{2})?]'
timestamps = ['[2023-09-08 12:22:10]','2023-09-08 12:22:10','[2023-09-08 12:22]',
'[23-09-08 12:22:10]','[23-09-08 12:22]']
stars = '*' * (len(intro)+len(regex))
print ('%s\n%s%s\n%s' % (stars, intro, regex, stars))

for i in range (len(timestamps)):
    print ('Testing %s: ' % (timestamps[i]), end = '')
    print ('Passed' if re.search (regex, timestamps[i]) != None else 'Failed')