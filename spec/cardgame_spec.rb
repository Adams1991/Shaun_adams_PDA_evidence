require("minitest/autorun")
require_relative("../testing_task_2.rb")


class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("Hearts", 1)
    @card2 = Card.new("Spades", 5)
    @cards = [@card1, @card2]

  end

  def test_checkforAce
    result = CardGame.checkforAce(@card1)
    assert_equal(true, result)
  end


  def test_highest_card
    result = CardGame.highest_card(@card1, @card2)
    assert_equal(@card2, result)
  end

  def test_cards_total
    result = (CardGame.cards_total(@cards))
    assert_equal( "You have a total of 6", result)
  end

end
