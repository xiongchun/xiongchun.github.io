---
title: bit、Byte、KB、MB、GB... 之间的关系
authors: [xiongchun]
tags: [技术杂文]
date: 2020-2-18
hide_table_of_contents: false
slug: bit-byte-kb-etc
---
bit、Byte、KB、MB、GB... 之间的关系，必须记住的几个计算机存储容量换算单位。

<!--truncate-->

- bit（比特位，简写 b）  
  是计算机数据存储最小的单位，二进制中，0或者1就是一个位(比特位)bit。

- Byte (字节，简写：B)  
  是计算机信息技术用于计量存储容量的一种计量单位，通常情况下一字节等于8位，也就是：1Byte = 8bit = 1B = 8b。

  <img width="300"
  src={require('/resources/doc/53-byte.png').default}
  alt="byte" />

:::tip 字符与字节的关系
字符：Character，在计算机和电信技术中，一个字符是一个单位的字形或符号的基本信息。不同字符集编码下一个字符占用的字节数不同。UTF-8 编码：一个英文字符或英文标点占 1 个字节；一个中文字符或中文标点占 3 个字节。Unicode 编码：所有字符都占 2 个字节。
:::

- KB (Kibibyte，千字节)  
  1KB = 1024B = 2^10B

- MB (Mebibyte，百万字节，兆字节，简称“兆”)  
  1MB = 1024KB

- GB (Gibibyte，十亿字节，吉字节，又称“千兆”)  
  1GB = 1024MB

- TB (Tebibyte，万亿字节，太字节)  
  1TB = 1024GB

- PB (Pebibyte，千万亿字节，拍字节)  
  1PB = 1024TB

- EB (Exbibyte，百亿亿字节，艾字节)  
  1EB = 1024PB

- ZB (Zebibyte，十万亿亿字节，泽字节)  
  1ZB = 1024EB

- YB (Yobibyte，一亿亿亿字节，尧字节)  
  1YB = 1024ZB