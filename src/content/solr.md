# Solr

# 介紹

1. 基於 Apache Lucene 構建的開源搜索平台 (全文檢索)
2. Features 
    1. 支援多種文件格式: pdf, html, word…
    2. 結構化搜索、方便優化搜尋 index
    3. 分散式

# **架構**

1. **Core**：
    1. 類似資料庫或索引單位
    2. 在傳統 Solr 部署中，Core 是索引和配置的基本單位，包含配置文件、schema 和索引數據
2. **Collection**：
    1. 類似資料表
    2. 在 SolrCloud 模式中，Collection 是邏輯索引的概念，一個 Collection 可能分佈在多個Solr節點上
3. **Shard：**
    1. 把資料切成很多塊
    2. Collection 的一個分片，包含索引的一部分數據，通過分片實現水平擴展
4. **Replica**：
    1. 備份跟分流讀取
    2. 分片的一個複本，用於實現高可用性和負載均衡
        1. Leader：處理寫入（新增、修改、刪除），其他 Replica 跟著同步 Leader 的資料
        2. Follower：同步 Leader 的變化，主要處理查詢

# 傳統 Solr vs. SolrCloud

 SolrCloud 是 Solr 的分散式架構模式，提供自動負載均衡、高可用性和水平擴展能力

1. 透過 ZooKeeper 集中管理配置所有節點（不用每個節點獨立配置）
2. 支援自動分片
3. 提供備援機制
4. 使用 Collection 代替 Core 作為邏輯索引單位
5. 內建負載平衡

# Index & Search

*TODO*

# **分析器(Analyzer)**

- 分詞器 + 過濾器的總稱
- 文本→分詞器→詞條流→過濾器1→過濾器2→...→最終詞條流
- 提高搜索效率、準確度、智能搜尋相關內容

1. **分詞器(Tokenizer)**
    1. 把句子分解成單獨的字或詞
    2. 輸入: "我喜歡吃蘋果和香蕉" 分詞後: ["我", "喜歡", "吃", "蘋果", "和", "香蕉"]
2. **過濾器(Filter)** 
    1. 對切好的詞進行進一步處理
    2. StopFilter: 輸入 ⇒ ["我", "喜歡", "吃", "蘋果", "和", "香蕉"] 過濾後: ["喜歡", "吃", "蘋果", "香蕉"] (移除了常見但不重要的"我"和"和")
    3. Synonym Filter ⇒ 輸入: ["喜歡", "吃", "蘋果", "香蕉"] 過濾後: ["喜歡", "吃", "蘋果", "水果", "香蕉", "水果"] (添加了同義詞"水果")

## **managed-schema.xml**

1. 由 Solr 自動管理
2. 需要透過 Schema API 修改

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<schema name="default-config" version="1.6">
    <!-- 欄位類型定義 -->
    <fieldType name="string" class="solr.StrField" sortMissingLast="true" docValues="true" />
    <fieldType name="text_general" class="solr.TextField" positionIncrementGap="100">
        <analyzer type="index">
            <!-- 分詞器和過濾器配置 -->
        </analyzer>
        <analyzer type="query">
            <!-- 分詞器和過濾器配置 -->
        </analyzer>
    </fieldType>
    
    <!-- 欄位定義 -->
    <field name="id" type="string" indexed="true" stored="true" required="true" multiValued="false" />
    <field name="title" type="text_general" indexed="true" stored="true" />
    
    <!-- 動態欄位 -->
    <dynamicField name="*_txt" type="text_general" indexed="true" stored="true" />
    
    <!-- 唯一鍵 -->
    <uniqueKey>id</uniqueKey>
    
    <!-- 複製欄位 -->
    <copyField source="title" dest="text" />
</schema>
```

## **solrconfig.xml**

*TODO*

## Ref.

https://solr.apache.org/guide/solr/latest/getting-started/solr-tutorial.html