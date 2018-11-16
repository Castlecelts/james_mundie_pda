### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby


require_relative('card.rb')
class CardGame

#checkforAce contains a capital in its naming, should be all lower case with _ seperating words
#card.value = 1 should be == as you are comparing

  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

#spelling error, dif should be def.
#missing , should read highest_card(card1, card2)
#card.name function does not exist. only suit and value are defined in the card class
#doesn't deal with the case when both cards have the same value

  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
#this end is out of place, should be the last line of code to close the CardGame class
end

#total variable needs to be set = to something, 0 in this case
#return line is inside the for loop, this should really sit outside the for loop but within the function
#self. not required, would run without

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end


```
