import numpy as np
import pandas as pd
# import pandasql
import csv
from collections import defaultdict
from pprint import pprint


CSVFILE = 'data/us.csv'


def sample_csv(filename):
    import pandas
    import random

    # filename = "data.txt"
    n = sum(1 for line in open(filename)) - 1 #number of records in file (excludes header)
    s = 1000 #desired sample size
    skip = sorted(random.sample(xrange(1,n+1),n-s)) #the 0-indexed header will not be included in the skip list
    df = pandas.read_csv(filename, skiprows=skip)

    # with open('sample_'+ filename, 'wb') as sampledcsvfile:
    #     writer = csv.writer(sampledcsvfile, delimiter=',')
    #     sampledcsvfile.write(df.to_csv())
    df.to_csv('sample_'+filename)


    # with open(SAMPLE_FILE, 'wb') as output:
    # output.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    # output.write('<osm>\n  ')

    # # Write every nth top level element
    # for i, element in enumerate(get_element(OSM_FILE)):
    #     if i % 10 == 0: # change number after modulo to get different sample.osm characteristics
    #         output.write(ET.tostring(element, encoding='utf-8'))

    # output.write('</osm>')

# def parse_state_IDs(filename):

# def fix_map_data(filename):

# 	map_data = pd.read_csv(filename)

# 	for i in map_data["STATE"]:
# 		map_data["StateID"] = map_data[(map_data["StateID"] == i)]
# 		df = df.fillna(0)
#   	return map_data

#     with open('updated_'+ name, 'wb') as cleancsvfile:
#         cleanwriter = csv.writer(cleancsvfile, delimiter=',')
#         for row in result:

#     return cleancsvfile


#     """
# Parses CSV file from [http://mydatamaster.com/wp-content/files/streetsuffix.zip]
# Provides a `SuffixTable` class to convert suffix strings, lower-cased, into the
# full suffix.
# """


# CSVFILE = 'data/us.csv'

# def parse_states_csv(filename):
#     """ parses the CSV file and returns a one-to-many dictionary """
#     states = defaultdict(set)
#     with open(filename, 'rb') as csvfile:
#         csvfile.next()
#         reader = csv.reader(csvfile, delimiter=',')
#         for row in reader:
#             states = row[0].lower().strip()
#             aliases = [alias.lower() for alias in row[1:]]
#             states[state].update(aliases)
#     for key in states:
#         states[key] = list(states[key])
#     return dict(states)

# class StateTable(object):
#     """ main class module, provides `has_state` and `convert` methods """
#     def __init__(self):
#         states_dict = parse_states_csv(CSVFILE)
#         self.states = states_dict.keys()
#         self.state_table = {}
#         for key in states_dict:
#             for abbreviation in states_dict[key]:
#                 self.state_table[abbreviation] = key
#         self.state_table = dict(self.state_table.items())

#     def has_state(self, state):
#         """ returns if the suffix is present in the table """
#         return state.lower() in self.state_table

#     def convert(self, state):
#         """ converts a suffix string into the full suffix """
#         return self.state_table[state]

#     def __str__(self):
#         return pprint(self.state_table)

if __name__ == '__main__':
    # st = StateTable()
    # pprint(st.suffix_table)
    sample_csv("prosperLoanData.csv")