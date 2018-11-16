require_relative('../trial')

require("minitest/autorun")

class TestTrial < MiniTest::Test

  def setup
    @testarray = [2,5,3,4]
  end

  def test_order_numbers()
    expected = [2, 3, 4, 5]
    result = Trial.order_numbers(@testarray)
    assert_equal(expected, result)
  end

end
