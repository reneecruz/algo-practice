# Write a method that takes in a sentence string and returns the sentence with the order of the characters
# in each word reversed. Note that we need to reverse the order of character
# in the words, do not reverse the order of words in the sentence


# def reverse_letters(sentence_string)
#     array = sentence_string.split(" ")
#     new_array = array.map do |word| #O(n)
#         word.reverse O(n)    O(n^2)
#     end
#     new_array.join(" ")   
# end
# def reverse_letters(sentence_string)
#     i = 0
#     new_string = ""
#     while i < sentence_string.length  #O(N)
#         character = sentence_string[i]
#         new_string = character + new_string
#         i += 1
#     end
#     new_string
# end

def reverse_letters(sentence_string)
    sentence_string.reverse
end



p reverse_letters("Rene is cool") # "looc si eneR"
p reverse_letters("Brian is not cool") # "looc not si nairB"