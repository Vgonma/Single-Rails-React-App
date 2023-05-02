# frozen_string_literal: true

json.array! @greetings, partial: 'greetings/greeting', as: :greeting
