

from random import randint
 
class  WordFinder:
    """Word Finder: finds random words from a dictionary."""

    def __init__(self, path):
         
        self.attrlst = self.readfile(open(path))    
        self.lgth = len(self.attrlst) 
        print(f'{self.lgth} word read')


    def random(self):
        rand = randint(0, self.lgth-1)
        return self.attrlst[rand].strip()

    def readfile(self, file):
        return [line for line in file]


class SpecialWordFinder(WordFinder):
    """Special Word Finder: finds random words from a dictionary and ignores comments or blank lines"""

    def readfile(self, file):
        return [line for line in file if not line.strip().startswith('#') and bool(line.strip())]
