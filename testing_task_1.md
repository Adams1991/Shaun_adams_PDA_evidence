### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) # should be self.checkforAce
    if card.value = 1  #the conditional should have a "==" not a "="
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #misspelling of def and no comma between parameters. Should also be self.highest_card.
  if card1.value > card2.value
    return card.name # there's no card variable or name reader. should be card1
  else
    card2
  end
end
end  # shouldn't be an end here

def self.cards_total(cards)
  total # this variable needs to be defined by "= 0"
  for card in cards
    total += card.value
    return "You have a total of" + total #the return should be outside the loop. Also can't add an Int to a String like this need string interpolation to do this.
  end
end

#no end closing off class

```
