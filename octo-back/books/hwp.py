import olefile

def conversion(file):
    f = olefile.OleFileIO(file)
    e = f.openstream("PrvText").read()
    d = e.decode("UTF-16")
    return d

def extract(text, *nums):
    for num in nums:
        pass
