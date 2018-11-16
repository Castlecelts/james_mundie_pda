require_relative('../testing_task_2')
require_relative('../card')

require("minitest/autorun")

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("hearts", 2)
    @card2 = Card.new("spades", 10)
    @card3 = Card.new("clubs", 1)
    @card4 = Card.new("spades", 10)

    @cards = [ @card1, @card2]
    @cards2 = [ ]
    @game1 = CardGame.new()
  end

  def test_checkforace__true()
    expected = true
    result = @game1.checkforace(@card3)
    assert_equal(expected, result)
  end

  def test_checkforace__false()
    expected = false
    result = @game1.checkforace(@card2)
    assert_equal(expected, result)
  end

  def test_highest_card__card1_higher()
    expected = @card1
    result = @game1.highest_card(@card1, @card3)
    assert_equal(expected, result)
  end

  def test_highest_card__card2_higher()
    expected = @card2
    result = @game1.highest_card(@card1, @card2)
    assert_equal(expected, result)
  end

  def test_highest_card__cards_equal()
    expected = @card2
    result = @game1.highest_card(@card4, @card2)
    assert_equal(expected, result)
  end

  def test_card_total__array_of_2()
    expected = "You have a total of 12"
    result = CardGame.cards_total(@cards)
    assert_equal(expected, result)
  end

  def test_card_total__empty_array()
    expected = "You have a total of 0"
    result = CardGame.cards_total(@cards2)
    assert_equal(expected, result)
  end

end
