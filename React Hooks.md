# 1. **基本フック**

### ① `useState`

**用途:** 状態を管理する  
**具体例:**

- カウンターの数値
    
- 入力フォームの値
    
- モーダルの開閉状態
    

```javascript
const [isOpen, setIsOpen] = useState(false);
<button onClick={() => setIsOpen(!isOpen)}>開閉</button>
```

---

### ② `useEffect`

**用途:** 副作用の処理  
**具体例:**

- APIからデータを取得して画面に表示
    
- WebSocketやイベントリスナーの登録・解除
    
- 外部ライブラリの初期化
    

```javascript
useEffect(() => {
  fetch("/api/data")
    .then(res => res.json())
    .then(setData);
}, []); // マウント時のみ実行
```

---

### ③ `useContext`

**用途:** グローバル状態やテーマの参照  
**具体例:**

- ユーザー情報（ログイン情報）を複数コンポーネントで共有
    
- ダークモードのテーマ切替
    

```javascript
const theme = useContext(ThemeContext);
<div style={{ background: theme.background }}>Hello</div>
```

---

### ④ `useReducer`

**用途:** 複雑な状態管理  
**具体例:**

- 複数の入力フォームやチェックボックスの状態管理
    
- カートの追加・削除・数量変更など
    

```javascript
const [cart, dispatch] = useReducer(cartReducer, []);
dispatch({ type: "ADD_ITEM", item: { id: 1, name: "りんご" }});
```

---

### ⑤ `useRef`

**用途:** DOM参照 / 再レンダーしない値保持  
**具体例:**

- inputにフォーカスを当てる
    
- アニメーションで前回の値を保持
    

```javascript
const inputRef = useRef();
<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>フォーカス</button>
```

---

# 2. **パフォーマンス系フック**

### ⑥ `useMemo`

**用途:** 計算結果のキャッシュ  
**具体例:**

- フィルター処理やソートなど重い計算
    
- リストを大量レンダーする場合
    

```javascript
const expensiveList = useMemo(() => sortItems(items), [items]);
```

---

### ⑦ `useCallback`

**用途:** 関数のメモ化  
**具体例:**

- 子コンポーネントに渡す関数が毎回変わらないようにする
    
- React.memoと組み合わせてレンダー抑制
    

```javascript
const handleClick = useCallback(() => setCount(c => c + 1), []);
<Child onClick={handleClick} />
```

---

# 3. **ライフサイクル / DOM操作系**

### ⑧ `useLayoutEffect`

**用途:** 描画前にDOMを操作したいとき  
**具体例:**

- スクロール位置の調整
    
- DOM要素のサイズ計算してレイアウト調整
    

---

### ⑨ `useImperativeHandle`

**用途:** 外部から操作できる関数を公開  
**具体例:**

- カスタム input コンポーネントに `focus()` を外部から呼べるようにする
    

```javascript
useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus() }));
```

---

### ⑩ `useDebugValue`

**用途:** DevToolsでフックの値を表示  
**具体例:**

- カスタムフックの値を可視化してデバッグ
    

---

# 4. **Concurrent Mode / 新しいフック**

### ⑪ `useTransition`

**用途:** 優先度の低い更新を遅延させる  
**具体例:**

- 大量データの検索結果表示
    
- 入力中にUIが固まらないようにする
    

```javascript
const [isPending, startTransition] = useTransition();
startTransition(() => setList(filteredList));
```

---

### ⑫ `useDeferredValue`

**用途:** 値更新を遅延  
**具体例:**

- 入力値が変わったときに検索結果を遅延更新
    

---

### ⑬ `useId`

**用途:** 一意のID生成  
**具体例:**

- フォームの `label` と `input` を紐付ける
    
- aria属性のID生成
    

```javascript
const id = useId();
<label htmlFor={id}>名前</label>
<input id={id} />
```

---

### ⑭ `useSyncExternalStore`

**用途:** 外部ストアと同期  
**具体例:**

- Reduxやカスタムストアの購読
    
- 他のフックと組み合わせて状態を同期
    

---

### ⑮ `useInsertionEffect`

**用途:** CSS-in-JS用  
**具体例:**

- styled-components や emotion でスタイルを効率的にDOMに挿入
    

---

# 5. **カスタムフック**

**用途:** ロジック再利用  
**具体例:**

- カウンターやフォーム入力の共通処理
    
- フェッチ処理の共通化
    

```javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => { fetch(url).then(r => r.json()).then(setData); }, [url]);
  return data;
}
```

---

💡 **まとめポイント**

- `useState` / `useReducer` → 状態管理
    
- `useEffect` / `useLayoutEffect` → 副作用 / DOM操作
    
- `useMemo` / `useCallback` → 計算や関数の最適化
    
- `useRef` → DOM参照や値保持
    
- `useContext` → グローバル状態参照
    
- 新しいフック → パフォーマンス改善やID生成など
    
- カスタムフック → ロジックの再利用
    