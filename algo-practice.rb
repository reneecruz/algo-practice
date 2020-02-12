# Write a method that takes in a sentence string and returns the sentence with the order of the characters
# in each word reversed. Note that we need to reverse the order of character
# in the words, do not reverse the order of words in the sentence


def reverse_letters(sentence_string)
    array = sentence_string.split(" ")
    new_array = array.map do |word| 
        word.reverse
    end
    new_array.join(" ")   
end


p reverse_letters("Rene is cool") # "looc si eneR"
p reverse_letters("Brian is not cool") # "looc not si nairB"