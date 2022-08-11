{assign var="title" value="Bob"}

<html>
<head>
    <title>{$title|default:'Default title'}</title>
    <link rel="stylesheet" href="/static/css/style.min.css">
    <script defer src="/static/js/main.js"></script>
    <script src="/static/js/jquery.min.js"></script>
</head>
<body>
{include file='page_header.tpl'}

Content

{include file='page_footer.tpl'}
</body>
</html>