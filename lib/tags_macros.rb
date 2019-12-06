module TagsMacro
    Redmine::WikiFormatting::Macros.register do
      desc "Adds a tags to the issue page:\n\n" +
        "<pre>\n" +
        "{{tags(tag1 tag2)}}\n" +
        "</pre>"
      macro :tags, :parse_args => false do |obj, args, text|
        o = args
        if text.present?
            o << ' '
            o << text
        end
        content_tag('div', o, :class => "tags")
      end
    end
end