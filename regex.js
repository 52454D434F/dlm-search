var emailRegex = /[0-9 -()+]+$/;

var testr = /<(.+)>\s(.*)/;

var test = /<(.+)>\s*(?:<!\[CDATA\[)?\s*(.*)\s*(?:]]>)?\s*<\/\1>/;

var test2 = /<title>([aA-zZ 0-9/\-".]+)<\/title>\n?.*<link>([aA-zZ 0-9://.]+)<\/link>\n?.*/;

var test2 = /<title>(.+)<\/title>\n.+<link>(.+)<\/link>\n.+\n.+\n.+\n.+<pubDate>(.+)<\/pubDate>\n.+\n.+<group>(.+)<\/group>/;