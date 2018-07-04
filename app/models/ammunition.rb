class Ammunition < Weapon

  def as_json(options={})
    # as_json Coerces self to a hash for JSON encoding.
    # https://apidock.com/rails/ActiveResource/Base/as_json
    super(options.merge({ methods: :type }))
  end
  
end
