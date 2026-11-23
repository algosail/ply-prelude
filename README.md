# @plylang/prelude

- [@plylang/prelude/Alt](#plylangpreludealt)
- [@plylang/prelude/Alternative](#plylangpreludealternative)
- [@plylang/prelude/Applicative](#plylangpreludeapplicative)
- [@plylang/prelude/Apply](#plylangpreludeapply)
- [@plylang/prelude/Arithmetic](#plylangpreludearithmetic)
- [@plylang/prelude/Bifunctor](#plylangpreludebifunctor)
- [@plylang/prelude/Chain](#plylangpreludechain)
- [@plylang/prelude/Composition](#plylangpreludecomposition)
- [@plylang/prelude/Filterable](#plylangpreludefilterable)
- [@plylang/prelude/Foldable](#plylangpreludefoldable)
- [@plylang/prelude/Functor](#plylangpreludefunctor)
- [@plylang/prelude/Group](#plylangpreludegroup)
- [@plylang/prelude/Logical](#plylangpreludelogical)
- [@plylang/prelude/Monad](#plylangpreludemonad)
- [@plylang/prelude/Monoid](#plylangpreludemonoid)
- [@plylang/prelude/Ord](#plylangpreludeord)
- [@plylang/prelude/Plus](#plylangpreludeplus)
- [@plylang/prelude/Prelude](#plylangpreludeprelude)
- [@plylang/prelude/Semigroup](#plylangpreludesemigroup)
- [@plylang/prelude/Setoid](#plylangpreludesetoid)
- [@plylang/prelude/Show](#plylangpreludeshow)
- [@plylang/prelude/Traversable](#plylangpreludetraversable)
- [@plylang/prelude/Types](#plylangpreludetypes)

## @plylang/prelude/Alt

### Classes

#### Alt

```ply
& Functor f => Alt f
```

Keep the lower value when it is a result, otherwise the upper one.
An array keeps both, lower first.

#### alt

```ply
alt ( Alt f => (f a) (f a) -- (f a) )
```

The lower value when it is a result, otherwise the upper one.

### Instances

- Alt Array

## @plylang/prelude/Alternative

### Classes

#### Alternative

```ply
& Applicative f, Plus f => Alternative f
```

One constraint brings of, alt, and zero.

### Words

#### guard

```ply
: guard ( Alternative f => Bool -- (f Unit) )
```

true is of Unit. false is zero.

## @plylang/prelude/Applicative

### Classes

#### Applicative

```ply
& Apply f => Applicative f
```

Put one value into the container.

#### of

```ply
of ( Applicative f => a -- (f a) )
```

The container of this one value.

### Instances

- Applicative Array

### Words

#### append

```ply
: append ( Applicative f => Semigroup (f a) => (f a) a -- (f a) )
```

The container with this value joined after it.

#### prepend

```ply
: prepend ( Applicative f => Semigroup (f a) => (f a) a -- (f a) )
```

The container with this value joined before it.

## @plylang/prelude/Apply

### Classes

#### Apply

```ply
& Functor f => Apply f
```

Apply a container of quotations. The quotations are on top.

#### ap

```ply
ap ( Apply f => (f a) (f (a -- b)) -- (f b) )
```

Each value run with the quotation beside it. The quotations are on top.

### Instances

- Apply Array

### Words

#### lift2

```ply
: lift2 ( Apply f => (f a) (f b) (a b -- c) -- (f c) )
```

Pass two container values, from the bottom upward, to one quotation.
map takes the lower value. ap takes the upper one. The quotation stays uncurried.

#### lift3

```ply
: lift3 ( Apply f => (f a) (f b) (f c) (a b c -- d) -- (f d) )
```

Pass three container values, from the bottom upward, to one quotation.
map takes the first value. ap takes the other two. The quotation stays uncurried.

#### apFirst

```ply
: apFirst ( Apply f => (f a) (f b) -- (f a) )
```

Keep the lower container's value. The upper container still runs.

#### apSecond

```ply
: apSecond ( Apply f => (f a) (f b) -- (f b) )
```

Keep the upper container's value. The lower container still runs.

## @plylang/prelude/Arithmetic

### Classes

#### Arithmetic

```ply
& Arithmetic a
```

Arithmetic methods share one instance.

#### add

```ply
add ( Arithmetic a => a a -- a )
```

The lower value plus the upper one.

#### sub

```ply
sub ( Arithmetic a => a a -- a )
```

The upper value subtracted from the lower one.

#### mult

```ply
mult ( Arithmetic a => a a -- a )
```

The lower value times the upper one.

#### div

```ply
div ( Arithmetic a => a a -- a )
```

The lower value divided by the upper one. A zero divisor throws.

#### mod

```ply
mod ( Arithmetic a => a a -- a )
```

The remainder. A zero divisor throws.

#### negate

```ply
negate ( Arithmetic a => a -- a )
```

The sign flipped.

#### zero

```ply
zero ( Arithmetic a => -- a )
```

The value add leaves unchanged.

#### one

```ply
one ( Arithmetic a => -- a )
```

The value multiply leaves unchanged.

### Instances

- Arithmetic Int
- Arithmetic Num

### Words

#### inc

```ply
: inc ( Arithmetic a => a -- a )
```

#### dec

```ply
: dec ( Arithmetic a => a -- a )
```

#### abs

```ply
: abs ( Arithmetic a => Ord a => a -- a )
```

The value with a negative sign flipped. NaN stays NaN, and -0 stays -0.

## @plylang/prelude/Bifunctor

### Classes

#### Bifunctor

```ply
& Bifunctor f
```

Map both parameters. The left quotation is under the right one.

#### bimap

```ply
bimap ( Bifunctor f => (f a c) (a -- b) (c -- d) -- (f b d) )
```

Left quotation under the right one.

### Words

#### mapLeft

```ply
: mapLeft ( Bifunctor f => (f a c) (a -- b) -- (f b c) )
```

#### mapRight

```ply
: mapRight ( Bifunctor f => (f a c) (c -- b) -- (f a b) )
```

## @plylang/prelude/Chain

### Classes

#### Chain

```ply
& Apply f => Chain f
```

Apply a quotation that returns a container, and join the results. The quotation is on top.

#### chain

```ply
chain ( Chain f => (f a) (a -- (f b)) -- (f b) )
```

The containers the quotation returns, joined into one.

### Instances

- Chain Array

### Words

#### join

```ply
: join ( Chain f => (f (f a)) -- (f a) )
```

One layer removed. The inner container is the result.

## @plylang/prelude/Composition

### Words

#### compose

```ply
: compose ( (a -- b) (b -- c) -- (a -- c) )
```

Runs the lower quotation first and the upper one second.
A function type cannot be an instance head, so composition is a pair of words.

#### id

```ply
: id ( -- (a -- a) )
```

A quotation that returns its input.

#### curry2

```ply
: curry2 ( (a b -- c) -- (a -- (b -- c)) )
```

Split a binary quotation into unary steps, so ap can take one value at a time.

#### curry3

```ply
: curry3 ( (a b c -- d) -- (a -- (b -- (c -- d))) )
```

Split a ternary quotation into unary steps, so ap can take one value at a time.

## @plylang/prelude/Filterable

### Classes

#### Filterable

```ply
& Filterable f
```

filter keeps values the quotation accepts.
partition leaves the matches below and the rest on top.
filterMap keeps Some. partitionMap leaves Right below and Left on top.

#### filter

```ply
filter ( Filterable f => (f a) (a -- Bool) -- (f a) )
```

Values the quotation accepts.

#### partition

```ply
partition ( Filterable f => (f a) (a -- Bool) -- (f a) (f a) )
```

Matches below, the rest on top.

### Instances

- Filterable Array

### Words

#### reject

```ply
: reject ( Filterable f => (f a) (a -- Bool) -- (f a) )
```

## @plylang/prelude/Foldable

### Classes

#### Foldable

```ply
& Foldable f
```

fold walks from the left. The initial value sits under the quotation.
size, all, any, none, elem, intercalate, foldMap and reverse are in Words/Fold.
sort and sortBy are in Words/Sort.
size counts with Num. Importing Num here cycles through Option.

#### fold

```ply
fold ( Foldable f => (f a) b (b a -- b) -- b )
```

Walk from the left. The initial value sits under the quotation.

### Instances

- Foldable Array

### Words

#### size

```ply
: size ( Foldable f => (f a) -- Num )
```

How many elements. An empty structure is 0.

#### all

```ply
: all ( Foldable f => (f a) (a -- Bool) -- Bool )
```

True when every element suits the quotation. An empty structure is true.

#### any

```ply
: any ( Foldable f => (f a) (a -- Bool) -- Bool )
```

True when one element suits the quotation. An empty structure is false.

#### none

```ply
: none ( Foldable f => (f a) (a -- Bool) -- Bool )
```

True when no element suits the quotation. An empty structure is true.

#### elem

```ply
: elem ( Setoid a => Foldable f => (f a) a -- Bool )
```

True when the upper value equals some element.

#### intercalate

```ply
: intercalate ( Monoid m => Foldable f => (f m) m -- m )
```

The pieces joined, with the separator between them. An empty structure is empty.

#### foldMap

```ply
: foldMap ( Monoid m => Foldable f => (f a) (a -- m) -- m )
```

Concat each result, starting from empty.

#### reverse

```ply
: reverse ( Applicative f => Foldable f => Monoid (f a) => (f a) -- (f a) )
```

The elements in the opposite order.

#### sortBy

```ply
: sortBy ( Ord b => Applicative f => Foldable f => Monoid (f a) => (f a) (a -- b) -- (f a) )
```

The elements ordered by the quotation, using lte on each result.
An equal result keeps the earlier element.

#### sort

```ply
: sort ( Ord a => Applicative f => Foldable f => Monoid (f a) => (f a) -- (f a) )
```

The elements ordered by lte. An equal element keeps the earlier place.

## @plylang/prelude/Functor

### Classes

#### Functor

```ply
& Functor f
```

Apply a quotation inside the container. The quotation is on top.

#### map

```ply
map ( Functor f => (f a) (a -- b) -- (f b) )
```

The container of results. The quotation is on top.

### Instances

- Functor Array

### Words

#### flip

```ply
: flip ( Functor f => a (f (a -- b)) -- (f b) )
```

## @plylang/prelude/Group

### Classes

#### Group

```ply
& Monoid g => Group g
```

A monoid whose concat has an inverse. No prelude type is an instance.

#### invert

```ply
invert ( Group g => g -- g )
```

The value that concats back to empty.

## @plylang/prelude/Logical

### Classes

#### Logical

```ply
& Logical a
```

Conjunction, disjunction, negation, and implication.
truth and falsity are the constants, because true and false are keywords.

#### and

```ply
and ( Logical a => a a -- a )
```

Conjunction.

#### or

```ply
or ( Logical a => a a -- a )
```

Disjunction.

#### not

```ply
not ( Logical a => a -- a )
```

The opposite value.

#### truth

```ply
truth ( Logical a => -- a )
```

The constant that and leaves unchanged.

#### falsity

```ply
falsity ( Logical a => -- a )
```

The constant that or leaves unchanged.

### Instances

- Logical Bool

### Words

#### implies

```ply
: implies ( Logical a => a a -- a )
```

The lower value implies the upper one.

## @plylang/prelude/Monad

### Classes

#### Monad

```ply
& Applicative m, Chain m => Monad m
```

One constraint brings both of and chain.

## @plylang/prelude/Monoid

### Classes

#### Monoid

```ply
& Semigroup a => Monoid a
```

The empty value of a semigroup. Concat with empty changes nothing.

#### empty

```ply
empty ( Monoid a => -- a )
```

The value concat leaves unchanged.

### Instances

- Monoid Str
- Monoid Unit
- Monoid (Array a)
- Monoid Ordering

## @plylang/prelude/Ord

### Classes

#### Ord

```ply
& Setoid a => Ord a
```

A total order. The lower value is compared with the upper one.

#### lte

```ply
lte ( Ord a => a a -- Bool )
```

True when the lower value is below the upper one, or they match.

### Instances

- Ord Str
- Ord Num
- Ord Int
- Ord Bool
- Ord Unit
- Ord (Array a)
- Ord Ordering

### Words

#### lt

```ply
: lt ( Ord a => a a -- Bool )
```

True when the lower value is below the upper one.

#### gt

```ply
: gt ( Ord a => a a -- Bool )
```

True when the lower value is above the upper one.

#### gte

```ply
: gte ( Ord a => a a -- Bool )
```

True when the lower value is above the upper one, or they match.

#### min

```ply
: min ( Ord a => a a -- a )
```

The smaller value. The lower one stays when they match.

#### max

```ply
: max ( Ord a => a a -- a )
```

The larger value. The upper one stays when they match.

#### clamp

```ply
: clamp ( Ord a => a a a -- a )
```

Lower bound, upper bound, then the value. A value outside the bounds becomes the nearer bound.

#### compare

```ply
: compare ( Ord a => a a -- Ordering )
```

## @plylang/prelude/Plus

### Classes

#### Plus

```ply
& Alt f => Plus f
```

The value that loses to every other one. alt with it changes nothing.

#### init

```ply
init ( Plus f => -- (f a) )
```

The value that loses. alt with it changes nothing.

### Words

#### oneOf

```ply
: oneOf ( Foldable t => Plus f => (t (f a)) -- (f a) )
```

Folds with alt, starting from init.
Maybe keeps the first Just. Array appends every piece, lower first.

## @plylang/prelude/Prelude

### Types

#### Ordering

```ply
; Ordering = LT | EQ | GT
```

LT is below EQ. EQ is below GT.

### Classes

#### Alt

```ply
& Functor f => Alt f
```

Keep the lower value when it is a result, otherwise the upper one.
An array keeps both, lower first.

#### alt

```ply
alt ( Alt f => (f a) (f a) -- (f a) )
```

The lower value when it is a result, otherwise the upper one.

#### Alternative

```ply
& Applicative f, Plus f => Alternative f
```

One constraint brings of, alt, and zero.

#### Applicative

```ply
& Apply f => Applicative f
```

Put one value into the container.

#### of

```ply
of ( Applicative f => a -- (f a) )
```

The container of this one value.

#### Apply

```ply
& Functor f => Apply f
```

Apply a container of quotations. The quotations are on top.

#### ap

```ply
ap ( Apply f => (f a) (f (a -- b)) -- (f b) )
```

Each value run with the quotation beside it. The quotations are on top.

#### Arithmetic

```ply
& Arithmetic a
```

Arithmetic methods share one instance.

#### add

```ply
add ( Arithmetic a => a a -- a )
```

The lower value plus the upper one.

#### sub

```ply
sub ( Arithmetic a => a a -- a )
```

The upper value subtracted from the lower one.

#### mult

```ply
mult ( Arithmetic a => a a -- a )
```

The lower value times the upper one.

#### div

```ply
div ( Arithmetic a => a a -- a )
```

The lower value divided by the upper one. A zero divisor throws.

#### mod

```ply
mod ( Arithmetic a => a a -- a )
```

The remainder. A zero divisor throws.

#### negate

```ply
negate ( Arithmetic a => a -- a )
```

The sign flipped.

#### zero

```ply
zero ( Arithmetic a => -- a )
```

The value add leaves unchanged.

#### one

```ply
one ( Arithmetic a => -- a )
```

The value multiply leaves unchanged.

#### Bifunctor

```ply
& Bifunctor f
```

Map both parameters. The left quotation is under the right one.

#### bimap

```ply
bimap ( Bifunctor f => (f a c) (a -- b) (c -- d) -- (f b d) )
```

Left quotation under the right one.

#### Chain

```ply
& Apply f => Chain f
```

Apply a quotation that returns a container, and join the results. The quotation is on top.

#### chain

```ply
chain ( Chain f => (f a) (a -- (f b)) -- (f b) )
```

The containers the quotation returns, joined into one.

#### Filterable

```ply
& Filterable f
```

filter keeps values the quotation accepts.
partition leaves the matches below and the rest on top.
filterMap keeps Some. partitionMap leaves Right below and Left on top.

#### filter

```ply
filter ( Filterable f => (f a) (a -- Bool) -- (f a) )
```

Values the quotation accepts.

#### partition

```ply
partition ( Filterable f => (f a) (a -- Bool) -- (f a) (f a) )
```

Matches below, the rest on top.

#### Foldable

```ply
& Foldable f
```

fold walks from the left. The initial value sits under the quotation.
size, all, any, none, elem, intercalate, foldMap and reverse are in Words/Fold.
sort and sortBy are in Words/Sort.
size counts with Num. Importing Num here cycles through Option.

#### fold

```ply
fold ( Foldable f => (f a) b (b a -- b) -- b )
```

Walk from the left. The initial value sits under the quotation.

#### Functor

```ply
& Functor f
```

Apply a quotation inside the container. The quotation is on top.

#### map

```ply
map ( Functor f => (f a) (a -- b) -- (f b) )
```

The container of results. The quotation is on top.

#### Group

```ply
& Monoid g => Group g
```

A monoid whose concat has an inverse. No prelude type is an instance.

#### invert

```ply
invert ( Group g => g -- g )
```

The value that concats back to empty.

#### Logical

```ply
& Logical a
```

Conjunction, disjunction, negation, and implication.
truth and falsity are the constants, because true and false are keywords.

#### and

```ply
and ( Logical a => a a -- a )
```

Conjunction.

#### or

```ply
or ( Logical a => a a -- a )
```

Disjunction.

#### not

```ply
not ( Logical a => a -- a )
```

The opposite value.

#### truth

```ply
truth ( Logical a => -- a )
```

The constant that and leaves unchanged.

#### falsity

```ply
falsity ( Logical a => -- a )
```

The constant that or leaves unchanged.

#### Monad

```ply
& Applicative m, Chain m => Monad m
```

One constraint brings both of and chain.

#### Monoid

```ply
& Semigroup a => Monoid a
```

The empty value of a semigroup. Concat with empty changes nothing.

#### empty

```ply
empty ( Monoid a => -- a )
```

The value concat leaves unchanged.

#### Ord

```ply
& Setoid a => Ord a
```

A total order. The lower value is compared with the upper one.

#### lte

```ply
lte ( Ord a => a a -- Bool )
```

True when the lower value is below the upper one, or they match.

#### Plus

```ply
& Alt f => Plus f
```

The value that loses to every other one. alt with it changes nothing.

#### init

```ply
init ( Plus f => -- (f a) )
```

The value that loses. alt with it changes nothing.

#### Semigroup

```ply
& Semigroup a
```

Join the lower value with the upper one.

#### concat

```ply
concat ( Semigroup a => a a -- a )
```

The lower value joined with the upper one.

#### Setoid

```ply
& Setoid a
```

Decide whether two values are equal.

#### equal

```ply
equal ( Setoid a => a a -- Bool )
```

True when the two values match.

#### Show

```ply
& Show a
```

Render a value as text.

#### show

```ply
show ( Show a => a -- Str )
```

The text of this value.

#### Traversable

```ply
& Foldable f, Functor f => Traversable f
```

Visit each value with a quotation that returns an applicative result, and collect those results in order.
Applicative already brings ap and map.

#### traverse

```ply
traverse ( Traversable f => Applicative m => (f a) (a -- (m b)) -- (m (f b)) )
```

Each value visited by a quotation that returns an applicative result. The results stay in order.

### Words

#### guard

```ply
: guard ( Alternative f => Bool -- (f Unit) )
```

true is of Unit. false is zero.

#### append

```ply
: append ( Applicative f => Semigroup (f a) => (f a) a -- (f a) )
```

The container with this value joined after it.

#### prepend

```ply
: prepend ( Applicative f => Semigroup (f a) => (f a) a -- (f a) )
```

The container with this value joined before it.

#### lift2

```ply
: lift2 ( Apply f => (f a) (f b) (a b -- c) -- (f c) )
```

Pass two container values, from the bottom upward, to one quotation.
map takes the lower value. ap takes the upper one. The quotation stays uncurried.

#### lift3

```ply
: lift3 ( Apply f => (f a) (f b) (f c) (a b c -- d) -- (f d) )
```

Pass three container values, from the bottom upward, to one quotation.
map takes the first value. ap takes the other two. The quotation stays uncurried.

#### apFirst

```ply
: apFirst ( Apply f => (f a) (f b) -- (f a) )
```

Keep the lower container's value. The upper container still runs.

#### apSecond

```ply
: apSecond ( Apply f => (f a) (f b) -- (f b) )
```

Keep the upper container's value. The lower container still runs.

#### inc

```ply
: inc ( Arithmetic a => a -- a )
```

#### dec

```ply
: dec ( Arithmetic a => a -- a )
```

#### abs

```ply
: abs ( Arithmetic a => Ord a => a -- a )
```

The value with a negative sign flipped. NaN stays NaN, and -0 stays -0.

#### mapLeft

```ply
: mapLeft ( Bifunctor f => (f a c) (a -- b) -- (f b c) )
```

#### mapRight

```ply
: mapRight ( Bifunctor f => (f a c) (c -- b) -- (f a b) )
```

#### join

```ply
: join ( Chain f => (f (f a)) -- (f a) )
```

One layer removed. The inner container is the result.

#### compose

```ply
: compose ( (a -- b) (b -- c) -- (a -- c) )
```

Runs the lower quotation first and the upper one second.
A function type cannot be an instance head, so composition is a pair of words.

#### id

```ply
: id ( -- (a -- a) )
```

A quotation that returns its input.

#### curry2

```ply
: curry2 ( (a b -- c) -- (a -- (b -- c)) )
```

Split a binary quotation into unary steps, so ap can take one value at a time.

#### curry3

```ply
: curry3 ( (a b c -- d) -- (a -- (b -- (c -- d))) )
```

Split a ternary quotation into unary steps, so ap can take one value at a time.

#### reject

```ply
: reject ( Filterable f => (f a) (a -- Bool) -- (f a) )
```

#### size

```ply
: size ( Foldable f => (f a) -- Num )
```

How many elements. An empty structure is 0.

#### all

```ply
: all ( Foldable f => (f a) (a -- Bool) -- Bool )
```

True when every element suits the quotation. An empty structure is true.

#### any

```ply
: any ( Foldable f => (f a) (a -- Bool) -- Bool )
```

True when one element suits the quotation. An empty structure is false.

#### none

```ply
: none ( Foldable f => (f a) (a -- Bool) -- Bool )
```

True when no element suits the quotation. An empty structure is true.

#### elem

```ply
: elem ( Setoid a => Foldable f => (f a) a -- Bool )
```

True when the upper value equals some element.

#### intercalate

```ply
: intercalate ( Monoid m => Foldable f => (f m) m -- m )
```

The pieces joined, with the separator between them. An empty structure is empty.

#### foldMap

```ply
: foldMap ( Monoid m => Foldable f => (f a) (a -- m) -- m )
```

Concat each result, starting from empty.

#### reverse

```ply
: reverse ( Applicative f => Foldable f => Monoid (f a) => (f a) -- (f a) )
```

The elements in the opposite order.

#### sortBy

```ply
: sortBy ( Ord b => Applicative f => Foldable f => Monoid (f a) => (f a) (a -- b) -- (f a) )
```

The elements ordered by the quotation, using lte on each result.
An equal result keeps the earlier element.

#### sort

```ply
: sort ( Ord a => Applicative f => Foldable f => Monoid (f a) => (f a) -- (f a) )
```

The elements ordered by lte. An equal element keeps the earlier place.

#### flip

```ply
: flip ( Functor f => a (f (a -- b)) -- (f b) )
```

#### implies

```ply
: implies ( Logical a => a a -- a )
```

The lower value implies the upper one.

#### lt

```ply
: lt ( Ord a => a a -- Bool )
```

True when the lower value is below the upper one.

#### gt

```ply
: gt ( Ord a => a a -- Bool )
```

True when the lower value is above the upper one.

#### gte

```ply
: gte ( Ord a => a a -- Bool )
```

True when the lower value is above the upper one, or they match.

#### min

```ply
: min ( Ord a => a a -- a )
```

The smaller value. The lower one stays when they match.

#### max

```ply
: max ( Ord a => a a -- a )
```

The larger value. The upper one stays when they match.

#### clamp

```ply
: clamp ( Ord a => a a a -- a )
```

Lower bound, upper bound, then the value. A value outside the bounds becomes the nearer bound.

#### compare

```ply
: compare ( Ord a => a a -- Ordering )
```

#### oneOf

```ply
: oneOf ( Foldable t => Plus f => (t (f a)) -- (f a) )
```

Folds with alt, starting from init.
Maybe keeps the first Just. Array appends every piece, lower first.

#### sequence

```ply
: sequence ( Applicative f => Traversable t => (t (f a)) -- (f (t a)) )
```

The applicative of the traversable. The inner values stay in order.

## @plylang/prelude/Semigroup

### Classes

#### Semigroup

```ply
& Semigroup a
```

Join the lower value with the upper one.

#### concat

```ply
concat ( Semigroup a => a a -- a )
```

The lower value joined with the upper one.

### Instances

- Semigroup Str
- Semigroup Unit
- Semigroup (Array a)
- Semigroup Ordering

## @plylang/prelude/Setoid

### Classes

#### Setoid

```ply
& Setoid a
```

Decide whether two values are equal.

#### equal

```ply
equal ( Setoid a => a a -- Bool )
```

True when the two values match.

### Instances

- Setoid Str
- Setoid Num
- Setoid Int
- Setoid Bool
- Setoid Unit
- Setoid (Array a)
- Setoid Ordering

## @plylang/prelude/Show

### Classes

#### Show

```ply
& Show a
```

Render a value as text.

#### show

```ply
show ( Show a => a -- Str )
```

The text of this value.

### Instances

- Show Str
- Show Num
- Show Int
- Show Bool
- Show Unit
- Show (Array a)
- Show Ordering

## @plylang/prelude/Traversable

### Classes

#### Traversable

```ply
& Foldable f, Functor f => Traversable f
```

Visit each value with a quotation that returns an applicative result, and collect those results in order.
Applicative already brings ap and map.

#### traverse

```ply
traverse ( Traversable f => Applicative m => (f a) (a -- (m b)) -- (m (f b)) )
```

Each value visited by a quotation that returns an applicative result. The results stay in order.

### Instances

- Traversable Array

### Words

#### sequence

```ply
: sequence ( Applicative f => Traversable t => (t (f a)) -- (f (t a)) )
```

The applicative of the traversable. The inner values stay in order.

## @plylang/prelude/Types

### Types

#### Ordering

```ply
; Ordering = LT | EQ | GT
```

LT is below EQ. EQ is below GT.

### Instances

- Nullary Str
- Nullary Num
- Nullary Int
- Nullary Bool
- Nullary Unit
- Unary Array

