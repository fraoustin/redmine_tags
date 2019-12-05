require 'redmine'
class TagsApplicationHooks < Redmine::Hook::ViewListener
  def view_layouts_base_html_head(context = {})
    # beware of http://www.redmine.org/issues/3935
    return javascript_include_tag('tags.js', :plugin => 'redmine_tags') +
    stylesheet_link_tag("tags.css", :plugin => "redmine_tags", :media => "all")
  end
end

