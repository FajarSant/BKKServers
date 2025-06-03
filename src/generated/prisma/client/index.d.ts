
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Pengguna
 * 
 */
export type Pengguna = $Result.DefaultSelection<Prisma.$PenggunaPayload>
/**
 * Model Perusahaan
 * 
 */
export type Perusahaan = $Result.DefaultSelection<Prisma.$PerusahaanPayload>
/**
 * Model Lamaran
 * 
 */
export type Lamaran = $Result.DefaultSelection<Prisma.$LamaranPayload>
/**
 * Model Lowongan
 * 
 */
export type Lowongan = $Result.DefaultSelection<Prisma.$LowonganPayload>
/**
 * Model LowonganDisimpan
 * 
 */
export type LowonganDisimpan = $Result.DefaultSelection<Prisma.$LowonganDisimpanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JenisKelamin: {
  laki_laki: 'laki_laki',
  perempuan: 'perempuan'
};

export type JenisKelamin = (typeof JenisKelamin)[keyof typeof JenisKelamin]


export const PeranPengguna: {
  siswa: 'siswa',
  alumni: 'alumni',
  admin: 'admin'
};

export type PeranPengguna = (typeof PeranPengguna)[keyof typeof PeranPengguna]


export const JenisPekerjaan: {
  magang: 'magang',
  paruh_waktu: 'paruh_waktu',
  penuh_waktu: 'penuh_waktu',
  freelance: 'freelance',
  kontrak: 'kontrak'
};

export type JenisPekerjaan = (typeof JenisPekerjaan)[keyof typeof JenisPekerjaan]

}

export type JenisKelamin = $Enums.JenisKelamin

export const JenisKelamin: typeof $Enums.JenisKelamin

export type PeranPengguna = $Enums.PeranPengguna

export const PeranPengguna: typeof $Enums.PeranPengguna

export type JenisPekerjaan = $Enums.JenisPekerjaan

export const JenisPekerjaan: typeof $Enums.JenisPekerjaan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Penggunas
 * const penggunas = await prisma.pengguna.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Penggunas
   * const penggunas = await prisma.pengguna.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pengguna`: Exposes CRUD operations for the **Pengguna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penggunas
    * const penggunas = await prisma.pengguna.findMany()
    * ```
    */
  get pengguna(): Prisma.PenggunaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perusahaan`: Exposes CRUD operations for the **Perusahaan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perusahaans
    * const perusahaans = await prisma.perusahaan.findMany()
    * ```
    */
  get perusahaan(): Prisma.PerusahaanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lamaran`: Exposes CRUD operations for the **Lamaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lamarans
    * const lamarans = await prisma.lamaran.findMany()
    * ```
    */
  get lamaran(): Prisma.LamaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lowongan`: Exposes CRUD operations for the **Lowongan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lowongans
    * const lowongans = await prisma.lowongan.findMany()
    * ```
    */
  get lowongan(): Prisma.LowonganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lowonganDisimpan`: Exposes CRUD operations for the **LowonganDisimpan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LowonganDisimpans
    * const lowonganDisimpans = await prisma.lowonganDisimpan.findMany()
    * ```
    */
  get lowonganDisimpan(): Prisma.LowonganDisimpanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Pengguna: 'Pengguna',
    Perusahaan: 'Perusahaan',
    Lamaran: 'Lamaran',
    Lowongan: 'Lowongan',
    LowonganDisimpan: 'LowonganDisimpan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pengguna" | "perusahaan" | "lamaran" | "lowongan" | "lowonganDisimpan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pengguna: {
        payload: Prisma.$PenggunaPayload<ExtArgs>
        fields: Prisma.PenggunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenggunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenggunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          findFirst: {
            args: Prisma.PenggunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenggunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          findMany: {
            args: Prisma.PenggunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>[]
          }
          create: {
            args: Prisma.PenggunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          createMany: {
            args: Prisma.PenggunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PenggunaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>[]
          }
          delete: {
            args: Prisma.PenggunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          update: {
            args: Prisma.PenggunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          deleteMany: {
            args: Prisma.PenggunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenggunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PenggunaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>[]
          }
          upsert: {
            args: Prisma.PenggunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          aggregate: {
            args: Prisma.PenggunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengguna>
          }
          groupBy: {
            args: Prisma.PenggunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenggunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenggunaCountArgs<ExtArgs>
            result: $Utils.Optional<PenggunaCountAggregateOutputType> | number
          }
        }
      }
      Perusahaan: {
        payload: Prisma.$PerusahaanPayload<ExtArgs>
        fields: Prisma.PerusahaanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerusahaanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerusahaanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerusahaanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerusahaanPayload>
          }
          findFirst: {
            args: Prisma.PerusahaanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerusahaanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerusahaanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerusahaanPayload>
          }
          findMany: {
            args: Prisma.PerusahaanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerusahaanPayload>[]
          }
          create: {
            args: Prisma.PerusahaanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerusahaanPayload>
          }
          createMany: {
            args: Prisma.PerusahaanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerusahaanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerusahaanPayload>[]
          }
          delete: {
            args: Prisma.PerusahaanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerusahaanPayload>
          }
          update: {
            args: Prisma.PerusahaanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerusahaanPayload>
          }
          deleteMany: {
            args: Prisma.PerusahaanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerusahaanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerusahaanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerusahaanPayload>[]
          }
          upsert: {
            args: Prisma.PerusahaanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerusahaanPayload>
          }
          aggregate: {
            args: Prisma.PerusahaanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerusahaan>
          }
          groupBy: {
            args: Prisma.PerusahaanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerusahaanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerusahaanCountArgs<ExtArgs>
            result: $Utils.Optional<PerusahaanCountAggregateOutputType> | number
          }
        }
      }
      Lamaran: {
        payload: Prisma.$LamaranPayload<ExtArgs>
        fields: Prisma.LamaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LamaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LamaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LamaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LamaranPayload>
          }
          findFirst: {
            args: Prisma.LamaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LamaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LamaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LamaranPayload>
          }
          findMany: {
            args: Prisma.LamaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LamaranPayload>[]
          }
          create: {
            args: Prisma.LamaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LamaranPayload>
          }
          createMany: {
            args: Prisma.LamaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LamaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LamaranPayload>[]
          }
          delete: {
            args: Prisma.LamaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LamaranPayload>
          }
          update: {
            args: Prisma.LamaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LamaranPayload>
          }
          deleteMany: {
            args: Prisma.LamaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LamaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LamaranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LamaranPayload>[]
          }
          upsert: {
            args: Prisma.LamaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LamaranPayload>
          }
          aggregate: {
            args: Prisma.LamaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLamaran>
          }
          groupBy: {
            args: Prisma.LamaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<LamaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.LamaranCountArgs<ExtArgs>
            result: $Utils.Optional<LamaranCountAggregateOutputType> | number
          }
        }
      }
      Lowongan: {
        payload: Prisma.$LowonganPayload<ExtArgs>
        fields: Prisma.LowonganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LowonganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LowonganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganPayload>
          }
          findFirst: {
            args: Prisma.LowonganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LowonganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganPayload>
          }
          findMany: {
            args: Prisma.LowonganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganPayload>[]
          }
          create: {
            args: Prisma.LowonganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganPayload>
          }
          createMany: {
            args: Prisma.LowonganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LowonganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganPayload>[]
          }
          delete: {
            args: Prisma.LowonganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganPayload>
          }
          update: {
            args: Prisma.LowonganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganPayload>
          }
          deleteMany: {
            args: Prisma.LowonganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LowonganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LowonganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganPayload>[]
          }
          upsert: {
            args: Prisma.LowonganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganPayload>
          }
          aggregate: {
            args: Prisma.LowonganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLowongan>
          }
          groupBy: {
            args: Prisma.LowonganGroupByArgs<ExtArgs>
            result: $Utils.Optional<LowonganGroupByOutputType>[]
          }
          count: {
            args: Prisma.LowonganCountArgs<ExtArgs>
            result: $Utils.Optional<LowonganCountAggregateOutputType> | number
          }
        }
      }
      LowonganDisimpan: {
        payload: Prisma.$LowonganDisimpanPayload<ExtArgs>
        fields: Prisma.LowonganDisimpanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LowonganDisimpanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganDisimpanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LowonganDisimpanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganDisimpanPayload>
          }
          findFirst: {
            args: Prisma.LowonganDisimpanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganDisimpanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LowonganDisimpanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganDisimpanPayload>
          }
          findMany: {
            args: Prisma.LowonganDisimpanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganDisimpanPayload>[]
          }
          create: {
            args: Prisma.LowonganDisimpanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganDisimpanPayload>
          }
          createMany: {
            args: Prisma.LowonganDisimpanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LowonganDisimpanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganDisimpanPayload>[]
          }
          delete: {
            args: Prisma.LowonganDisimpanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganDisimpanPayload>
          }
          update: {
            args: Prisma.LowonganDisimpanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganDisimpanPayload>
          }
          deleteMany: {
            args: Prisma.LowonganDisimpanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LowonganDisimpanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LowonganDisimpanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganDisimpanPayload>[]
          }
          upsert: {
            args: Prisma.LowonganDisimpanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LowonganDisimpanPayload>
          }
          aggregate: {
            args: Prisma.LowonganDisimpanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLowonganDisimpan>
          }
          groupBy: {
            args: Prisma.LowonganDisimpanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LowonganDisimpanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LowonganDisimpanCountArgs<ExtArgs>
            result: $Utils.Optional<LowonganDisimpanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pengguna?: PenggunaOmit
    perusahaan?: PerusahaanOmit
    lamaran?: LamaranOmit
    lowongan?: LowonganOmit
    lowonganDisimpan?: LowonganDisimpanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PenggunaCountOutputType
   */

  export type PenggunaCountOutputType = {
    lamaran: number
    lowonganDisimpan: number
  }

  export type PenggunaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lamaran?: boolean | PenggunaCountOutputTypeCountLamaranArgs
    lowonganDisimpan?: boolean | PenggunaCountOutputTypeCountLowonganDisimpanArgs
  }

  // Custom InputTypes
  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenggunaCountOutputType
     */
    select?: PenggunaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountLamaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LamaranWhereInput
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountLowonganDisimpanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LowonganDisimpanWhereInput
  }


  /**
   * Count Type PerusahaanCountOutputType
   */

  export type PerusahaanCountOutputType = {
    lowongan: number
  }

  export type PerusahaanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowongan?: boolean | PerusahaanCountOutputTypeCountLowonganArgs
  }

  // Custom InputTypes
  /**
   * PerusahaanCountOutputType without action
   */
  export type PerusahaanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerusahaanCountOutputType
     */
    select?: PerusahaanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerusahaanCountOutputType without action
   */
  export type PerusahaanCountOutputTypeCountLowonganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LowonganWhereInput
  }


  /**
   * Count Type LowonganCountOutputType
   */

  export type LowonganCountOutputType = {
    lamaran: number
    disimpanOleh: number
  }

  export type LowonganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lamaran?: boolean | LowonganCountOutputTypeCountLamaranArgs
    disimpanOleh?: boolean | LowonganCountOutputTypeCountDisimpanOlehArgs
  }

  // Custom InputTypes
  /**
   * LowonganCountOutputType without action
   */
  export type LowonganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganCountOutputType
     */
    select?: LowonganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LowonganCountOutputType without action
   */
  export type LowonganCountOutputTypeCountLamaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LamaranWhereInput
  }

  /**
   * LowonganCountOutputType without action
   */
  export type LowonganCountOutputTypeCountDisimpanOlehArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LowonganDisimpanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pengguna
   */

  export type AggregatePengguna = {
    _count: PenggunaCountAggregateOutputType | null
    _avg: PenggunaAvgAggregateOutputType | null
    _sum: PenggunaSumAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  export type PenggunaAvgAggregateOutputType = {
    id: number | null
  }

  export type PenggunaSumAggregateOutputType = {
    id: number | null
  }

  export type PenggunaMinAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    katasandi: string | null
    peran: $Enums.PeranPengguna | null
    nisn: string | null
    alamat: string | null
    telepon: string | null
    tanggalLahir: Date | null
    jenisKelamin: $Enums.JenisKelamin | null
    dibuatPada: Date | null
  }

  export type PenggunaMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    katasandi: string | null
    peran: $Enums.PeranPengguna | null
    nisn: string | null
    alamat: string | null
    telepon: string | null
    tanggalLahir: Date | null
    jenisKelamin: $Enums.JenisKelamin | null
    dibuatPada: Date | null
  }

  export type PenggunaCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    katasandi: number
    peran: number
    nisn: number
    alamat: number
    telepon: number
    tanggalLahir: number
    jenisKelamin: number
    dibuatPada: number
    _all: number
  }


  export type PenggunaAvgAggregateInputType = {
    id?: true
  }

  export type PenggunaSumAggregateInputType = {
    id?: true
  }

  export type PenggunaMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    katasandi?: true
    peran?: true
    nisn?: true
    alamat?: true
    telepon?: true
    tanggalLahir?: true
    jenisKelamin?: true
    dibuatPada?: true
  }

  export type PenggunaMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    katasandi?: true
    peran?: true
    nisn?: true
    alamat?: true
    telepon?: true
    tanggalLahir?: true
    jenisKelamin?: true
    dibuatPada?: true
  }

  export type PenggunaCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    katasandi?: true
    peran?: true
    nisn?: true
    alamat?: true
    telepon?: true
    tanggalLahir?: true
    jenisKelamin?: true
    dibuatPada?: true
    _all?: true
  }

  export type PenggunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengguna to aggregate.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penggunas
    **/
    _count?: true | PenggunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenggunaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenggunaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenggunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenggunaMaxAggregateInputType
  }

  export type GetPenggunaAggregateType<T extends PenggunaAggregateArgs> = {
        [P in keyof T & keyof AggregatePengguna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengguna[P]>
      : GetScalarType<T[P], AggregatePengguna[P]>
  }




  export type PenggunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenggunaWhereInput
    orderBy?: PenggunaOrderByWithAggregationInput | PenggunaOrderByWithAggregationInput[]
    by: PenggunaScalarFieldEnum[] | PenggunaScalarFieldEnum
    having?: PenggunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenggunaCountAggregateInputType | true
    _avg?: PenggunaAvgAggregateInputType
    _sum?: PenggunaSumAggregateInputType
    _min?: PenggunaMinAggregateInputType
    _max?: PenggunaMaxAggregateInputType
  }

  export type PenggunaGroupByOutputType = {
    id: number
    nama: string
    email: string
    katasandi: string
    peran: $Enums.PeranPengguna
    nisn: string
    alamat: string | null
    telepon: string | null
    tanggalLahir: Date | null
    jenisKelamin: $Enums.JenisKelamin | null
    dibuatPada: Date
    _count: PenggunaCountAggregateOutputType | null
    _avg: PenggunaAvgAggregateOutputType | null
    _sum: PenggunaSumAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  type GetPenggunaGroupByPayload<T extends PenggunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenggunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenggunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
            : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
        }
      >
    >


  export type PenggunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    katasandi?: boolean
    peran?: boolean
    nisn?: boolean
    alamat?: boolean
    telepon?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    dibuatPada?: boolean
    lamaran?: boolean | Pengguna$lamaranArgs<ExtArgs>
    lowonganDisimpan?: boolean | Pengguna$lowonganDisimpanArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengguna"]>

  export type PenggunaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    katasandi?: boolean
    peran?: boolean
    nisn?: boolean
    alamat?: boolean
    telepon?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    dibuatPada?: boolean
  }, ExtArgs["result"]["pengguna"]>

  export type PenggunaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    katasandi?: boolean
    peran?: boolean
    nisn?: boolean
    alamat?: boolean
    telepon?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    dibuatPada?: boolean
  }, ExtArgs["result"]["pengguna"]>

  export type PenggunaSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    katasandi?: boolean
    peran?: boolean
    nisn?: boolean
    alamat?: boolean
    telepon?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    dibuatPada?: boolean
  }

  export type PenggunaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "katasandi" | "peran" | "nisn" | "alamat" | "telepon" | "tanggalLahir" | "jenisKelamin" | "dibuatPada", ExtArgs["result"]["pengguna"]>
  export type PenggunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lamaran?: boolean | Pengguna$lamaranArgs<ExtArgs>
    lowonganDisimpan?: boolean | Pengguna$lowonganDisimpanArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PenggunaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PenggunaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PenggunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pengguna"
    objects: {
      lamaran: Prisma.$LamaranPayload<ExtArgs>[]
      lowonganDisimpan: Prisma.$LowonganDisimpanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      email: string
      katasandi: string
      peran: $Enums.PeranPengguna
      nisn: string
      alamat: string | null
      telepon: string | null
      tanggalLahir: Date | null
      jenisKelamin: $Enums.JenisKelamin | null
      dibuatPada: Date
    }, ExtArgs["result"]["pengguna"]>
    composites: {}
  }

  type PenggunaGetPayload<S extends boolean | null | undefined | PenggunaDefaultArgs> = $Result.GetResult<Prisma.$PenggunaPayload, S>

  type PenggunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PenggunaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenggunaCountAggregateInputType | true
    }

  export interface PenggunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pengguna'], meta: { name: 'Pengguna' } }
    /**
     * Find zero or one Pengguna that matches the filter.
     * @param {PenggunaFindUniqueArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenggunaFindUniqueArgs>(args: SelectSubset<T, PenggunaFindUniqueArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengguna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenggunaFindUniqueOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenggunaFindUniqueOrThrowArgs>(args: SelectSubset<T, PenggunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaFindFirstArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenggunaFindFirstArgs>(args?: SelectSubset<T, PenggunaFindFirstArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaFindFirstOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenggunaFindFirstOrThrowArgs>(args?: SelectSubset<T, PenggunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penggunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penggunas
     * const penggunas = await prisma.pengguna.findMany()
     * 
     * // Get first 10 Penggunas
     * const penggunas = await prisma.pengguna.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penggunaWithIdOnly = await prisma.pengguna.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PenggunaFindManyArgs>(args?: SelectSubset<T, PenggunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengguna.
     * @param {PenggunaCreateArgs} args - Arguments to create a Pengguna.
     * @example
     * // Create one Pengguna
     * const Pengguna = await prisma.pengguna.create({
     *   data: {
     *     // ... data to create a Pengguna
     *   }
     * })
     * 
     */
    create<T extends PenggunaCreateArgs>(args: SelectSubset<T, PenggunaCreateArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penggunas.
     * @param {PenggunaCreateManyArgs} args - Arguments to create many Penggunas.
     * @example
     * // Create many Penggunas
     * const pengguna = await prisma.pengguna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenggunaCreateManyArgs>(args?: SelectSubset<T, PenggunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penggunas and returns the data saved in the database.
     * @param {PenggunaCreateManyAndReturnArgs} args - Arguments to create many Penggunas.
     * @example
     * // Create many Penggunas
     * const pengguna = await prisma.pengguna.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penggunas and only return the `id`
     * const penggunaWithIdOnly = await prisma.pengguna.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PenggunaCreateManyAndReturnArgs>(args?: SelectSubset<T, PenggunaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pengguna.
     * @param {PenggunaDeleteArgs} args - Arguments to delete one Pengguna.
     * @example
     * // Delete one Pengguna
     * const Pengguna = await prisma.pengguna.delete({
     *   where: {
     *     // ... filter to delete one Pengguna
     *   }
     * })
     * 
     */
    delete<T extends PenggunaDeleteArgs>(args: SelectSubset<T, PenggunaDeleteArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengguna.
     * @param {PenggunaUpdateArgs} args - Arguments to update one Pengguna.
     * @example
     * // Update one Pengguna
     * const pengguna = await prisma.pengguna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenggunaUpdateArgs>(args: SelectSubset<T, PenggunaUpdateArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penggunas.
     * @param {PenggunaDeleteManyArgs} args - Arguments to filter Penggunas to delete.
     * @example
     * // Delete a few Penggunas
     * const { count } = await prisma.pengguna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenggunaDeleteManyArgs>(args?: SelectSubset<T, PenggunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penggunas
     * const pengguna = await prisma.pengguna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenggunaUpdateManyArgs>(args: SelectSubset<T, PenggunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penggunas and returns the data updated in the database.
     * @param {PenggunaUpdateManyAndReturnArgs} args - Arguments to update many Penggunas.
     * @example
     * // Update many Penggunas
     * const pengguna = await prisma.pengguna.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penggunas and only return the `id`
     * const penggunaWithIdOnly = await prisma.pengguna.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PenggunaUpdateManyAndReturnArgs>(args: SelectSubset<T, PenggunaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pengguna.
     * @param {PenggunaUpsertArgs} args - Arguments to update or create a Pengguna.
     * @example
     * // Update or create a Pengguna
     * const pengguna = await prisma.pengguna.upsert({
     *   create: {
     *     // ... data to create a Pengguna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengguna we want to update
     *   }
     * })
     */
    upsert<T extends PenggunaUpsertArgs>(args: SelectSubset<T, PenggunaUpsertArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaCountArgs} args - Arguments to filter Penggunas to count.
     * @example
     * // Count the number of Penggunas
     * const count = await prisma.pengguna.count({
     *   where: {
     *     // ... the filter for the Penggunas we want to count
     *   }
     * })
    **/
    count<T extends PenggunaCountArgs>(
      args?: Subset<T, PenggunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenggunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PenggunaAggregateArgs>(args: Subset<T, PenggunaAggregateArgs>): Prisma.PrismaPromise<GetPenggunaAggregateType<T>>

    /**
     * Group by Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PenggunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenggunaGroupByArgs['orderBy'] }
        : { orderBy?: PenggunaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PenggunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenggunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pengguna model
   */
  readonly fields: PenggunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pengguna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenggunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lamaran<T extends Pengguna$lamaranArgs<ExtArgs> = {}>(args?: Subset<T, Pengguna$lamaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lowonganDisimpan<T extends Pengguna$lowonganDisimpanArgs<ExtArgs> = {}>(args?: Subset<T, Pengguna$lowonganDisimpanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pengguna model
   */
  interface PenggunaFieldRefs {
    readonly id: FieldRef<"Pengguna", 'Int'>
    readonly nama: FieldRef<"Pengguna", 'String'>
    readonly email: FieldRef<"Pengguna", 'String'>
    readonly katasandi: FieldRef<"Pengguna", 'String'>
    readonly peran: FieldRef<"Pengguna", 'PeranPengguna'>
    readonly nisn: FieldRef<"Pengguna", 'String'>
    readonly alamat: FieldRef<"Pengguna", 'String'>
    readonly telepon: FieldRef<"Pengguna", 'String'>
    readonly tanggalLahir: FieldRef<"Pengguna", 'DateTime'>
    readonly jenisKelamin: FieldRef<"Pengguna", 'JenisKelamin'>
    readonly dibuatPada: FieldRef<"Pengguna", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pengguna findUnique
   */
  export type PenggunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna findUniqueOrThrow
   */
  export type PenggunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna findFirst
   */
  export type PenggunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penggunas.
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * Pengguna findFirstOrThrow
   */
  export type PenggunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penggunas.
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * Pengguna findMany
   */
  export type PenggunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Penggunas to fetch.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penggunas.
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * Pengguna create
   */
  export type PenggunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pengguna.
     */
    data: XOR<PenggunaCreateInput, PenggunaUncheckedCreateInput>
  }

  /**
   * Pengguna createMany
   */
  export type PenggunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penggunas.
     */
    data: PenggunaCreateManyInput | PenggunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pengguna createManyAndReturn
   */
  export type PenggunaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * The data used to create many Penggunas.
     */
    data: PenggunaCreateManyInput | PenggunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pengguna update
   */
  export type PenggunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pengguna.
     */
    data: XOR<PenggunaUpdateInput, PenggunaUncheckedUpdateInput>
    /**
     * Choose, which Pengguna to update.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna updateMany
   */
  export type PenggunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penggunas.
     */
    data: XOR<PenggunaUpdateManyMutationInput, PenggunaUncheckedUpdateManyInput>
    /**
     * Filter which Penggunas to update
     */
    where?: PenggunaWhereInput
    /**
     * Limit how many Penggunas to update.
     */
    limit?: number
  }

  /**
   * Pengguna updateManyAndReturn
   */
  export type PenggunaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * The data used to update Penggunas.
     */
    data: XOR<PenggunaUpdateManyMutationInput, PenggunaUncheckedUpdateManyInput>
    /**
     * Filter which Penggunas to update
     */
    where?: PenggunaWhereInput
    /**
     * Limit how many Penggunas to update.
     */
    limit?: number
  }

  /**
   * Pengguna upsert
   */
  export type PenggunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pengguna to update in case it exists.
     */
    where: PenggunaWhereUniqueInput
    /**
     * In case the Pengguna found by the `where` argument doesn't exist, create a new Pengguna with this data.
     */
    create: XOR<PenggunaCreateInput, PenggunaUncheckedCreateInput>
    /**
     * In case the Pengguna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenggunaUpdateInput, PenggunaUncheckedUpdateInput>
  }

  /**
   * Pengguna delete
   */
  export type PenggunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter which Pengguna to delete.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna deleteMany
   */
  export type PenggunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penggunas to delete
     */
    where?: PenggunaWhereInput
    /**
     * Limit how many Penggunas to delete.
     */
    limit?: number
  }

  /**
   * Pengguna.lamaran
   */
  export type Pengguna$lamaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
    where?: LamaranWhereInput
    orderBy?: LamaranOrderByWithRelationInput | LamaranOrderByWithRelationInput[]
    cursor?: LamaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LamaranScalarFieldEnum | LamaranScalarFieldEnum[]
  }

  /**
   * Pengguna.lowonganDisimpan
   */
  export type Pengguna$lowonganDisimpanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
    where?: LowonganDisimpanWhereInput
    orderBy?: LowonganDisimpanOrderByWithRelationInput | LowonganDisimpanOrderByWithRelationInput[]
    cursor?: LowonganDisimpanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LowonganDisimpanScalarFieldEnum | LowonganDisimpanScalarFieldEnum[]
  }

  /**
   * Pengguna without action
   */
  export type PenggunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
  }


  /**
   * Model Perusahaan
   */

  export type AggregatePerusahaan = {
    _count: PerusahaanCountAggregateOutputType | null
    _avg: PerusahaanAvgAggregateOutputType | null
    _sum: PerusahaanSumAggregateOutputType | null
    _min: PerusahaanMinAggregateOutputType | null
    _max: PerusahaanMaxAggregateOutputType | null
  }

  export type PerusahaanAvgAggregateOutputType = {
    id: number | null
  }

  export type PerusahaanSumAggregateOutputType = {
    id: number | null
  }

  export type PerusahaanMinAggregateOutputType = {
    id: number | null
    nama: string | null
    gambar: string | null
    alamat: string | null
    email: string | null
    telepon: string | null
    deskripsi: string | null
  }

  export type PerusahaanMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    gambar: string | null
    alamat: string | null
    email: string | null
    telepon: string | null
    deskripsi: string | null
  }

  export type PerusahaanCountAggregateOutputType = {
    id: number
    nama: number
    gambar: number
    alamat: number
    email: number
    telepon: number
    deskripsi: number
    _all: number
  }


  export type PerusahaanAvgAggregateInputType = {
    id?: true
  }

  export type PerusahaanSumAggregateInputType = {
    id?: true
  }

  export type PerusahaanMinAggregateInputType = {
    id?: true
    nama?: true
    gambar?: true
    alamat?: true
    email?: true
    telepon?: true
    deskripsi?: true
  }

  export type PerusahaanMaxAggregateInputType = {
    id?: true
    nama?: true
    gambar?: true
    alamat?: true
    email?: true
    telepon?: true
    deskripsi?: true
  }

  export type PerusahaanCountAggregateInputType = {
    id?: true
    nama?: true
    gambar?: true
    alamat?: true
    email?: true
    telepon?: true
    deskripsi?: true
    _all?: true
  }

  export type PerusahaanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perusahaan to aggregate.
     */
    where?: PerusahaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perusahaans to fetch.
     */
    orderBy?: PerusahaanOrderByWithRelationInput | PerusahaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerusahaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perusahaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perusahaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perusahaans
    **/
    _count?: true | PerusahaanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerusahaanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerusahaanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerusahaanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerusahaanMaxAggregateInputType
  }

  export type GetPerusahaanAggregateType<T extends PerusahaanAggregateArgs> = {
        [P in keyof T & keyof AggregatePerusahaan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerusahaan[P]>
      : GetScalarType<T[P], AggregatePerusahaan[P]>
  }




  export type PerusahaanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerusahaanWhereInput
    orderBy?: PerusahaanOrderByWithAggregationInput | PerusahaanOrderByWithAggregationInput[]
    by: PerusahaanScalarFieldEnum[] | PerusahaanScalarFieldEnum
    having?: PerusahaanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerusahaanCountAggregateInputType | true
    _avg?: PerusahaanAvgAggregateInputType
    _sum?: PerusahaanSumAggregateInputType
    _min?: PerusahaanMinAggregateInputType
    _max?: PerusahaanMaxAggregateInputType
  }

  export type PerusahaanGroupByOutputType = {
    id: number
    nama: string
    gambar: string | null
    alamat: string
    email: string
    telepon: string | null
    deskripsi: string | null
    _count: PerusahaanCountAggregateOutputType | null
    _avg: PerusahaanAvgAggregateOutputType | null
    _sum: PerusahaanSumAggregateOutputType | null
    _min: PerusahaanMinAggregateOutputType | null
    _max: PerusahaanMaxAggregateOutputType | null
  }

  type GetPerusahaanGroupByPayload<T extends PerusahaanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerusahaanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerusahaanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerusahaanGroupByOutputType[P]>
            : GetScalarType<T[P], PerusahaanGroupByOutputType[P]>
        }
      >
    >


  export type PerusahaanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    gambar?: boolean
    alamat?: boolean
    email?: boolean
    telepon?: boolean
    deskripsi?: boolean
    lowongan?: boolean | Perusahaan$lowonganArgs<ExtArgs>
    _count?: boolean | PerusahaanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perusahaan"]>

  export type PerusahaanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    gambar?: boolean
    alamat?: boolean
    email?: boolean
    telepon?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["perusahaan"]>

  export type PerusahaanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    gambar?: boolean
    alamat?: boolean
    email?: boolean
    telepon?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["perusahaan"]>

  export type PerusahaanSelectScalar = {
    id?: boolean
    nama?: boolean
    gambar?: boolean
    alamat?: boolean
    email?: boolean
    telepon?: boolean
    deskripsi?: boolean
  }

  export type PerusahaanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "gambar" | "alamat" | "email" | "telepon" | "deskripsi", ExtArgs["result"]["perusahaan"]>
  export type PerusahaanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowongan?: boolean | Perusahaan$lowonganArgs<ExtArgs>
    _count?: boolean | PerusahaanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PerusahaanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PerusahaanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PerusahaanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perusahaan"
    objects: {
      lowongan: Prisma.$LowonganPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      gambar: string | null
      alamat: string
      email: string
      telepon: string | null
      deskripsi: string | null
    }, ExtArgs["result"]["perusahaan"]>
    composites: {}
  }

  type PerusahaanGetPayload<S extends boolean | null | undefined | PerusahaanDefaultArgs> = $Result.GetResult<Prisma.$PerusahaanPayload, S>

  type PerusahaanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerusahaanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerusahaanCountAggregateInputType | true
    }

  export interface PerusahaanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perusahaan'], meta: { name: 'Perusahaan' } }
    /**
     * Find zero or one Perusahaan that matches the filter.
     * @param {PerusahaanFindUniqueArgs} args - Arguments to find a Perusahaan
     * @example
     * // Get one Perusahaan
     * const perusahaan = await prisma.perusahaan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerusahaanFindUniqueArgs>(args: SelectSubset<T, PerusahaanFindUniqueArgs<ExtArgs>>): Prisma__PerusahaanClient<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perusahaan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerusahaanFindUniqueOrThrowArgs} args - Arguments to find a Perusahaan
     * @example
     * // Get one Perusahaan
     * const perusahaan = await prisma.perusahaan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerusahaanFindUniqueOrThrowArgs>(args: SelectSubset<T, PerusahaanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerusahaanClient<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perusahaan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerusahaanFindFirstArgs} args - Arguments to find a Perusahaan
     * @example
     * // Get one Perusahaan
     * const perusahaan = await prisma.perusahaan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerusahaanFindFirstArgs>(args?: SelectSubset<T, PerusahaanFindFirstArgs<ExtArgs>>): Prisma__PerusahaanClient<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perusahaan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerusahaanFindFirstOrThrowArgs} args - Arguments to find a Perusahaan
     * @example
     * // Get one Perusahaan
     * const perusahaan = await prisma.perusahaan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerusahaanFindFirstOrThrowArgs>(args?: SelectSubset<T, PerusahaanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerusahaanClient<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perusahaans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerusahaanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perusahaans
     * const perusahaans = await prisma.perusahaan.findMany()
     * 
     * // Get first 10 Perusahaans
     * const perusahaans = await prisma.perusahaan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perusahaanWithIdOnly = await prisma.perusahaan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerusahaanFindManyArgs>(args?: SelectSubset<T, PerusahaanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perusahaan.
     * @param {PerusahaanCreateArgs} args - Arguments to create a Perusahaan.
     * @example
     * // Create one Perusahaan
     * const Perusahaan = await prisma.perusahaan.create({
     *   data: {
     *     // ... data to create a Perusahaan
     *   }
     * })
     * 
     */
    create<T extends PerusahaanCreateArgs>(args: SelectSubset<T, PerusahaanCreateArgs<ExtArgs>>): Prisma__PerusahaanClient<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perusahaans.
     * @param {PerusahaanCreateManyArgs} args - Arguments to create many Perusahaans.
     * @example
     * // Create many Perusahaans
     * const perusahaan = await prisma.perusahaan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerusahaanCreateManyArgs>(args?: SelectSubset<T, PerusahaanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perusahaans and returns the data saved in the database.
     * @param {PerusahaanCreateManyAndReturnArgs} args - Arguments to create many Perusahaans.
     * @example
     * // Create many Perusahaans
     * const perusahaan = await prisma.perusahaan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perusahaans and only return the `id`
     * const perusahaanWithIdOnly = await prisma.perusahaan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerusahaanCreateManyAndReturnArgs>(args?: SelectSubset<T, PerusahaanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Perusahaan.
     * @param {PerusahaanDeleteArgs} args - Arguments to delete one Perusahaan.
     * @example
     * // Delete one Perusahaan
     * const Perusahaan = await prisma.perusahaan.delete({
     *   where: {
     *     // ... filter to delete one Perusahaan
     *   }
     * })
     * 
     */
    delete<T extends PerusahaanDeleteArgs>(args: SelectSubset<T, PerusahaanDeleteArgs<ExtArgs>>): Prisma__PerusahaanClient<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perusahaan.
     * @param {PerusahaanUpdateArgs} args - Arguments to update one Perusahaan.
     * @example
     * // Update one Perusahaan
     * const perusahaan = await prisma.perusahaan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerusahaanUpdateArgs>(args: SelectSubset<T, PerusahaanUpdateArgs<ExtArgs>>): Prisma__PerusahaanClient<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perusahaans.
     * @param {PerusahaanDeleteManyArgs} args - Arguments to filter Perusahaans to delete.
     * @example
     * // Delete a few Perusahaans
     * const { count } = await prisma.perusahaan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerusahaanDeleteManyArgs>(args?: SelectSubset<T, PerusahaanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perusahaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerusahaanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perusahaans
     * const perusahaan = await prisma.perusahaan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerusahaanUpdateManyArgs>(args: SelectSubset<T, PerusahaanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perusahaans and returns the data updated in the database.
     * @param {PerusahaanUpdateManyAndReturnArgs} args - Arguments to update many Perusahaans.
     * @example
     * // Update many Perusahaans
     * const perusahaan = await prisma.perusahaan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perusahaans and only return the `id`
     * const perusahaanWithIdOnly = await prisma.perusahaan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PerusahaanUpdateManyAndReturnArgs>(args: SelectSubset<T, PerusahaanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Perusahaan.
     * @param {PerusahaanUpsertArgs} args - Arguments to update or create a Perusahaan.
     * @example
     * // Update or create a Perusahaan
     * const perusahaan = await prisma.perusahaan.upsert({
     *   create: {
     *     // ... data to create a Perusahaan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perusahaan we want to update
     *   }
     * })
     */
    upsert<T extends PerusahaanUpsertArgs>(args: SelectSubset<T, PerusahaanUpsertArgs<ExtArgs>>): Prisma__PerusahaanClient<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perusahaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerusahaanCountArgs} args - Arguments to filter Perusahaans to count.
     * @example
     * // Count the number of Perusahaans
     * const count = await prisma.perusahaan.count({
     *   where: {
     *     // ... the filter for the Perusahaans we want to count
     *   }
     * })
    **/
    count<T extends PerusahaanCountArgs>(
      args?: Subset<T, PerusahaanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerusahaanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perusahaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerusahaanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerusahaanAggregateArgs>(args: Subset<T, PerusahaanAggregateArgs>): Prisma.PrismaPromise<GetPerusahaanAggregateType<T>>

    /**
     * Group by Perusahaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerusahaanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerusahaanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerusahaanGroupByArgs['orderBy'] }
        : { orderBy?: PerusahaanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerusahaanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerusahaanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perusahaan model
   */
  readonly fields: PerusahaanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perusahaan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerusahaanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lowongan<T extends Perusahaan$lowonganArgs<ExtArgs> = {}>(args?: Subset<T, Perusahaan$lowonganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Perusahaan model
   */
  interface PerusahaanFieldRefs {
    readonly id: FieldRef<"Perusahaan", 'Int'>
    readonly nama: FieldRef<"Perusahaan", 'String'>
    readonly gambar: FieldRef<"Perusahaan", 'String'>
    readonly alamat: FieldRef<"Perusahaan", 'String'>
    readonly email: FieldRef<"Perusahaan", 'String'>
    readonly telepon: FieldRef<"Perusahaan", 'String'>
    readonly deskripsi: FieldRef<"Perusahaan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Perusahaan findUnique
   */
  export type PerusahaanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerusahaanInclude<ExtArgs> | null
    /**
     * Filter, which Perusahaan to fetch.
     */
    where: PerusahaanWhereUniqueInput
  }

  /**
   * Perusahaan findUniqueOrThrow
   */
  export type PerusahaanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerusahaanInclude<ExtArgs> | null
    /**
     * Filter, which Perusahaan to fetch.
     */
    where: PerusahaanWhereUniqueInput
  }

  /**
   * Perusahaan findFirst
   */
  export type PerusahaanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerusahaanInclude<ExtArgs> | null
    /**
     * Filter, which Perusahaan to fetch.
     */
    where?: PerusahaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perusahaans to fetch.
     */
    orderBy?: PerusahaanOrderByWithRelationInput | PerusahaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perusahaans.
     */
    cursor?: PerusahaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perusahaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perusahaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perusahaans.
     */
    distinct?: PerusahaanScalarFieldEnum | PerusahaanScalarFieldEnum[]
  }

  /**
   * Perusahaan findFirstOrThrow
   */
  export type PerusahaanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerusahaanInclude<ExtArgs> | null
    /**
     * Filter, which Perusahaan to fetch.
     */
    where?: PerusahaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perusahaans to fetch.
     */
    orderBy?: PerusahaanOrderByWithRelationInput | PerusahaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perusahaans.
     */
    cursor?: PerusahaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perusahaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perusahaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perusahaans.
     */
    distinct?: PerusahaanScalarFieldEnum | PerusahaanScalarFieldEnum[]
  }

  /**
   * Perusahaan findMany
   */
  export type PerusahaanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerusahaanInclude<ExtArgs> | null
    /**
     * Filter, which Perusahaans to fetch.
     */
    where?: PerusahaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perusahaans to fetch.
     */
    orderBy?: PerusahaanOrderByWithRelationInput | PerusahaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perusahaans.
     */
    cursor?: PerusahaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perusahaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perusahaans.
     */
    skip?: number
    distinct?: PerusahaanScalarFieldEnum | PerusahaanScalarFieldEnum[]
  }

  /**
   * Perusahaan create
   */
  export type PerusahaanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerusahaanInclude<ExtArgs> | null
    /**
     * The data needed to create a Perusahaan.
     */
    data: XOR<PerusahaanCreateInput, PerusahaanUncheckedCreateInput>
  }

  /**
   * Perusahaan createMany
   */
  export type PerusahaanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perusahaans.
     */
    data: PerusahaanCreateManyInput | PerusahaanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perusahaan createManyAndReturn
   */
  export type PerusahaanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * The data used to create many Perusahaans.
     */
    data: PerusahaanCreateManyInput | PerusahaanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perusahaan update
   */
  export type PerusahaanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerusahaanInclude<ExtArgs> | null
    /**
     * The data needed to update a Perusahaan.
     */
    data: XOR<PerusahaanUpdateInput, PerusahaanUncheckedUpdateInput>
    /**
     * Choose, which Perusahaan to update.
     */
    where: PerusahaanWhereUniqueInput
  }

  /**
   * Perusahaan updateMany
   */
  export type PerusahaanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perusahaans.
     */
    data: XOR<PerusahaanUpdateManyMutationInput, PerusahaanUncheckedUpdateManyInput>
    /**
     * Filter which Perusahaans to update
     */
    where?: PerusahaanWhereInput
    /**
     * Limit how many Perusahaans to update.
     */
    limit?: number
  }

  /**
   * Perusahaan updateManyAndReturn
   */
  export type PerusahaanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * The data used to update Perusahaans.
     */
    data: XOR<PerusahaanUpdateManyMutationInput, PerusahaanUncheckedUpdateManyInput>
    /**
     * Filter which Perusahaans to update
     */
    where?: PerusahaanWhereInput
    /**
     * Limit how many Perusahaans to update.
     */
    limit?: number
  }

  /**
   * Perusahaan upsert
   */
  export type PerusahaanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerusahaanInclude<ExtArgs> | null
    /**
     * The filter to search for the Perusahaan to update in case it exists.
     */
    where: PerusahaanWhereUniqueInput
    /**
     * In case the Perusahaan found by the `where` argument doesn't exist, create a new Perusahaan with this data.
     */
    create: XOR<PerusahaanCreateInput, PerusahaanUncheckedCreateInput>
    /**
     * In case the Perusahaan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerusahaanUpdateInput, PerusahaanUncheckedUpdateInput>
  }

  /**
   * Perusahaan delete
   */
  export type PerusahaanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerusahaanInclude<ExtArgs> | null
    /**
     * Filter which Perusahaan to delete.
     */
    where: PerusahaanWhereUniqueInput
  }

  /**
   * Perusahaan deleteMany
   */
  export type PerusahaanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perusahaans to delete
     */
    where?: PerusahaanWhereInput
    /**
     * Limit how many Perusahaans to delete.
     */
    limit?: number
  }

  /**
   * Perusahaan.lowongan
   */
  export type Perusahaan$lowonganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganInclude<ExtArgs> | null
    where?: LowonganWhereInput
    orderBy?: LowonganOrderByWithRelationInput | LowonganOrderByWithRelationInput[]
    cursor?: LowonganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LowonganScalarFieldEnum | LowonganScalarFieldEnum[]
  }

  /**
   * Perusahaan without action
   */
  export type PerusahaanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perusahaan
     */
    select?: PerusahaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perusahaan
     */
    omit?: PerusahaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerusahaanInclude<ExtArgs> | null
  }


  /**
   * Model Lamaran
   */

  export type AggregateLamaran = {
    _count: LamaranCountAggregateOutputType | null
    _avg: LamaranAvgAggregateOutputType | null
    _sum: LamaranSumAggregateOutputType | null
    _min: LamaranMinAggregateOutputType | null
    _max: LamaranMaxAggregateOutputType | null
  }

  export type LamaranAvgAggregateOutputType = {
    id: number | null
    penggunaId: number | null
    lowonganId: number | null
  }

  export type LamaranSumAggregateOutputType = {
    id: number | null
    penggunaId: number | null
    lowonganId: number | null
  }

  export type LamaranMinAggregateOutputType = {
    id: number | null
    penggunaId: number | null
    lowonganId: number | null
    tanggal: Date | null
    waktuPelamaran: Date | null
  }

  export type LamaranMaxAggregateOutputType = {
    id: number | null
    penggunaId: number | null
    lowonganId: number | null
    tanggal: Date | null
    waktuPelamaran: Date | null
  }

  export type LamaranCountAggregateOutputType = {
    id: number
    penggunaId: number
    lowonganId: number
    tanggal: number
    waktuPelamaran: number
    _all: number
  }


  export type LamaranAvgAggregateInputType = {
    id?: true
    penggunaId?: true
    lowonganId?: true
  }

  export type LamaranSumAggregateInputType = {
    id?: true
    penggunaId?: true
    lowonganId?: true
  }

  export type LamaranMinAggregateInputType = {
    id?: true
    penggunaId?: true
    lowonganId?: true
    tanggal?: true
    waktuPelamaran?: true
  }

  export type LamaranMaxAggregateInputType = {
    id?: true
    penggunaId?: true
    lowonganId?: true
    tanggal?: true
    waktuPelamaran?: true
  }

  export type LamaranCountAggregateInputType = {
    id?: true
    penggunaId?: true
    lowonganId?: true
    tanggal?: true
    waktuPelamaran?: true
    _all?: true
  }

  export type LamaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lamaran to aggregate.
     */
    where?: LamaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lamarans to fetch.
     */
    orderBy?: LamaranOrderByWithRelationInput | LamaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LamaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lamarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lamarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lamarans
    **/
    _count?: true | LamaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LamaranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LamaranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LamaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LamaranMaxAggregateInputType
  }

  export type GetLamaranAggregateType<T extends LamaranAggregateArgs> = {
        [P in keyof T & keyof AggregateLamaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLamaran[P]>
      : GetScalarType<T[P], AggregateLamaran[P]>
  }




  export type LamaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LamaranWhereInput
    orderBy?: LamaranOrderByWithAggregationInput | LamaranOrderByWithAggregationInput[]
    by: LamaranScalarFieldEnum[] | LamaranScalarFieldEnum
    having?: LamaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LamaranCountAggregateInputType | true
    _avg?: LamaranAvgAggregateInputType
    _sum?: LamaranSumAggregateInputType
    _min?: LamaranMinAggregateInputType
    _max?: LamaranMaxAggregateInputType
  }

  export type LamaranGroupByOutputType = {
    id: number
    penggunaId: number
    lowonganId: number
    tanggal: Date
    waktuPelamaran: Date | null
    _count: LamaranCountAggregateOutputType | null
    _avg: LamaranAvgAggregateOutputType | null
    _sum: LamaranSumAggregateOutputType | null
    _min: LamaranMinAggregateOutputType | null
    _max: LamaranMaxAggregateOutputType | null
  }

  type GetLamaranGroupByPayload<T extends LamaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LamaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LamaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LamaranGroupByOutputType[P]>
            : GetScalarType<T[P], LamaranGroupByOutputType[P]>
        }
      >
    >


  export type LamaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penggunaId?: boolean
    lowonganId?: boolean
    tanggal?: boolean
    waktuPelamaran?: boolean
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lamaran"]>

  export type LamaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penggunaId?: boolean
    lowonganId?: boolean
    tanggal?: boolean
    waktuPelamaran?: boolean
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lamaran"]>

  export type LamaranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penggunaId?: boolean
    lowonganId?: boolean
    tanggal?: boolean
    waktuPelamaran?: boolean
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lamaran"]>

  export type LamaranSelectScalar = {
    id?: boolean
    penggunaId?: boolean
    lowonganId?: boolean
    tanggal?: boolean
    waktuPelamaran?: boolean
  }

  export type LamaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "penggunaId" | "lowonganId" | "tanggal" | "waktuPelamaran", ExtArgs["result"]["lamaran"]>
  export type LamaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }
  export type LamaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }
  export type LamaranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }

  export type $LamaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lamaran"
    objects: {
      pengguna: Prisma.$PenggunaPayload<ExtArgs>
      lowongan: Prisma.$LowonganPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      penggunaId: number
      lowonganId: number
      tanggal: Date
      waktuPelamaran: Date | null
    }, ExtArgs["result"]["lamaran"]>
    composites: {}
  }

  type LamaranGetPayload<S extends boolean | null | undefined | LamaranDefaultArgs> = $Result.GetResult<Prisma.$LamaranPayload, S>

  type LamaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LamaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LamaranCountAggregateInputType | true
    }

  export interface LamaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lamaran'], meta: { name: 'Lamaran' } }
    /**
     * Find zero or one Lamaran that matches the filter.
     * @param {LamaranFindUniqueArgs} args - Arguments to find a Lamaran
     * @example
     * // Get one Lamaran
     * const lamaran = await prisma.lamaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LamaranFindUniqueArgs>(args: SelectSubset<T, LamaranFindUniqueArgs<ExtArgs>>): Prisma__LamaranClient<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lamaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LamaranFindUniqueOrThrowArgs} args - Arguments to find a Lamaran
     * @example
     * // Get one Lamaran
     * const lamaran = await prisma.lamaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LamaranFindUniqueOrThrowArgs>(args: SelectSubset<T, LamaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LamaranClient<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lamaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LamaranFindFirstArgs} args - Arguments to find a Lamaran
     * @example
     * // Get one Lamaran
     * const lamaran = await prisma.lamaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LamaranFindFirstArgs>(args?: SelectSubset<T, LamaranFindFirstArgs<ExtArgs>>): Prisma__LamaranClient<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lamaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LamaranFindFirstOrThrowArgs} args - Arguments to find a Lamaran
     * @example
     * // Get one Lamaran
     * const lamaran = await prisma.lamaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LamaranFindFirstOrThrowArgs>(args?: SelectSubset<T, LamaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__LamaranClient<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lamarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LamaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lamarans
     * const lamarans = await prisma.lamaran.findMany()
     * 
     * // Get first 10 Lamarans
     * const lamarans = await prisma.lamaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lamaranWithIdOnly = await prisma.lamaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LamaranFindManyArgs>(args?: SelectSubset<T, LamaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lamaran.
     * @param {LamaranCreateArgs} args - Arguments to create a Lamaran.
     * @example
     * // Create one Lamaran
     * const Lamaran = await prisma.lamaran.create({
     *   data: {
     *     // ... data to create a Lamaran
     *   }
     * })
     * 
     */
    create<T extends LamaranCreateArgs>(args: SelectSubset<T, LamaranCreateArgs<ExtArgs>>): Prisma__LamaranClient<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lamarans.
     * @param {LamaranCreateManyArgs} args - Arguments to create many Lamarans.
     * @example
     * // Create many Lamarans
     * const lamaran = await prisma.lamaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LamaranCreateManyArgs>(args?: SelectSubset<T, LamaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lamarans and returns the data saved in the database.
     * @param {LamaranCreateManyAndReturnArgs} args - Arguments to create many Lamarans.
     * @example
     * // Create many Lamarans
     * const lamaran = await prisma.lamaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lamarans and only return the `id`
     * const lamaranWithIdOnly = await prisma.lamaran.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LamaranCreateManyAndReturnArgs>(args?: SelectSubset<T, LamaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lamaran.
     * @param {LamaranDeleteArgs} args - Arguments to delete one Lamaran.
     * @example
     * // Delete one Lamaran
     * const Lamaran = await prisma.lamaran.delete({
     *   where: {
     *     // ... filter to delete one Lamaran
     *   }
     * })
     * 
     */
    delete<T extends LamaranDeleteArgs>(args: SelectSubset<T, LamaranDeleteArgs<ExtArgs>>): Prisma__LamaranClient<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lamaran.
     * @param {LamaranUpdateArgs} args - Arguments to update one Lamaran.
     * @example
     * // Update one Lamaran
     * const lamaran = await prisma.lamaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LamaranUpdateArgs>(args: SelectSubset<T, LamaranUpdateArgs<ExtArgs>>): Prisma__LamaranClient<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lamarans.
     * @param {LamaranDeleteManyArgs} args - Arguments to filter Lamarans to delete.
     * @example
     * // Delete a few Lamarans
     * const { count } = await prisma.lamaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LamaranDeleteManyArgs>(args?: SelectSubset<T, LamaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lamarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LamaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lamarans
     * const lamaran = await prisma.lamaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LamaranUpdateManyArgs>(args: SelectSubset<T, LamaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lamarans and returns the data updated in the database.
     * @param {LamaranUpdateManyAndReturnArgs} args - Arguments to update many Lamarans.
     * @example
     * // Update many Lamarans
     * const lamaran = await prisma.lamaran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lamarans and only return the `id`
     * const lamaranWithIdOnly = await prisma.lamaran.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LamaranUpdateManyAndReturnArgs>(args: SelectSubset<T, LamaranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lamaran.
     * @param {LamaranUpsertArgs} args - Arguments to update or create a Lamaran.
     * @example
     * // Update or create a Lamaran
     * const lamaran = await prisma.lamaran.upsert({
     *   create: {
     *     // ... data to create a Lamaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lamaran we want to update
     *   }
     * })
     */
    upsert<T extends LamaranUpsertArgs>(args: SelectSubset<T, LamaranUpsertArgs<ExtArgs>>): Prisma__LamaranClient<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lamarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LamaranCountArgs} args - Arguments to filter Lamarans to count.
     * @example
     * // Count the number of Lamarans
     * const count = await prisma.lamaran.count({
     *   where: {
     *     // ... the filter for the Lamarans we want to count
     *   }
     * })
    **/
    count<T extends LamaranCountArgs>(
      args?: Subset<T, LamaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LamaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lamaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LamaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LamaranAggregateArgs>(args: Subset<T, LamaranAggregateArgs>): Prisma.PrismaPromise<GetLamaranAggregateType<T>>

    /**
     * Group by Lamaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LamaranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LamaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LamaranGroupByArgs['orderBy'] }
        : { orderBy?: LamaranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LamaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLamaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lamaran model
   */
  readonly fields: LamaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lamaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LamaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends PenggunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenggunaDefaultArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lowongan<T extends LowonganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LowonganDefaultArgs<ExtArgs>>): Prisma__LowonganClient<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lamaran model
   */
  interface LamaranFieldRefs {
    readonly id: FieldRef<"Lamaran", 'Int'>
    readonly penggunaId: FieldRef<"Lamaran", 'Int'>
    readonly lowonganId: FieldRef<"Lamaran", 'Int'>
    readonly tanggal: FieldRef<"Lamaran", 'DateTime'>
    readonly waktuPelamaran: FieldRef<"Lamaran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lamaran findUnique
   */
  export type LamaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
    /**
     * Filter, which Lamaran to fetch.
     */
    where: LamaranWhereUniqueInput
  }

  /**
   * Lamaran findUniqueOrThrow
   */
  export type LamaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
    /**
     * Filter, which Lamaran to fetch.
     */
    where: LamaranWhereUniqueInput
  }

  /**
   * Lamaran findFirst
   */
  export type LamaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
    /**
     * Filter, which Lamaran to fetch.
     */
    where?: LamaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lamarans to fetch.
     */
    orderBy?: LamaranOrderByWithRelationInput | LamaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lamarans.
     */
    cursor?: LamaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lamarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lamarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lamarans.
     */
    distinct?: LamaranScalarFieldEnum | LamaranScalarFieldEnum[]
  }

  /**
   * Lamaran findFirstOrThrow
   */
  export type LamaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
    /**
     * Filter, which Lamaran to fetch.
     */
    where?: LamaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lamarans to fetch.
     */
    orderBy?: LamaranOrderByWithRelationInput | LamaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lamarans.
     */
    cursor?: LamaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lamarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lamarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lamarans.
     */
    distinct?: LamaranScalarFieldEnum | LamaranScalarFieldEnum[]
  }

  /**
   * Lamaran findMany
   */
  export type LamaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
    /**
     * Filter, which Lamarans to fetch.
     */
    where?: LamaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lamarans to fetch.
     */
    orderBy?: LamaranOrderByWithRelationInput | LamaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lamarans.
     */
    cursor?: LamaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lamarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lamarans.
     */
    skip?: number
    distinct?: LamaranScalarFieldEnum | LamaranScalarFieldEnum[]
  }

  /**
   * Lamaran create
   */
  export type LamaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
    /**
     * The data needed to create a Lamaran.
     */
    data: XOR<LamaranCreateInput, LamaranUncheckedCreateInput>
  }

  /**
   * Lamaran createMany
   */
  export type LamaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lamarans.
     */
    data: LamaranCreateManyInput | LamaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lamaran createManyAndReturn
   */
  export type LamaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * The data used to create many Lamarans.
     */
    data: LamaranCreateManyInput | LamaranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lamaran update
   */
  export type LamaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
    /**
     * The data needed to update a Lamaran.
     */
    data: XOR<LamaranUpdateInput, LamaranUncheckedUpdateInput>
    /**
     * Choose, which Lamaran to update.
     */
    where: LamaranWhereUniqueInput
  }

  /**
   * Lamaran updateMany
   */
  export type LamaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lamarans.
     */
    data: XOR<LamaranUpdateManyMutationInput, LamaranUncheckedUpdateManyInput>
    /**
     * Filter which Lamarans to update
     */
    where?: LamaranWhereInput
    /**
     * Limit how many Lamarans to update.
     */
    limit?: number
  }

  /**
   * Lamaran updateManyAndReturn
   */
  export type LamaranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * The data used to update Lamarans.
     */
    data: XOR<LamaranUpdateManyMutationInput, LamaranUncheckedUpdateManyInput>
    /**
     * Filter which Lamarans to update
     */
    where?: LamaranWhereInput
    /**
     * Limit how many Lamarans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lamaran upsert
   */
  export type LamaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
    /**
     * The filter to search for the Lamaran to update in case it exists.
     */
    where: LamaranWhereUniqueInput
    /**
     * In case the Lamaran found by the `where` argument doesn't exist, create a new Lamaran with this data.
     */
    create: XOR<LamaranCreateInput, LamaranUncheckedCreateInput>
    /**
     * In case the Lamaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LamaranUpdateInput, LamaranUncheckedUpdateInput>
  }

  /**
   * Lamaran delete
   */
  export type LamaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
    /**
     * Filter which Lamaran to delete.
     */
    where: LamaranWhereUniqueInput
  }

  /**
   * Lamaran deleteMany
   */
  export type LamaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lamarans to delete
     */
    where?: LamaranWhereInput
    /**
     * Limit how many Lamarans to delete.
     */
    limit?: number
  }

  /**
   * Lamaran without action
   */
  export type LamaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
  }


  /**
   * Model Lowongan
   */

  export type AggregateLowongan = {
    _count: LowonganCountAggregateOutputType | null
    _avg: LowonganAvgAggregateOutputType | null
    _sum: LowonganSumAggregateOutputType | null
    _min: LowonganMinAggregateOutputType | null
    _max: LowonganMaxAggregateOutputType | null
  }

  export type LowonganAvgAggregateOutputType = {
    id: number | null
    perusahaanId: number | null
  }

  export type LowonganSumAggregateOutputType = {
    id: number | null
    perusahaanId: number | null
  }

  export type LowonganMinAggregateOutputType = {
    id: number | null
    nama: string | null
    ketentuan: string | null
    persyaratan: string | null
    salary: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan | null
    perusahaanId: number | null
    dibuatPada: Date | null
    expiredAt: Date | null
    linkPendaftaran: string | null
  }

  export type LowonganMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    ketentuan: string | null
    persyaratan: string | null
    salary: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan | null
    perusahaanId: number | null
    dibuatPada: Date | null
    expiredAt: Date | null
    linkPendaftaran: string | null
  }

  export type LowonganCountAggregateOutputType = {
    id: number
    nama: number
    ketentuan: number
    persyaratan: number
    salary: number
    jenisPekerjaan: number
    perusahaanId: number
    dibuatPada: number
    expiredAt: number
    linkPendaftaran: number
    _all: number
  }


  export type LowonganAvgAggregateInputType = {
    id?: true
    perusahaanId?: true
  }

  export type LowonganSumAggregateInputType = {
    id?: true
    perusahaanId?: true
  }

  export type LowonganMinAggregateInputType = {
    id?: true
    nama?: true
    ketentuan?: true
    persyaratan?: true
    salary?: true
    jenisPekerjaan?: true
    perusahaanId?: true
    dibuatPada?: true
    expiredAt?: true
    linkPendaftaran?: true
  }

  export type LowonganMaxAggregateInputType = {
    id?: true
    nama?: true
    ketentuan?: true
    persyaratan?: true
    salary?: true
    jenisPekerjaan?: true
    perusahaanId?: true
    dibuatPada?: true
    expiredAt?: true
    linkPendaftaran?: true
  }

  export type LowonganCountAggregateInputType = {
    id?: true
    nama?: true
    ketentuan?: true
    persyaratan?: true
    salary?: true
    jenisPekerjaan?: true
    perusahaanId?: true
    dibuatPada?: true
    expiredAt?: true
    linkPendaftaran?: true
    _all?: true
  }

  export type LowonganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lowongan to aggregate.
     */
    where?: LowonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lowongans to fetch.
     */
    orderBy?: LowonganOrderByWithRelationInput | LowonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LowonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lowongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lowongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lowongans
    **/
    _count?: true | LowonganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LowonganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LowonganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LowonganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LowonganMaxAggregateInputType
  }

  export type GetLowonganAggregateType<T extends LowonganAggregateArgs> = {
        [P in keyof T & keyof AggregateLowongan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLowongan[P]>
      : GetScalarType<T[P], AggregateLowongan[P]>
  }




  export type LowonganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LowonganWhereInput
    orderBy?: LowonganOrderByWithAggregationInput | LowonganOrderByWithAggregationInput[]
    by: LowonganScalarFieldEnum[] | LowonganScalarFieldEnum
    having?: LowonganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LowonganCountAggregateInputType | true
    _avg?: LowonganAvgAggregateInputType
    _sum?: LowonganSumAggregateInputType
    _min?: LowonganMinAggregateInputType
    _max?: LowonganMaxAggregateInputType
  }

  export type LowonganGroupByOutputType = {
    id: number
    nama: string
    ketentuan: string
    persyaratan: string
    salary: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan
    perusahaanId: number
    dibuatPada: Date
    expiredAt: Date | null
    linkPendaftaran: string | null
    _count: LowonganCountAggregateOutputType | null
    _avg: LowonganAvgAggregateOutputType | null
    _sum: LowonganSumAggregateOutputType | null
    _min: LowonganMinAggregateOutputType | null
    _max: LowonganMaxAggregateOutputType | null
  }

  type GetLowonganGroupByPayload<T extends LowonganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LowonganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LowonganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LowonganGroupByOutputType[P]>
            : GetScalarType<T[P], LowonganGroupByOutputType[P]>
        }
      >
    >


  export type LowonganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    ketentuan?: boolean
    persyaratan?: boolean
    salary?: boolean
    jenisPekerjaan?: boolean
    perusahaanId?: boolean
    dibuatPada?: boolean
    expiredAt?: boolean
    linkPendaftaran?: boolean
    perusahaan?: boolean | PerusahaanDefaultArgs<ExtArgs>
    lamaran?: boolean | Lowongan$lamaranArgs<ExtArgs>
    disimpanOleh?: boolean | Lowongan$disimpanOlehArgs<ExtArgs>
    _count?: boolean | LowonganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lowongan"]>

  export type LowonganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    ketentuan?: boolean
    persyaratan?: boolean
    salary?: boolean
    jenisPekerjaan?: boolean
    perusahaanId?: boolean
    dibuatPada?: boolean
    expiredAt?: boolean
    linkPendaftaran?: boolean
    perusahaan?: boolean | PerusahaanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lowongan"]>

  export type LowonganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    ketentuan?: boolean
    persyaratan?: boolean
    salary?: boolean
    jenisPekerjaan?: boolean
    perusahaanId?: boolean
    dibuatPada?: boolean
    expiredAt?: boolean
    linkPendaftaran?: boolean
    perusahaan?: boolean | PerusahaanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lowongan"]>

  export type LowonganSelectScalar = {
    id?: boolean
    nama?: boolean
    ketentuan?: boolean
    persyaratan?: boolean
    salary?: boolean
    jenisPekerjaan?: boolean
    perusahaanId?: boolean
    dibuatPada?: boolean
    expiredAt?: boolean
    linkPendaftaran?: boolean
  }

  export type LowonganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "ketentuan" | "persyaratan" | "salary" | "jenisPekerjaan" | "perusahaanId" | "dibuatPada" | "expiredAt" | "linkPendaftaran", ExtArgs["result"]["lowongan"]>
  export type LowonganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perusahaan?: boolean | PerusahaanDefaultArgs<ExtArgs>
    lamaran?: boolean | Lowongan$lamaranArgs<ExtArgs>
    disimpanOleh?: boolean | Lowongan$disimpanOlehArgs<ExtArgs>
    _count?: boolean | LowonganCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LowonganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perusahaan?: boolean | PerusahaanDefaultArgs<ExtArgs>
  }
  export type LowonganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perusahaan?: boolean | PerusahaanDefaultArgs<ExtArgs>
  }

  export type $LowonganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lowongan"
    objects: {
      perusahaan: Prisma.$PerusahaanPayload<ExtArgs>
      lamaran: Prisma.$LamaranPayload<ExtArgs>[]
      disimpanOleh: Prisma.$LowonganDisimpanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      ketentuan: string
      persyaratan: string
      salary: string | null
      jenisPekerjaan: $Enums.JenisPekerjaan
      perusahaanId: number
      dibuatPada: Date
      expiredAt: Date | null
      linkPendaftaran: string | null
    }, ExtArgs["result"]["lowongan"]>
    composites: {}
  }

  type LowonganGetPayload<S extends boolean | null | undefined | LowonganDefaultArgs> = $Result.GetResult<Prisma.$LowonganPayload, S>

  type LowonganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LowonganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LowonganCountAggregateInputType | true
    }

  export interface LowonganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lowongan'], meta: { name: 'Lowongan' } }
    /**
     * Find zero or one Lowongan that matches the filter.
     * @param {LowonganFindUniqueArgs} args - Arguments to find a Lowongan
     * @example
     * // Get one Lowongan
     * const lowongan = await prisma.lowongan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LowonganFindUniqueArgs>(args: SelectSubset<T, LowonganFindUniqueArgs<ExtArgs>>): Prisma__LowonganClient<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lowongan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LowonganFindUniqueOrThrowArgs} args - Arguments to find a Lowongan
     * @example
     * // Get one Lowongan
     * const lowongan = await prisma.lowongan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LowonganFindUniqueOrThrowArgs>(args: SelectSubset<T, LowonganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LowonganClient<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lowongan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganFindFirstArgs} args - Arguments to find a Lowongan
     * @example
     * // Get one Lowongan
     * const lowongan = await prisma.lowongan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LowonganFindFirstArgs>(args?: SelectSubset<T, LowonganFindFirstArgs<ExtArgs>>): Prisma__LowonganClient<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lowongan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganFindFirstOrThrowArgs} args - Arguments to find a Lowongan
     * @example
     * // Get one Lowongan
     * const lowongan = await prisma.lowongan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LowonganFindFirstOrThrowArgs>(args?: SelectSubset<T, LowonganFindFirstOrThrowArgs<ExtArgs>>): Prisma__LowonganClient<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lowongans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lowongans
     * const lowongans = await prisma.lowongan.findMany()
     * 
     * // Get first 10 Lowongans
     * const lowongans = await prisma.lowongan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lowonganWithIdOnly = await prisma.lowongan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LowonganFindManyArgs>(args?: SelectSubset<T, LowonganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lowongan.
     * @param {LowonganCreateArgs} args - Arguments to create a Lowongan.
     * @example
     * // Create one Lowongan
     * const Lowongan = await prisma.lowongan.create({
     *   data: {
     *     // ... data to create a Lowongan
     *   }
     * })
     * 
     */
    create<T extends LowonganCreateArgs>(args: SelectSubset<T, LowonganCreateArgs<ExtArgs>>): Prisma__LowonganClient<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lowongans.
     * @param {LowonganCreateManyArgs} args - Arguments to create many Lowongans.
     * @example
     * // Create many Lowongans
     * const lowongan = await prisma.lowongan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LowonganCreateManyArgs>(args?: SelectSubset<T, LowonganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lowongans and returns the data saved in the database.
     * @param {LowonganCreateManyAndReturnArgs} args - Arguments to create many Lowongans.
     * @example
     * // Create many Lowongans
     * const lowongan = await prisma.lowongan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lowongans and only return the `id`
     * const lowonganWithIdOnly = await prisma.lowongan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LowonganCreateManyAndReturnArgs>(args?: SelectSubset<T, LowonganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lowongan.
     * @param {LowonganDeleteArgs} args - Arguments to delete one Lowongan.
     * @example
     * // Delete one Lowongan
     * const Lowongan = await prisma.lowongan.delete({
     *   where: {
     *     // ... filter to delete one Lowongan
     *   }
     * })
     * 
     */
    delete<T extends LowonganDeleteArgs>(args: SelectSubset<T, LowonganDeleteArgs<ExtArgs>>): Prisma__LowonganClient<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lowongan.
     * @param {LowonganUpdateArgs} args - Arguments to update one Lowongan.
     * @example
     * // Update one Lowongan
     * const lowongan = await prisma.lowongan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LowonganUpdateArgs>(args: SelectSubset<T, LowonganUpdateArgs<ExtArgs>>): Prisma__LowonganClient<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lowongans.
     * @param {LowonganDeleteManyArgs} args - Arguments to filter Lowongans to delete.
     * @example
     * // Delete a few Lowongans
     * const { count } = await prisma.lowongan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LowonganDeleteManyArgs>(args?: SelectSubset<T, LowonganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lowongans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lowongans
     * const lowongan = await prisma.lowongan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LowonganUpdateManyArgs>(args: SelectSubset<T, LowonganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lowongans and returns the data updated in the database.
     * @param {LowonganUpdateManyAndReturnArgs} args - Arguments to update many Lowongans.
     * @example
     * // Update many Lowongans
     * const lowongan = await prisma.lowongan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lowongans and only return the `id`
     * const lowonganWithIdOnly = await prisma.lowongan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LowonganUpdateManyAndReturnArgs>(args: SelectSubset<T, LowonganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lowongan.
     * @param {LowonganUpsertArgs} args - Arguments to update or create a Lowongan.
     * @example
     * // Update or create a Lowongan
     * const lowongan = await prisma.lowongan.upsert({
     *   create: {
     *     // ... data to create a Lowongan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lowongan we want to update
     *   }
     * })
     */
    upsert<T extends LowonganUpsertArgs>(args: SelectSubset<T, LowonganUpsertArgs<ExtArgs>>): Prisma__LowonganClient<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lowongans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganCountArgs} args - Arguments to filter Lowongans to count.
     * @example
     * // Count the number of Lowongans
     * const count = await prisma.lowongan.count({
     *   where: {
     *     // ... the filter for the Lowongans we want to count
     *   }
     * })
    **/
    count<T extends LowonganCountArgs>(
      args?: Subset<T, LowonganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LowonganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lowongan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LowonganAggregateArgs>(args: Subset<T, LowonganAggregateArgs>): Prisma.PrismaPromise<GetLowonganAggregateType<T>>

    /**
     * Group by Lowongan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LowonganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LowonganGroupByArgs['orderBy'] }
        : { orderBy?: LowonganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LowonganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLowonganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lowongan model
   */
  readonly fields: LowonganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lowongan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LowonganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perusahaan<T extends PerusahaanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerusahaanDefaultArgs<ExtArgs>>): Prisma__PerusahaanClient<$Result.GetResult<Prisma.$PerusahaanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lamaran<T extends Lowongan$lamaranArgs<ExtArgs> = {}>(args?: Subset<T, Lowongan$lamaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LamaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disimpanOleh<T extends Lowongan$disimpanOlehArgs<ExtArgs> = {}>(args?: Subset<T, Lowongan$disimpanOlehArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lowongan model
   */
  interface LowonganFieldRefs {
    readonly id: FieldRef<"Lowongan", 'Int'>
    readonly nama: FieldRef<"Lowongan", 'String'>
    readonly ketentuan: FieldRef<"Lowongan", 'String'>
    readonly persyaratan: FieldRef<"Lowongan", 'String'>
    readonly salary: FieldRef<"Lowongan", 'String'>
    readonly jenisPekerjaan: FieldRef<"Lowongan", 'JenisPekerjaan'>
    readonly perusahaanId: FieldRef<"Lowongan", 'Int'>
    readonly dibuatPada: FieldRef<"Lowongan", 'DateTime'>
    readonly expiredAt: FieldRef<"Lowongan", 'DateTime'>
    readonly linkPendaftaran: FieldRef<"Lowongan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lowongan findUnique
   */
  export type LowonganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganInclude<ExtArgs> | null
    /**
     * Filter, which Lowongan to fetch.
     */
    where: LowonganWhereUniqueInput
  }

  /**
   * Lowongan findUniqueOrThrow
   */
  export type LowonganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganInclude<ExtArgs> | null
    /**
     * Filter, which Lowongan to fetch.
     */
    where: LowonganWhereUniqueInput
  }

  /**
   * Lowongan findFirst
   */
  export type LowonganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganInclude<ExtArgs> | null
    /**
     * Filter, which Lowongan to fetch.
     */
    where?: LowonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lowongans to fetch.
     */
    orderBy?: LowonganOrderByWithRelationInput | LowonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lowongans.
     */
    cursor?: LowonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lowongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lowongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lowongans.
     */
    distinct?: LowonganScalarFieldEnum | LowonganScalarFieldEnum[]
  }

  /**
   * Lowongan findFirstOrThrow
   */
  export type LowonganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganInclude<ExtArgs> | null
    /**
     * Filter, which Lowongan to fetch.
     */
    where?: LowonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lowongans to fetch.
     */
    orderBy?: LowonganOrderByWithRelationInput | LowonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lowongans.
     */
    cursor?: LowonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lowongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lowongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lowongans.
     */
    distinct?: LowonganScalarFieldEnum | LowonganScalarFieldEnum[]
  }

  /**
   * Lowongan findMany
   */
  export type LowonganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganInclude<ExtArgs> | null
    /**
     * Filter, which Lowongans to fetch.
     */
    where?: LowonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lowongans to fetch.
     */
    orderBy?: LowonganOrderByWithRelationInput | LowonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lowongans.
     */
    cursor?: LowonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lowongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lowongans.
     */
    skip?: number
    distinct?: LowonganScalarFieldEnum | LowonganScalarFieldEnum[]
  }

  /**
   * Lowongan create
   */
  export type LowonganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganInclude<ExtArgs> | null
    /**
     * The data needed to create a Lowongan.
     */
    data: XOR<LowonganCreateInput, LowonganUncheckedCreateInput>
  }

  /**
   * Lowongan createMany
   */
  export type LowonganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lowongans.
     */
    data: LowonganCreateManyInput | LowonganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lowongan createManyAndReturn
   */
  export type LowonganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * The data used to create many Lowongans.
     */
    data: LowonganCreateManyInput | LowonganCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lowongan update
   */
  export type LowonganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganInclude<ExtArgs> | null
    /**
     * The data needed to update a Lowongan.
     */
    data: XOR<LowonganUpdateInput, LowonganUncheckedUpdateInput>
    /**
     * Choose, which Lowongan to update.
     */
    where: LowonganWhereUniqueInput
  }

  /**
   * Lowongan updateMany
   */
  export type LowonganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lowongans.
     */
    data: XOR<LowonganUpdateManyMutationInput, LowonganUncheckedUpdateManyInput>
    /**
     * Filter which Lowongans to update
     */
    where?: LowonganWhereInput
    /**
     * Limit how many Lowongans to update.
     */
    limit?: number
  }

  /**
   * Lowongan updateManyAndReturn
   */
  export type LowonganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * The data used to update Lowongans.
     */
    data: XOR<LowonganUpdateManyMutationInput, LowonganUncheckedUpdateManyInput>
    /**
     * Filter which Lowongans to update
     */
    where?: LowonganWhereInput
    /**
     * Limit how many Lowongans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lowongan upsert
   */
  export type LowonganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganInclude<ExtArgs> | null
    /**
     * The filter to search for the Lowongan to update in case it exists.
     */
    where: LowonganWhereUniqueInput
    /**
     * In case the Lowongan found by the `where` argument doesn't exist, create a new Lowongan with this data.
     */
    create: XOR<LowonganCreateInput, LowonganUncheckedCreateInput>
    /**
     * In case the Lowongan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LowonganUpdateInput, LowonganUncheckedUpdateInput>
  }

  /**
   * Lowongan delete
   */
  export type LowonganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganInclude<ExtArgs> | null
    /**
     * Filter which Lowongan to delete.
     */
    where: LowonganWhereUniqueInput
  }

  /**
   * Lowongan deleteMany
   */
  export type LowonganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lowongans to delete
     */
    where?: LowonganWhereInput
    /**
     * Limit how many Lowongans to delete.
     */
    limit?: number
  }

  /**
   * Lowongan.lamaran
   */
  export type Lowongan$lamaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamaran
     */
    select?: LamaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamaran
     */
    omit?: LamaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LamaranInclude<ExtArgs> | null
    where?: LamaranWhereInput
    orderBy?: LamaranOrderByWithRelationInput | LamaranOrderByWithRelationInput[]
    cursor?: LamaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LamaranScalarFieldEnum | LamaranScalarFieldEnum[]
  }

  /**
   * Lowongan.disimpanOleh
   */
  export type Lowongan$disimpanOlehArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
    where?: LowonganDisimpanWhereInput
    orderBy?: LowonganDisimpanOrderByWithRelationInput | LowonganDisimpanOrderByWithRelationInput[]
    cursor?: LowonganDisimpanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LowonganDisimpanScalarFieldEnum | LowonganDisimpanScalarFieldEnum[]
  }

  /**
   * Lowongan without action
   */
  export type LowonganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lowongan
     */
    select?: LowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lowongan
     */
    omit?: LowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganInclude<ExtArgs> | null
  }


  /**
   * Model LowonganDisimpan
   */

  export type AggregateLowonganDisimpan = {
    _count: LowonganDisimpanCountAggregateOutputType | null
    _avg: LowonganDisimpanAvgAggregateOutputType | null
    _sum: LowonganDisimpanSumAggregateOutputType | null
    _min: LowonganDisimpanMinAggregateOutputType | null
    _max: LowonganDisimpanMaxAggregateOutputType | null
  }

  export type LowonganDisimpanAvgAggregateOutputType = {
    id: number | null
    penggunaId: number | null
    lowonganId: number | null
  }

  export type LowonganDisimpanSumAggregateOutputType = {
    id: number | null
    penggunaId: number | null
    lowonganId: number | null
  }

  export type LowonganDisimpanMinAggregateOutputType = {
    id: number | null
    penggunaId: number | null
    lowonganId: number | null
    tanggal: Date | null
  }

  export type LowonganDisimpanMaxAggregateOutputType = {
    id: number | null
    penggunaId: number | null
    lowonganId: number | null
    tanggal: Date | null
  }

  export type LowonganDisimpanCountAggregateOutputType = {
    id: number
    penggunaId: number
    lowonganId: number
    tanggal: number
    _all: number
  }


  export type LowonganDisimpanAvgAggregateInputType = {
    id?: true
    penggunaId?: true
    lowonganId?: true
  }

  export type LowonganDisimpanSumAggregateInputType = {
    id?: true
    penggunaId?: true
    lowonganId?: true
  }

  export type LowonganDisimpanMinAggregateInputType = {
    id?: true
    penggunaId?: true
    lowonganId?: true
    tanggal?: true
  }

  export type LowonganDisimpanMaxAggregateInputType = {
    id?: true
    penggunaId?: true
    lowonganId?: true
    tanggal?: true
  }

  export type LowonganDisimpanCountAggregateInputType = {
    id?: true
    penggunaId?: true
    lowonganId?: true
    tanggal?: true
    _all?: true
  }

  export type LowonganDisimpanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LowonganDisimpan to aggregate.
     */
    where?: LowonganDisimpanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LowonganDisimpans to fetch.
     */
    orderBy?: LowonganDisimpanOrderByWithRelationInput | LowonganDisimpanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LowonganDisimpanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LowonganDisimpans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LowonganDisimpans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LowonganDisimpans
    **/
    _count?: true | LowonganDisimpanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LowonganDisimpanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LowonganDisimpanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LowonganDisimpanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LowonganDisimpanMaxAggregateInputType
  }

  export type GetLowonganDisimpanAggregateType<T extends LowonganDisimpanAggregateArgs> = {
        [P in keyof T & keyof AggregateLowonganDisimpan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLowonganDisimpan[P]>
      : GetScalarType<T[P], AggregateLowonganDisimpan[P]>
  }




  export type LowonganDisimpanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LowonganDisimpanWhereInput
    orderBy?: LowonganDisimpanOrderByWithAggregationInput | LowonganDisimpanOrderByWithAggregationInput[]
    by: LowonganDisimpanScalarFieldEnum[] | LowonganDisimpanScalarFieldEnum
    having?: LowonganDisimpanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LowonganDisimpanCountAggregateInputType | true
    _avg?: LowonganDisimpanAvgAggregateInputType
    _sum?: LowonganDisimpanSumAggregateInputType
    _min?: LowonganDisimpanMinAggregateInputType
    _max?: LowonganDisimpanMaxAggregateInputType
  }

  export type LowonganDisimpanGroupByOutputType = {
    id: number
    penggunaId: number
    lowonganId: number
    tanggal: Date
    _count: LowonganDisimpanCountAggregateOutputType | null
    _avg: LowonganDisimpanAvgAggregateOutputType | null
    _sum: LowonganDisimpanSumAggregateOutputType | null
    _min: LowonganDisimpanMinAggregateOutputType | null
    _max: LowonganDisimpanMaxAggregateOutputType | null
  }

  type GetLowonganDisimpanGroupByPayload<T extends LowonganDisimpanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LowonganDisimpanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LowonganDisimpanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LowonganDisimpanGroupByOutputType[P]>
            : GetScalarType<T[P], LowonganDisimpanGroupByOutputType[P]>
        }
      >
    >


  export type LowonganDisimpanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penggunaId?: boolean
    lowonganId?: boolean
    tanggal?: boolean
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lowonganDisimpan"]>

  export type LowonganDisimpanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penggunaId?: boolean
    lowonganId?: boolean
    tanggal?: boolean
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lowonganDisimpan"]>

  export type LowonganDisimpanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penggunaId?: boolean
    lowonganId?: boolean
    tanggal?: boolean
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lowonganDisimpan"]>

  export type LowonganDisimpanSelectScalar = {
    id?: boolean
    penggunaId?: boolean
    lowonganId?: boolean
    tanggal?: boolean
  }

  export type LowonganDisimpanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "penggunaId" | "lowonganId" | "tanggal", ExtArgs["result"]["lowonganDisimpan"]>
  export type LowonganDisimpanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }
  export type LowonganDisimpanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }
  export type LowonganDisimpanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | PenggunaDefaultArgs<ExtArgs>
    lowongan?: boolean | LowonganDefaultArgs<ExtArgs>
  }

  export type $LowonganDisimpanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LowonganDisimpan"
    objects: {
      pengguna: Prisma.$PenggunaPayload<ExtArgs>
      lowongan: Prisma.$LowonganPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      penggunaId: number
      lowonganId: number
      tanggal: Date
    }, ExtArgs["result"]["lowonganDisimpan"]>
    composites: {}
  }

  type LowonganDisimpanGetPayload<S extends boolean | null | undefined | LowonganDisimpanDefaultArgs> = $Result.GetResult<Prisma.$LowonganDisimpanPayload, S>

  type LowonganDisimpanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LowonganDisimpanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LowonganDisimpanCountAggregateInputType | true
    }

  export interface LowonganDisimpanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LowonganDisimpan'], meta: { name: 'LowonganDisimpan' } }
    /**
     * Find zero or one LowonganDisimpan that matches the filter.
     * @param {LowonganDisimpanFindUniqueArgs} args - Arguments to find a LowonganDisimpan
     * @example
     * // Get one LowonganDisimpan
     * const lowonganDisimpan = await prisma.lowonganDisimpan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LowonganDisimpanFindUniqueArgs>(args: SelectSubset<T, LowonganDisimpanFindUniqueArgs<ExtArgs>>): Prisma__LowonganDisimpanClient<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LowonganDisimpan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LowonganDisimpanFindUniqueOrThrowArgs} args - Arguments to find a LowonganDisimpan
     * @example
     * // Get one LowonganDisimpan
     * const lowonganDisimpan = await prisma.lowonganDisimpan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LowonganDisimpanFindUniqueOrThrowArgs>(args: SelectSubset<T, LowonganDisimpanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LowonganDisimpanClient<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LowonganDisimpan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganDisimpanFindFirstArgs} args - Arguments to find a LowonganDisimpan
     * @example
     * // Get one LowonganDisimpan
     * const lowonganDisimpan = await prisma.lowonganDisimpan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LowonganDisimpanFindFirstArgs>(args?: SelectSubset<T, LowonganDisimpanFindFirstArgs<ExtArgs>>): Prisma__LowonganDisimpanClient<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LowonganDisimpan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganDisimpanFindFirstOrThrowArgs} args - Arguments to find a LowonganDisimpan
     * @example
     * // Get one LowonganDisimpan
     * const lowonganDisimpan = await prisma.lowonganDisimpan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LowonganDisimpanFindFirstOrThrowArgs>(args?: SelectSubset<T, LowonganDisimpanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LowonganDisimpanClient<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LowonganDisimpans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganDisimpanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LowonganDisimpans
     * const lowonganDisimpans = await prisma.lowonganDisimpan.findMany()
     * 
     * // Get first 10 LowonganDisimpans
     * const lowonganDisimpans = await prisma.lowonganDisimpan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lowonganDisimpanWithIdOnly = await prisma.lowonganDisimpan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LowonganDisimpanFindManyArgs>(args?: SelectSubset<T, LowonganDisimpanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LowonganDisimpan.
     * @param {LowonganDisimpanCreateArgs} args - Arguments to create a LowonganDisimpan.
     * @example
     * // Create one LowonganDisimpan
     * const LowonganDisimpan = await prisma.lowonganDisimpan.create({
     *   data: {
     *     // ... data to create a LowonganDisimpan
     *   }
     * })
     * 
     */
    create<T extends LowonganDisimpanCreateArgs>(args: SelectSubset<T, LowonganDisimpanCreateArgs<ExtArgs>>): Prisma__LowonganDisimpanClient<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LowonganDisimpans.
     * @param {LowonganDisimpanCreateManyArgs} args - Arguments to create many LowonganDisimpans.
     * @example
     * // Create many LowonganDisimpans
     * const lowonganDisimpan = await prisma.lowonganDisimpan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LowonganDisimpanCreateManyArgs>(args?: SelectSubset<T, LowonganDisimpanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LowonganDisimpans and returns the data saved in the database.
     * @param {LowonganDisimpanCreateManyAndReturnArgs} args - Arguments to create many LowonganDisimpans.
     * @example
     * // Create many LowonganDisimpans
     * const lowonganDisimpan = await prisma.lowonganDisimpan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LowonganDisimpans and only return the `id`
     * const lowonganDisimpanWithIdOnly = await prisma.lowonganDisimpan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LowonganDisimpanCreateManyAndReturnArgs>(args?: SelectSubset<T, LowonganDisimpanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LowonganDisimpan.
     * @param {LowonganDisimpanDeleteArgs} args - Arguments to delete one LowonganDisimpan.
     * @example
     * // Delete one LowonganDisimpan
     * const LowonganDisimpan = await prisma.lowonganDisimpan.delete({
     *   where: {
     *     // ... filter to delete one LowonganDisimpan
     *   }
     * })
     * 
     */
    delete<T extends LowonganDisimpanDeleteArgs>(args: SelectSubset<T, LowonganDisimpanDeleteArgs<ExtArgs>>): Prisma__LowonganDisimpanClient<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LowonganDisimpan.
     * @param {LowonganDisimpanUpdateArgs} args - Arguments to update one LowonganDisimpan.
     * @example
     * // Update one LowonganDisimpan
     * const lowonganDisimpan = await prisma.lowonganDisimpan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LowonganDisimpanUpdateArgs>(args: SelectSubset<T, LowonganDisimpanUpdateArgs<ExtArgs>>): Prisma__LowonganDisimpanClient<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LowonganDisimpans.
     * @param {LowonganDisimpanDeleteManyArgs} args - Arguments to filter LowonganDisimpans to delete.
     * @example
     * // Delete a few LowonganDisimpans
     * const { count } = await prisma.lowonganDisimpan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LowonganDisimpanDeleteManyArgs>(args?: SelectSubset<T, LowonganDisimpanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LowonganDisimpans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganDisimpanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LowonganDisimpans
     * const lowonganDisimpan = await prisma.lowonganDisimpan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LowonganDisimpanUpdateManyArgs>(args: SelectSubset<T, LowonganDisimpanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LowonganDisimpans and returns the data updated in the database.
     * @param {LowonganDisimpanUpdateManyAndReturnArgs} args - Arguments to update many LowonganDisimpans.
     * @example
     * // Update many LowonganDisimpans
     * const lowonganDisimpan = await prisma.lowonganDisimpan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LowonganDisimpans and only return the `id`
     * const lowonganDisimpanWithIdOnly = await prisma.lowonganDisimpan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LowonganDisimpanUpdateManyAndReturnArgs>(args: SelectSubset<T, LowonganDisimpanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LowonganDisimpan.
     * @param {LowonganDisimpanUpsertArgs} args - Arguments to update or create a LowonganDisimpan.
     * @example
     * // Update or create a LowonganDisimpan
     * const lowonganDisimpan = await prisma.lowonganDisimpan.upsert({
     *   create: {
     *     // ... data to create a LowonganDisimpan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LowonganDisimpan we want to update
     *   }
     * })
     */
    upsert<T extends LowonganDisimpanUpsertArgs>(args: SelectSubset<T, LowonganDisimpanUpsertArgs<ExtArgs>>): Prisma__LowonganDisimpanClient<$Result.GetResult<Prisma.$LowonganDisimpanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LowonganDisimpans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganDisimpanCountArgs} args - Arguments to filter LowonganDisimpans to count.
     * @example
     * // Count the number of LowonganDisimpans
     * const count = await prisma.lowonganDisimpan.count({
     *   where: {
     *     // ... the filter for the LowonganDisimpans we want to count
     *   }
     * })
    **/
    count<T extends LowonganDisimpanCountArgs>(
      args?: Subset<T, LowonganDisimpanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LowonganDisimpanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LowonganDisimpan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganDisimpanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LowonganDisimpanAggregateArgs>(args: Subset<T, LowonganDisimpanAggregateArgs>): Prisma.PrismaPromise<GetLowonganDisimpanAggregateType<T>>

    /**
     * Group by LowonganDisimpan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganDisimpanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LowonganDisimpanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LowonganDisimpanGroupByArgs['orderBy'] }
        : { orderBy?: LowonganDisimpanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LowonganDisimpanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLowonganDisimpanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LowonganDisimpan model
   */
  readonly fields: LowonganDisimpanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LowonganDisimpan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LowonganDisimpanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends PenggunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenggunaDefaultArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lowongan<T extends LowonganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LowonganDefaultArgs<ExtArgs>>): Prisma__LowonganClient<$Result.GetResult<Prisma.$LowonganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LowonganDisimpan model
   */
  interface LowonganDisimpanFieldRefs {
    readonly id: FieldRef<"LowonganDisimpan", 'Int'>
    readonly penggunaId: FieldRef<"LowonganDisimpan", 'Int'>
    readonly lowonganId: FieldRef<"LowonganDisimpan", 'Int'>
    readonly tanggal: FieldRef<"LowonganDisimpan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LowonganDisimpan findUnique
   */
  export type LowonganDisimpanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
    /**
     * Filter, which LowonganDisimpan to fetch.
     */
    where: LowonganDisimpanWhereUniqueInput
  }

  /**
   * LowonganDisimpan findUniqueOrThrow
   */
  export type LowonganDisimpanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
    /**
     * Filter, which LowonganDisimpan to fetch.
     */
    where: LowonganDisimpanWhereUniqueInput
  }

  /**
   * LowonganDisimpan findFirst
   */
  export type LowonganDisimpanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
    /**
     * Filter, which LowonganDisimpan to fetch.
     */
    where?: LowonganDisimpanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LowonganDisimpans to fetch.
     */
    orderBy?: LowonganDisimpanOrderByWithRelationInput | LowonganDisimpanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LowonganDisimpans.
     */
    cursor?: LowonganDisimpanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LowonganDisimpans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LowonganDisimpans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LowonganDisimpans.
     */
    distinct?: LowonganDisimpanScalarFieldEnum | LowonganDisimpanScalarFieldEnum[]
  }

  /**
   * LowonganDisimpan findFirstOrThrow
   */
  export type LowonganDisimpanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
    /**
     * Filter, which LowonganDisimpan to fetch.
     */
    where?: LowonganDisimpanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LowonganDisimpans to fetch.
     */
    orderBy?: LowonganDisimpanOrderByWithRelationInput | LowonganDisimpanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LowonganDisimpans.
     */
    cursor?: LowonganDisimpanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LowonganDisimpans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LowonganDisimpans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LowonganDisimpans.
     */
    distinct?: LowonganDisimpanScalarFieldEnum | LowonganDisimpanScalarFieldEnum[]
  }

  /**
   * LowonganDisimpan findMany
   */
  export type LowonganDisimpanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
    /**
     * Filter, which LowonganDisimpans to fetch.
     */
    where?: LowonganDisimpanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LowonganDisimpans to fetch.
     */
    orderBy?: LowonganDisimpanOrderByWithRelationInput | LowonganDisimpanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LowonganDisimpans.
     */
    cursor?: LowonganDisimpanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LowonganDisimpans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LowonganDisimpans.
     */
    skip?: number
    distinct?: LowonganDisimpanScalarFieldEnum | LowonganDisimpanScalarFieldEnum[]
  }

  /**
   * LowonganDisimpan create
   */
  export type LowonganDisimpanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
    /**
     * The data needed to create a LowonganDisimpan.
     */
    data: XOR<LowonganDisimpanCreateInput, LowonganDisimpanUncheckedCreateInput>
  }

  /**
   * LowonganDisimpan createMany
   */
  export type LowonganDisimpanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LowonganDisimpans.
     */
    data: LowonganDisimpanCreateManyInput | LowonganDisimpanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LowonganDisimpan createManyAndReturn
   */
  export type LowonganDisimpanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * The data used to create many LowonganDisimpans.
     */
    data: LowonganDisimpanCreateManyInput | LowonganDisimpanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LowonganDisimpan update
   */
  export type LowonganDisimpanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
    /**
     * The data needed to update a LowonganDisimpan.
     */
    data: XOR<LowonganDisimpanUpdateInput, LowonganDisimpanUncheckedUpdateInput>
    /**
     * Choose, which LowonganDisimpan to update.
     */
    where: LowonganDisimpanWhereUniqueInput
  }

  /**
   * LowonganDisimpan updateMany
   */
  export type LowonganDisimpanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LowonganDisimpans.
     */
    data: XOR<LowonganDisimpanUpdateManyMutationInput, LowonganDisimpanUncheckedUpdateManyInput>
    /**
     * Filter which LowonganDisimpans to update
     */
    where?: LowonganDisimpanWhereInput
    /**
     * Limit how many LowonganDisimpans to update.
     */
    limit?: number
  }

  /**
   * LowonganDisimpan updateManyAndReturn
   */
  export type LowonganDisimpanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * The data used to update LowonganDisimpans.
     */
    data: XOR<LowonganDisimpanUpdateManyMutationInput, LowonganDisimpanUncheckedUpdateManyInput>
    /**
     * Filter which LowonganDisimpans to update
     */
    where?: LowonganDisimpanWhereInput
    /**
     * Limit how many LowonganDisimpans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LowonganDisimpan upsert
   */
  export type LowonganDisimpanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
    /**
     * The filter to search for the LowonganDisimpan to update in case it exists.
     */
    where: LowonganDisimpanWhereUniqueInput
    /**
     * In case the LowonganDisimpan found by the `where` argument doesn't exist, create a new LowonganDisimpan with this data.
     */
    create: XOR<LowonganDisimpanCreateInput, LowonganDisimpanUncheckedCreateInput>
    /**
     * In case the LowonganDisimpan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LowonganDisimpanUpdateInput, LowonganDisimpanUncheckedUpdateInput>
  }

  /**
   * LowonganDisimpan delete
   */
  export type LowonganDisimpanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
    /**
     * Filter which LowonganDisimpan to delete.
     */
    where: LowonganDisimpanWhereUniqueInput
  }

  /**
   * LowonganDisimpan deleteMany
   */
  export type LowonganDisimpanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LowonganDisimpans to delete
     */
    where?: LowonganDisimpanWhereInput
    /**
     * Limit how many LowonganDisimpans to delete.
     */
    limit?: number
  }

  /**
   * LowonganDisimpan without action
   */
  export type LowonganDisimpanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganDisimpan
     */
    select?: LowonganDisimpanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LowonganDisimpan
     */
    omit?: LowonganDisimpanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LowonganDisimpanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PenggunaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    katasandi: 'katasandi',
    peran: 'peran',
    nisn: 'nisn',
    alamat: 'alamat',
    telepon: 'telepon',
    tanggalLahir: 'tanggalLahir',
    jenisKelamin: 'jenisKelamin',
    dibuatPada: 'dibuatPada'
  };

  export type PenggunaScalarFieldEnum = (typeof PenggunaScalarFieldEnum)[keyof typeof PenggunaScalarFieldEnum]


  export const PerusahaanScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    gambar: 'gambar',
    alamat: 'alamat',
    email: 'email',
    telepon: 'telepon',
    deskripsi: 'deskripsi'
  };

  export type PerusahaanScalarFieldEnum = (typeof PerusahaanScalarFieldEnum)[keyof typeof PerusahaanScalarFieldEnum]


  export const LamaranScalarFieldEnum: {
    id: 'id',
    penggunaId: 'penggunaId',
    lowonganId: 'lowonganId',
    tanggal: 'tanggal',
    waktuPelamaran: 'waktuPelamaran'
  };

  export type LamaranScalarFieldEnum = (typeof LamaranScalarFieldEnum)[keyof typeof LamaranScalarFieldEnum]


  export const LowonganScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    ketentuan: 'ketentuan',
    persyaratan: 'persyaratan',
    salary: 'salary',
    jenisPekerjaan: 'jenisPekerjaan',
    perusahaanId: 'perusahaanId',
    dibuatPada: 'dibuatPada',
    expiredAt: 'expiredAt',
    linkPendaftaran: 'linkPendaftaran'
  };

  export type LowonganScalarFieldEnum = (typeof LowonganScalarFieldEnum)[keyof typeof LowonganScalarFieldEnum]


  export const LowonganDisimpanScalarFieldEnum: {
    id: 'id',
    penggunaId: 'penggunaId',
    lowonganId: 'lowonganId',
    tanggal: 'tanggal'
  };

  export type LowonganDisimpanScalarFieldEnum = (typeof LowonganDisimpanScalarFieldEnum)[keyof typeof LowonganDisimpanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PeranPengguna'
   */
  export type EnumPeranPenggunaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeranPengguna'>
    


  /**
   * Reference to a field of type 'PeranPengguna[]'
   */
  export type ListEnumPeranPenggunaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeranPengguna[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'JenisKelamin'
   */
  export type EnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin'>
    


  /**
   * Reference to a field of type 'JenisKelamin[]'
   */
  export type ListEnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin[]'>
    


  /**
   * Reference to a field of type 'JenisPekerjaan'
   */
  export type EnumJenisPekerjaanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisPekerjaan'>
    


  /**
   * Reference to a field of type 'JenisPekerjaan[]'
   */
  export type ListEnumJenisPekerjaanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisPekerjaan[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PenggunaWhereInput = {
    AND?: PenggunaWhereInput | PenggunaWhereInput[]
    OR?: PenggunaWhereInput[]
    NOT?: PenggunaWhereInput | PenggunaWhereInput[]
    id?: IntFilter<"Pengguna"> | number
    nama?: StringFilter<"Pengguna"> | string
    email?: StringFilter<"Pengguna"> | string
    katasandi?: StringFilter<"Pengguna"> | string
    peran?: EnumPeranPenggunaFilter<"Pengguna"> | $Enums.PeranPengguna
    nisn?: StringFilter<"Pengguna"> | string
    alamat?: StringNullableFilter<"Pengguna"> | string | null
    telepon?: StringNullableFilter<"Pengguna"> | string | null
    tanggalLahir?: DateTimeNullableFilter<"Pengguna"> | Date | string | null
    jenisKelamin?: EnumJenisKelaminNullableFilter<"Pengguna"> | $Enums.JenisKelamin | null
    dibuatPada?: DateTimeFilter<"Pengguna"> | Date | string
    lamaran?: LamaranListRelationFilter
    lowonganDisimpan?: LowonganDisimpanListRelationFilter
  }

  export type PenggunaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    katasandi?: SortOrder
    peran?: SortOrder
    nisn?: SortOrder
    alamat?: SortOrderInput | SortOrder
    telepon?: SortOrderInput | SortOrder
    tanggalLahir?: SortOrderInput | SortOrder
    jenisKelamin?: SortOrderInput | SortOrder
    dibuatPada?: SortOrder
    lamaran?: LamaranOrderByRelationAggregateInput
    lowonganDisimpan?: LowonganDisimpanOrderByRelationAggregateInput
  }

  export type PenggunaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    nisn?: string
    AND?: PenggunaWhereInput | PenggunaWhereInput[]
    OR?: PenggunaWhereInput[]
    NOT?: PenggunaWhereInput | PenggunaWhereInput[]
    nama?: StringFilter<"Pengguna"> | string
    katasandi?: StringFilter<"Pengguna"> | string
    peran?: EnumPeranPenggunaFilter<"Pengguna"> | $Enums.PeranPengguna
    alamat?: StringNullableFilter<"Pengguna"> | string | null
    telepon?: StringNullableFilter<"Pengguna"> | string | null
    tanggalLahir?: DateTimeNullableFilter<"Pengguna"> | Date | string | null
    jenisKelamin?: EnumJenisKelaminNullableFilter<"Pengguna"> | $Enums.JenisKelamin | null
    dibuatPada?: DateTimeFilter<"Pengguna"> | Date | string
    lamaran?: LamaranListRelationFilter
    lowonganDisimpan?: LowonganDisimpanListRelationFilter
  }, "id" | "email" | "nisn">

  export type PenggunaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    katasandi?: SortOrder
    peran?: SortOrder
    nisn?: SortOrder
    alamat?: SortOrderInput | SortOrder
    telepon?: SortOrderInput | SortOrder
    tanggalLahir?: SortOrderInput | SortOrder
    jenisKelamin?: SortOrderInput | SortOrder
    dibuatPada?: SortOrder
    _count?: PenggunaCountOrderByAggregateInput
    _avg?: PenggunaAvgOrderByAggregateInput
    _max?: PenggunaMaxOrderByAggregateInput
    _min?: PenggunaMinOrderByAggregateInput
    _sum?: PenggunaSumOrderByAggregateInput
  }

  export type PenggunaScalarWhereWithAggregatesInput = {
    AND?: PenggunaScalarWhereWithAggregatesInput | PenggunaScalarWhereWithAggregatesInput[]
    OR?: PenggunaScalarWhereWithAggregatesInput[]
    NOT?: PenggunaScalarWhereWithAggregatesInput | PenggunaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pengguna"> | number
    nama?: StringWithAggregatesFilter<"Pengguna"> | string
    email?: StringWithAggregatesFilter<"Pengguna"> | string
    katasandi?: StringWithAggregatesFilter<"Pengguna"> | string
    peran?: EnumPeranPenggunaWithAggregatesFilter<"Pengguna"> | $Enums.PeranPengguna
    nisn?: StringWithAggregatesFilter<"Pengguna"> | string
    alamat?: StringNullableWithAggregatesFilter<"Pengguna"> | string | null
    telepon?: StringNullableWithAggregatesFilter<"Pengguna"> | string | null
    tanggalLahir?: DateTimeNullableWithAggregatesFilter<"Pengguna"> | Date | string | null
    jenisKelamin?: EnumJenisKelaminNullableWithAggregatesFilter<"Pengguna"> | $Enums.JenisKelamin | null
    dibuatPada?: DateTimeWithAggregatesFilter<"Pengguna"> | Date | string
  }

  export type PerusahaanWhereInput = {
    AND?: PerusahaanWhereInput | PerusahaanWhereInput[]
    OR?: PerusahaanWhereInput[]
    NOT?: PerusahaanWhereInput | PerusahaanWhereInput[]
    id?: IntFilter<"Perusahaan"> | number
    nama?: StringFilter<"Perusahaan"> | string
    gambar?: StringNullableFilter<"Perusahaan"> | string | null
    alamat?: StringFilter<"Perusahaan"> | string
    email?: StringFilter<"Perusahaan"> | string
    telepon?: StringNullableFilter<"Perusahaan"> | string | null
    deskripsi?: StringNullableFilter<"Perusahaan"> | string | null
    lowongan?: LowonganListRelationFilter
  }

  export type PerusahaanOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    gambar?: SortOrderInput | SortOrder
    alamat?: SortOrder
    email?: SortOrder
    telepon?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    lowongan?: LowonganOrderByRelationAggregateInput
  }

  export type PerusahaanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: PerusahaanWhereInput | PerusahaanWhereInput[]
    OR?: PerusahaanWhereInput[]
    NOT?: PerusahaanWhereInput | PerusahaanWhereInput[]
    nama?: StringFilter<"Perusahaan"> | string
    gambar?: StringNullableFilter<"Perusahaan"> | string | null
    alamat?: StringFilter<"Perusahaan"> | string
    telepon?: StringNullableFilter<"Perusahaan"> | string | null
    deskripsi?: StringNullableFilter<"Perusahaan"> | string | null
    lowongan?: LowonganListRelationFilter
  }, "id" | "email">

  export type PerusahaanOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    gambar?: SortOrderInput | SortOrder
    alamat?: SortOrder
    email?: SortOrder
    telepon?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    _count?: PerusahaanCountOrderByAggregateInput
    _avg?: PerusahaanAvgOrderByAggregateInput
    _max?: PerusahaanMaxOrderByAggregateInput
    _min?: PerusahaanMinOrderByAggregateInput
    _sum?: PerusahaanSumOrderByAggregateInput
  }

  export type PerusahaanScalarWhereWithAggregatesInput = {
    AND?: PerusahaanScalarWhereWithAggregatesInput | PerusahaanScalarWhereWithAggregatesInput[]
    OR?: PerusahaanScalarWhereWithAggregatesInput[]
    NOT?: PerusahaanScalarWhereWithAggregatesInput | PerusahaanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Perusahaan"> | number
    nama?: StringWithAggregatesFilter<"Perusahaan"> | string
    gambar?: StringNullableWithAggregatesFilter<"Perusahaan"> | string | null
    alamat?: StringWithAggregatesFilter<"Perusahaan"> | string
    email?: StringWithAggregatesFilter<"Perusahaan"> | string
    telepon?: StringNullableWithAggregatesFilter<"Perusahaan"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"Perusahaan"> | string | null
  }

  export type LamaranWhereInput = {
    AND?: LamaranWhereInput | LamaranWhereInput[]
    OR?: LamaranWhereInput[]
    NOT?: LamaranWhereInput | LamaranWhereInput[]
    id?: IntFilter<"Lamaran"> | number
    penggunaId?: IntFilter<"Lamaran"> | number
    lowonganId?: IntFilter<"Lamaran"> | number
    tanggal?: DateTimeFilter<"Lamaran"> | Date | string
    waktuPelamaran?: DateTimeNullableFilter<"Lamaran"> | Date | string | null
    pengguna?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
    lowongan?: XOR<LowonganScalarRelationFilter, LowonganWhereInput>
  }

  export type LamaranOrderByWithRelationInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
    tanggal?: SortOrder
    waktuPelamaran?: SortOrderInput | SortOrder
    pengguna?: PenggunaOrderByWithRelationInput
    lowongan?: LowonganOrderByWithRelationInput
  }

  export type LamaranWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LamaranWhereInput | LamaranWhereInput[]
    OR?: LamaranWhereInput[]
    NOT?: LamaranWhereInput | LamaranWhereInput[]
    penggunaId?: IntFilter<"Lamaran"> | number
    lowonganId?: IntFilter<"Lamaran"> | number
    tanggal?: DateTimeFilter<"Lamaran"> | Date | string
    waktuPelamaran?: DateTimeNullableFilter<"Lamaran"> | Date | string | null
    pengguna?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
    lowongan?: XOR<LowonganScalarRelationFilter, LowonganWhereInput>
  }, "id">

  export type LamaranOrderByWithAggregationInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
    tanggal?: SortOrder
    waktuPelamaran?: SortOrderInput | SortOrder
    _count?: LamaranCountOrderByAggregateInput
    _avg?: LamaranAvgOrderByAggregateInput
    _max?: LamaranMaxOrderByAggregateInput
    _min?: LamaranMinOrderByAggregateInput
    _sum?: LamaranSumOrderByAggregateInput
  }

  export type LamaranScalarWhereWithAggregatesInput = {
    AND?: LamaranScalarWhereWithAggregatesInput | LamaranScalarWhereWithAggregatesInput[]
    OR?: LamaranScalarWhereWithAggregatesInput[]
    NOT?: LamaranScalarWhereWithAggregatesInput | LamaranScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lamaran"> | number
    penggunaId?: IntWithAggregatesFilter<"Lamaran"> | number
    lowonganId?: IntWithAggregatesFilter<"Lamaran"> | number
    tanggal?: DateTimeWithAggregatesFilter<"Lamaran"> | Date | string
    waktuPelamaran?: DateTimeNullableWithAggregatesFilter<"Lamaran"> | Date | string | null
  }

  export type LowonganWhereInput = {
    AND?: LowonganWhereInput | LowonganWhereInput[]
    OR?: LowonganWhereInput[]
    NOT?: LowonganWhereInput | LowonganWhereInput[]
    id?: IntFilter<"Lowongan"> | number
    nama?: StringFilter<"Lowongan"> | string
    ketentuan?: StringFilter<"Lowongan"> | string
    persyaratan?: StringFilter<"Lowongan"> | string
    salary?: StringNullableFilter<"Lowongan"> | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFilter<"Lowongan"> | $Enums.JenisPekerjaan
    perusahaanId?: IntFilter<"Lowongan"> | number
    dibuatPada?: DateTimeFilter<"Lowongan"> | Date | string
    expiredAt?: DateTimeNullableFilter<"Lowongan"> | Date | string | null
    linkPendaftaran?: StringNullableFilter<"Lowongan"> | string | null
    perusahaan?: XOR<PerusahaanScalarRelationFilter, PerusahaanWhereInput>
    lamaran?: LamaranListRelationFilter
    disimpanOleh?: LowonganDisimpanListRelationFilter
  }

  export type LowonganOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    ketentuan?: SortOrder
    persyaratan?: SortOrder
    salary?: SortOrderInput | SortOrder
    jenisPekerjaan?: SortOrder
    perusahaanId?: SortOrder
    dibuatPada?: SortOrder
    expiredAt?: SortOrderInput | SortOrder
    linkPendaftaran?: SortOrderInput | SortOrder
    perusahaan?: PerusahaanOrderByWithRelationInput
    lamaran?: LamaranOrderByRelationAggregateInput
    disimpanOleh?: LowonganDisimpanOrderByRelationAggregateInput
  }

  export type LowonganWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LowonganWhereInput | LowonganWhereInput[]
    OR?: LowonganWhereInput[]
    NOT?: LowonganWhereInput | LowonganWhereInput[]
    nama?: StringFilter<"Lowongan"> | string
    ketentuan?: StringFilter<"Lowongan"> | string
    persyaratan?: StringFilter<"Lowongan"> | string
    salary?: StringNullableFilter<"Lowongan"> | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFilter<"Lowongan"> | $Enums.JenisPekerjaan
    perusahaanId?: IntFilter<"Lowongan"> | number
    dibuatPada?: DateTimeFilter<"Lowongan"> | Date | string
    expiredAt?: DateTimeNullableFilter<"Lowongan"> | Date | string | null
    linkPendaftaran?: StringNullableFilter<"Lowongan"> | string | null
    perusahaan?: XOR<PerusahaanScalarRelationFilter, PerusahaanWhereInput>
    lamaran?: LamaranListRelationFilter
    disimpanOleh?: LowonganDisimpanListRelationFilter
  }, "id">

  export type LowonganOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    ketentuan?: SortOrder
    persyaratan?: SortOrder
    salary?: SortOrderInput | SortOrder
    jenisPekerjaan?: SortOrder
    perusahaanId?: SortOrder
    dibuatPada?: SortOrder
    expiredAt?: SortOrderInput | SortOrder
    linkPendaftaran?: SortOrderInput | SortOrder
    _count?: LowonganCountOrderByAggregateInput
    _avg?: LowonganAvgOrderByAggregateInput
    _max?: LowonganMaxOrderByAggregateInput
    _min?: LowonganMinOrderByAggregateInput
    _sum?: LowonganSumOrderByAggregateInput
  }

  export type LowonganScalarWhereWithAggregatesInput = {
    AND?: LowonganScalarWhereWithAggregatesInput | LowonganScalarWhereWithAggregatesInput[]
    OR?: LowonganScalarWhereWithAggregatesInput[]
    NOT?: LowonganScalarWhereWithAggregatesInput | LowonganScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lowongan"> | number
    nama?: StringWithAggregatesFilter<"Lowongan"> | string
    ketentuan?: StringWithAggregatesFilter<"Lowongan"> | string
    persyaratan?: StringWithAggregatesFilter<"Lowongan"> | string
    salary?: StringNullableWithAggregatesFilter<"Lowongan"> | string | null
    jenisPekerjaan?: EnumJenisPekerjaanWithAggregatesFilter<"Lowongan"> | $Enums.JenisPekerjaan
    perusahaanId?: IntWithAggregatesFilter<"Lowongan"> | number
    dibuatPada?: DateTimeWithAggregatesFilter<"Lowongan"> | Date | string
    expiredAt?: DateTimeNullableWithAggregatesFilter<"Lowongan"> | Date | string | null
    linkPendaftaran?: StringNullableWithAggregatesFilter<"Lowongan"> | string | null
  }

  export type LowonganDisimpanWhereInput = {
    AND?: LowonganDisimpanWhereInput | LowonganDisimpanWhereInput[]
    OR?: LowonganDisimpanWhereInput[]
    NOT?: LowonganDisimpanWhereInput | LowonganDisimpanWhereInput[]
    id?: IntFilter<"LowonganDisimpan"> | number
    penggunaId?: IntFilter<"LowonganDisimpan"> | number
    lowonganId?: IntFilter<"LowonganDisimpan"> | number
    tanggal?: DateTimeFilter<"LowonganDisimpan"> | Date | string
    pengguna?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
    lowongan?: XOR<LowonganScalarRelationFilter, LowonganWhereInput>
  }

  export type LowonganDisimpanOrderByWithRelationInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
    tanggal?: SortOrder
    pengguna?: PenggunaOrderByWithRelationInput
    lowongan?: LowonganOrderByWithRelationInput
  }

  export type LowonganDisimpanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LowonganDisimpanWhereInput | LowonganDisimpanWhereInput[]
    OR?: LowonganDisimpanWhereInput[]
    NOT?: LowonganDisimpanWhereInput | LowonganDisimpanWhereInput[]
    penggunaId?: IntFilter<"LowonganDisimpan"> | number
    lowonganId?: IntFilter<"LowonganDisimpan"> | number
    tanggal?: DateTimeFilter<"LowonganDisimpan"> | Date | string
    pengguna?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
    lowongan?: XOR<LowonganScalarRelationFilter, LowonganWhereInput>
  }, "id">

  export type LowonganDisimpanOrderByWithAggregationInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
    tanggal?: SortOrder
    _count?: LowonganDisimpanCountOrderByAggregateInput
    _avg?: LowonganDisimpanAvgOrderByAggregateInput
    _max?: LowonganDisimpanMaxOrderByAggregateInput
    _min?: LowonganDisimpanMinOrderByAggregateInput
    _sum?: LowonganDisimpanSumOrderByAggregateInput
  }

  export type LowonganDisimpanScalarWhereWithAggregatesInput = {
    AND?: LowonganDisimpanScalarWhereWithAggregatesInput | LowonganDisimpanScalarWhereWithAggregatesInput[]
    OR?: LowonganDisimpanScalarWhereWithAggregatesInput[]
    NOT?: LowonganDisimpanScalarWhereWithAggregatesInput | LowonganDisimpanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LowonganDisimpan"> | number
    penggunaId?: IntWithAggregatesFilter<"LowonganDisimpan"> | number
    lowonganId?: IntWithAggregatesFilter<"LowonganDisimpan"> | number
    tanggal?: DateTimeWithAggregatesFilter<"LowonganDisimpan"> | Date | string
  }

  export type PenggunaCreateInput = {
    nama: string
    email: string
    katasandi: string
    peran: $Enums.PeranPengguna
    nisn: string
    alamat?: string | null
    telepon?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: $Enums.JenisKelamin | null
    dibuatPada?: Date | string
    lamaran?: LamaranCreateNestedManyWithoutPenggunaInput
    lowonganDisimpan?: LowonganDisimpanCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaUncheckedCreateInput = {
    id?: number
    nama: string
    email: string
    katasandi: string
    peran: $Enums.PeranPengguna
    nisn: string
    alamat?: string | null
    telepon?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: $Enums.JenisKelamin | null
    dibuatPada?: Date | string
    lamaran?: LamaranUncheckedCreateNestedManyWithoutPenggunaInput
    lowonganDisimpan?: LowonganDisimpanUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    katasandi?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    nisn?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableEnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin | null
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    lamaran?: LamaranUpdateManyWithoutPenggunaNestedInput
    lowonganDisimpan?: LowonganDisimpanUpdateManyWithoutPenggunaNestedInput
  }

  export type PenggunaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    katasandi?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    nisn?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableEnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin | null
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    lamaran?: LamaranUncheckedUpdateManyWithoutPenggunaNestedInput
    lowonganDisimpan?: LowonganDisimpanUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type PenggunaCreateManyInput = {
    id?: number
    nama: string
    email: string
    katasandi: string
    peran: $Enums.PeranPengguna
    nisn: string
    alamat?: string | null
    telepon?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: $Enums.JenisKelamin | null
    dibuatPada?: Date | string
  }

  export type PenggunaUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    katasandi?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    nisn?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableEnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin | null
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenggunaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    katasandi?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    nisn?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableEnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin | null
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerusahaanCreateInput = {
    nama: string
    gambar?: string | null
    alamat: string
    email: string
    telepon?: string | null
    deskripsi?: string | null
    lowongan?: LowonganCreateNestedManyWithoutPerusahaanInput
  }

  export type PerusahaanUncheckedCreateInput = {
    id?: number
    nama: string
    gambar?: string | null
    alamat: string
    email: string
    telepon?: string | null
    deskripsi?: string | null
    lowongan?: LowonganUncheckedCreateNestedManyWithoutPerusahaanInput
  }

  export type PerusahaanUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    lowongan?: LowonganUpdateManyWithoutPerusahaanNestedInput
  }

  export type PerusahaanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    lowongan?: LowonganUncheckedUpdateManyWithoutPerusahaanNestedInput
  }

  export type PerusahaanCreateManyInput = {
    id?: number
    nama: string
    gambar?: string | null
    alamat: string
    email: string
    telepon?: string | null
    deskripsi?: string | null
  }

  export type PerusahaanUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PerusahaanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LamaranCreateInput = {
    tanggal?: Date | string
    waktuPelamaran?: Date | string | null
    pengguna: PenggunaCreateNestedOneWithoutLamaranInput
    lowongan: LowonganCreateNestedOneWithoutLamaranInput
  }

  export type LamaranUncheckedCreateInput = {
    id?: number
    penggunaId: number
    lowonganId: number
    tanggal?: Date | string
    waktuPelamaran?: Date | string | null
  }

  export type LamaranUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuPelamaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pengguna?: PenggunaUpdateOneRequiredWithoutLamaranNestedInput
    lowongan?: LowonganUpdateOneRequiredWithoutLamaranNestedInput
  }

  export type LamaranUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    penggunaId?: IntFieldUpdateOperationsInput | number
    lowonganId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuPelamaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LamaranCreateManyInput = {
    id?: number
    penggunaId: number
    lowonganId: number
    tanggal?: Date | string
    waktuPelamaran?: Date | string | null
  }

  export type LamaranUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuPelamaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LamaranUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    penggunaId?: IntFieldUpdateOperationsInput | number
    lowonganId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuPelamaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LowonganCreateInput = {
    nama: string
    ketentuan: string
    persyaratan: string
    salary?: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan
    dibuatPada?: Date | string
    expiredAt?: Date | string | null
    linkPendaftaran?: string | null
    perusahaan: PerusahaanCreateNestedOneWithoutLowonganInput
    lamaran?: LamaranCreateNestedManyWithoutLowonganInput
    disimpanOleh?: LowonganDisimpanCreateNestedManyWithoutLowonganInput
  }

  export type LowonganUncheckedCreateInput = {
    id?: number
    nama: string
    ketentuan: string
    persyaratan: string
    salary?: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan
    perusahaanId: number
    dibuatPada?: Date | string
    expiredAt?: Date | string | null
    linkPendaftaran?: string | null
    lamaran?: LamaranUncheckedCreateNestedManyWithoutLowonganInput
    disimpanOleh?: LowonganDisimpanUncheckedCreateNestedManyWithoutLowonganInput
  }

  export type LowonganUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    ketentuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFieldUpdateOperationsInput | $Enums.JenisPekerjaan
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkPendaftaran?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaan?: PerusahaanUpdateOneRequiredWithoutLowonganNestedInput
    lamaran?: LamaranUpdateManyWithoutLowonganNestedInput
    disimpanOleh?: LowonganDisimpanUpdateManyWithoutLowonganNestedInput
  }

  export type LowonganUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    ketentuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFieldUpdateOperationsInput | $Enums.JenisPekerjaan
    perusahaanId?: IntFieldUpdateOperationsInput | number
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkPendaftaran?: NullableStringFieldUpdateOperationsInput | string | null
    lamaran?: LamaranUncheckedUpdateManyWithoutLowonganNestedInput
    disimpanOleh?: LowonganDisimpanUncheckedUpdateManyWithoutLowonganNestedInput
  }

  export type LowonganCreateManyInput = {
    id?: number
    nama: string
    ketentuan: string
    persyaratan: string
    salary?: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan
    perusahaanId: number
    dibuatPada?: Date | string
    expiredAt?: Date | string | null
    linkPendaftaran?: string | null
  }

  export type LowonganUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    ketentuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFieldUpdateOperationsInput | $Enums.JenisPekerjaan
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkPendaftaran?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LowonganUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    ketentuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFieldUpdateOperationsInput | $Enums.JenisPekerjaan
    perusahaanId?: IntFieldUpdateOperationsInput | number
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkPendaftaran?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LowonganDisimpanCreateInput = {
    tanggal?: Date | string
    pengguna: PenggunaCreateNestedOneWithoutLowonganDisimpanInput
    lowongan: LowonganCreateNestedOneWithoutDisimpanOlehInput
  }

  export type LowonganDisimpanUncheckedCreateInput = {
    id?: number
    penggunaId: number
    lowonganId: number
    tanggal?: Date | string
  }

  export type LowonganDisimpanUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateOneRequiredWithoutLowonganDisimpanNestedInput
    lowongan?: LowonganUpdateOneRequiredWithoutDisimpanOlehNestedInput
  }

  export type LowonganDisimpanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    penggunaId?: IntFieldUpdateOperationsInput | number
    lowonganId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LowonganDisimpanCreateManyInput = {
    id?: number
    penggunaId: number
    lowonganId: number
    tanggal?: Date | string
  }

  export type LowonganDisimpanUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LowonganDisimpanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    penggunaId?: IntFieldUpdateOperationsInput | number
    lowonganId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPeranPenggunaFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeranPenggunaFilter<$PrismaModel> | $Enums.PeranPengguna
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumJenisKelaminNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel> | null
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJenisKelaminNullableFilter<$PrismaModel> | $Enums.JenisKelamin | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LamaranListRelationFilter = {
    every?: LamaranWhereInput
    some?: LamaranWhereInput
    none?: LamaranWhereInput
  }

  export type LowonganDisimpanListRelationFilter = {
    every?: LowonganDisimpanWhereInput
    some?: LowonganDisimpanWhereInput
    none?: LowonganDisimpanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LamaranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LowonganDisimpanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PenggunaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    katasandi?: SortOrder
    peran?: SortOrder
    nisn?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    dibuatPada?: SortOrder
  }

  export type PenggunaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PenggunaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    katasandi?: SortOrder
    peran?: SortOrder
    nisn?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    dibuatPada?: SortOrder
  }

  export type PenggunaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    katasandi?: SortOrder
    peran?: SortOrder
    nisn?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    dibuatPada?: SortOrder
  }

  export type PenggunaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPeranPenggunaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeranPenggunaWithAggregatesFilter<$PrismaModel> | $Enums.PeranPengguna
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeranPenggunaFilter<$PrismaModel>
    _max?: NestedEnumPeranPenggunaFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumJenisKelaminNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel> | null
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJenisKelaminNullableWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminNullableFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LowonganListRelationFilter = {
    every?: LowonganWhereInput
    some?: LowonganWhereInput
    none?: LowonganWhereInput
  }

  export type LowonganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerusahaanCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    gambar?: SortOrder
    alamat?: SortOrder
    email?: SortOrder
    telepon?: SortOrder
    deskripsi?: SortOrder
  }

  export type PerusahaanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PerusahaanMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    gambar?: SortOrder
    alamat?: SortOrder
    email?: SortOrder
    telepon?: SortOrder
    deskripsi?: SortOrder
  }

  export type PerusahaanMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    gambar?: SortOrder
    alamat?: SortOrder
    email?: SortOrder
    telepon?: SortOrder
    deskripsi?: SortOrder
  }

  export type PerusahaanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PenggunaScalarRelationFilter = {
    is?: PenggunaWhereInput
    isNot?: PenggunaWhereInput
  }

  export type LowonganScalarRelationFilter = {
    is?: LowonganWhereInput
    isNot?: LowonganWhereInput
  }

  export type LamaranCountOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
    tanggal?: SortOrder
    waktuPelamaran?: SortOrder
  }

  export type LamaranAvgOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
  }

  export type LamaranMaxOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
    tanggal?: SortOrder
    waktuPelamaran?: SortOrder
  }

  export type LamaranMinOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
    tanggal?: SortOrder
    waktuPelamaran?: SortOrder
  }

  export type LamaranSumOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
  }

  export type EnumJenisPekerjaanFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPekerjaan | EnumJenisPekerjaanFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPekerjaan[] | ListEnumJenisPekerjaanFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPekerjaan[] | ListEnumJenisPekerjaanFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPekerjaanFilter<$PrismaModel> | $Enums.JenisPekerjaan
  }

  export type PerusahaanScalarRelationFilter = {
    is?: PerusahaanWhereInput
    isNot?: PerusahaanWhereInput
  }

  export type LowonganCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    ketentuan?: SortOrder
    persyaratan?: SortOrder
    salary?: SortOrder
    jenisPekerjaan?: SortOrder
    perusahaanId?: SortOrder
    dibuatPada?: SortOrder
    expiredAt?: SortOrder
    linkPendaftaran?: SortOrder
  }

  export type LowonganAvgOrderByAggregateInput = {
    id?: SortOrder
    perusahaanId?: SortOrder
  }

  export type LowonganMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    ketentuan?: SortOrder
    persyaratan?: SortOrder
    salary?: SortOrder
    jenisPekerjaan?: SortOrder
    perusahaanId?: SortOrder
    dibuatPada?: SortOrder
    expiredAt?: SortOrder
    linkPendaftaran?: SortOrder
  }

  export type LowonganMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    ketentuan?: SortOrder
    persyaratan?: SortOrder
    salary?: SortOrder
    jenisPekerjaan?: SortOrder
    perusahaanId?: SortOrder
    dibuatPada?: SortOrder
    expiredAt?: SortOrder
    linkPendaftaran?: SortOrder
  }

  export type LowonganSumOrderByAggregateInput = {
    id?: SortOrder
    perusahaanId?: SortOrder
  }

  export type EnumJenisPekerjaanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPekerjaan | EnumJenisPekerjaanFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPekerjaan[] | ListEnumJenisPekerjaanFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPekerjaan[] | ListEnumJenisPekerjaanFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPekerjaanWithAggregatesFilter<$PrismaModel> | $Enums.JenisPekerjaan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisPekerjaanFilter<$PrismaModel>
    _max?: NestedEnumJenisPekerjaanFilter<$PrismaModel>
  }

  export type LowonganDisimpanCountOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
    tanggal?: SortOrder
  }

  export type LowonganDisimpanAvgOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
  }

  export type LowonganDisimpanMaxOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
    tanggal?: SortOrder
  }

  export type LowonganDisimpanMinOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
    tanggal?: SortOrder
  }

  export type LowonganDisimpanSumOrderByAggregateInput = {
    id?: SortOrder
    penggunaId?: SortOrder
    lowonganId?: SortOrder
  }

  export type LamaranCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<LamaranCreateWithoutPenggunaInput, LamaranUncheckedCreateWithoutPenggunaInput> | LamaranCreateWithoutPenggunaInput[] | LamaranUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LamaranCreateOrConnectWithoutPenggunaInput | LamaranCreateOrConnectWithoutPenggunaInput[]
    createMany?: LamaranCreateManyPenggunaInputEnvelope
    connect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
  }

  export type LowonganDisimpanCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<LowonganDisimpanCreateWithoutPenggunaInput, LowonganDisimpanUncheckedCreateWithoutPenggunaInput> | LowonganDisimpanCreateWithoutPenggunaInput[] | LowonganDisimpanUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LowonganDisimpanCreateOrConnectWithoutPenggunaInput | LowonganDisimpanCreateOrConnectWithoutPenggunaInput[]
    createMany?: LowonganDisimpanCreateManyPenggunaInputEnvelope
    connect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
  }

  export type LamaranUncheckedCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<LamaranCreateWithoutPenggunaInput, LamaranUncheckedCreateWithoutPenggunaInput> | LamaranCreateWithoutPenggunaInput[] | LamaranUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LamaranCreateOrConnectWithoutPenggunaInput | LamaranCreateOrConnectWithoutPenggunaInput[]
    createMany?: LamaranCreateManyPenggunaInputEnvelope
    connect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
  }

  export type LowonganDisimpanUncheckedCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<LowonganDisimpanCreateWithoutPenggunaInput, LowonganDisimpanUncheckedCreateWithoutPenggunaInput> | LowonganDisimpanCreateWithoutPenggunaInput[] | LowonganDisimpanUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LowonganDisimpanCreateOrConnectWithoutPenggunaInput | LowonganDisimpanCreateOrConnectWithoutPenggunaInput[]
    createMany?: LowonganDisimpanCreateManyPenggunaInputEnvelope
    connect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPeranPenggunaFieldUpdateOperationsInput = {
    set?: $Enums.PeranPengguna
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumJenisKelaminFieldUpdateOperationsInput = {
    set?: $Enums.JenisKelamin | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LamaranUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<LamaranCreateWithoutPenggunaInput, LamaranUncheckedCreateWithoutPenggunaInput> | LamaranCreateWithoutPenggunaInput[] | LamaranUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LamaranCreateOrConnectWithoutPenggunaInput | LamaranCreateOrConnectWithoutPenggunaInput[]
    upsert?: LamaranUpsertWithWhereUniqueWithoutPenggunaInput | LamaranUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: LamaranCreateManyPenggunaInputEnvelope
    set?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    disconnect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    delete?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    connect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    update?: LamaranUpdateWithWhereUniqueWithoutPenggunaInput | LamaranUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: LamaranUpdateManyWithWhereWithoutPenggunaInput | LamaranUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: LamaranScalarWhereInput | LamaranScalarWhereInput[]
  }

  export type LowonganDisimpanUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<LowonganDisimpanCreateWithoutPenggunaInput, LowonganDisimpanUncheckedCreateWithoutPenggunaInput> | LowonganDisimpanCreateWithoutPenggunaInput[] | LowonganDisimpanUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LowonganDisimpanCreateOrConnectWithoutPenggunaInput | LowonganDisimpanCreateOrConnectWithoutPenggunaInput[]
    upsert?: LowonganDisimpanUpsertWithWhereUniqueWithoutPenggunaInput | LowonganDisimpanUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: LowonganDisimpanCreateManyPenggunaInputEnvelope
    set?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    disconnect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    delete?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    connect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    update?: LowonganDisimpanUpdateWithWhereUniqueWithoutPenggunaInput | LowonganDisimpanUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: LowonganDisimpanUpdateManyWithWhereWithoutPenggunaInput | LowonganDisimpanUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: LowonganDisimpanScalarWhereInput | LowonganDisimpanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LamaranUncheckedUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<LamaranCreateWithoutPenggunaInput, LamaranUncheckedCreateWithoutPenggunaInput> | LamaranCreateWithoutPenggunaInput[] | LamaranUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LamaranCreateOrConnectWithoutPenggunaInput | LamaranCreateOrConnectWithoutPenggunaInput[]
    upsert?: LamaranUpsertWithWhereUniqueWithoutPenggunaInput | LamaranUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: LamaranCreateManyPenggunaInputEnvelope
    set?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    disconnect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    delete?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    connect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    update?: LamaranUpdateWithWhereUniqueWithoutPenggunaInput | LamaranUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: LamaranUpdateManyWithWhereWithoutPenggunaInput | LamaranUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: LamaranScalarWhereInput | LamaranScalarWhereInput[]
  }

  export type LowonganDisimpanUncheckedUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<LowonganDisimpanCreateWithoutPenggunaInput, LowonganDisimpanUncheckedCreateWithoutPenggunaInput> | LowonganDisimpanCreateWithoutPenggunaInput[] | LowonganDisimpanUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: LowonganDisimpanCreateOrConnectWithoutPenggunaInput | LowonganDisimpanCreateOrConnectWithoutPenggunaInput[]
    upsert?: LowonganDisimpanUpsertWithWhereUniqueWithoutPenggunaInput | LowonganDisimpanUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: LowonganDisimpanCreateManyPenggunaInputEnvelope
    set?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    disconnect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    delete?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    connect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    update?: LowonganDisimpanUpdateWithWhereUniqueWithoutPenggunaInput | LowonganDisimpanUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: LowonganDisimpanUpdateManyWithWhereWithoutPenggunaInput | LowonganDisimpanUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: LowonganDisimpanScalarWhereInput | LowonganDisimpanScalarWhereInput[]
  }

  export type LowonganCreateNestedManyWithoutPerusahaanInput = {
    create?: XOR<LowonganCreateWithoutPerusahaanInput, LowonganUncheckedCreateWithoutPerusahaanInput> | LowonganCreateWithoutPerusahaanInput[] | LowonganUncheckedCreateWithoutPerusahaanInput[]
    connectOrCreate?: LowonganCreateOrConnectWithoutPerusahaanInput | LowonganCreateOrConnectWithoutPerusahaanInput[]
    createMany?: LowonganCreateManyPerusahaanInputEnvelope
    connect?: LowonganWhereUniqueInput | LowonganWhereUniqueInput[]
  }

  export type LowonganUncheckedCreateNestedManyWithoutPerusahaanInput = {
    create?: XOR<LowonganCreateWithoutPerusahaanInput, LowonganUncheckedCreateWithoutPerusahaanInput> | LowonganCreateWithoutPerusahaanInput[] | LowonganUncheckedCreateWithoutPerusahaanInput[]
    connectOrCreate?: LowonganCreateOrConnectWithoutPerusahaanInput | LowonganCreateOrConnectWithoutPerusahaanInput[]
    createMany?: LowonganCreateManyPerusahaanInputEnvelope
    connect?: LowonganWhereUniqueInput | LowonganWhereUniqueInput[]
  }

  export type LowonganUpdateManyWithoutPerusahaanNestedInput = {
    create?: XOR<LowonganCreateWithoutPerusahaanInput, LowonganUncheckedCreateWithoutPerusahaanInput> | LowonganCreateWithoutPerusahaanInput[] | LowonganUncheckedCreateWithoutPerusahaanInput[]
    connectOrCreate?: LowonganCreateOrConnectWithoutPerusahaanInput | LowonganCreateOrConnectWithoutPerusahaanInput[]
    upsert?: LowonganUpsertWithWhereUniqueWithoutPerusahaanInput | LowonganUpsertWithWhereUniqueWithoutPerusahaanInput[]
    createMany?: LowonganCreateManyPerusahaanInputEnvelope
    set?: LowonganWhereUniqueInput | LowonganWhereUniqueInput[]
    disconnect?: LowonganWhereUniqueInput | LowonganWhereUniqueInput[]
    delete?: LowonganWhereUniqueInput | LowonganWhereUniqueInput[]
    connect?: LowonganWhereUniqueInput | LowonganWhereUniqueInput[]
    update?: LowonganUpdateWithWhereUniqueWithoutPerusahaanInput | LowonganUpdateWithWhereUniqueWithoutPerusahaanInput[]
    updateMany?: LowonganUpdateManyWithWhereWithoutPerusahaanInput | LowonganUpdateManyWithWhereWithoutPerusahaanInput[]
    deleteMany?: LowonganScalarWhereInput | LowonganScalarWhereInput[]
  }

  export type LowonganUncheckedUpdateManyWithoutPerusahaanNestedInput = {
    create?: XOR<LowonganCreateWithoutPerusahaanInput, LowonganUncheckedCreateWithoutPerusahaanInput> | LowonganCreateWithoutPerusahaanInput[] | LowonganUncheckedCreateWithoutPerusahaanInput[]
    connectOrCreate?: LowonganCreateOrConnectWithoutPerusahaanInput | LowonganCreateOrConnectWithoutPerusahaanInput[]
    upsert?: LowonganUpsertWithWhereUniqueWithoutPerusahaanInput | LowonganUpsertWithWhereUniqueWithoutPerusahaanInput[]
    createMany?: LowonganCreateManyPerusahaanInputEnvelope
    set?: LowonganWhereUniqueInput | LowonganWhereUniqueInput[]
    disconnect?: LowonganWhereUniqueInput | LowonganWhereUniqueInput[]
    delete?: LowonganWhereUniqueInput | LowonganWhereUniqueInput[]
    connect?: LowonganWhereUniqueInput | LowonganWhereUniqueInput[]
    update?: LowonganUpdateWithWhereUniqueWithoutPerusahaanInput | LowonganUpdateWithWhereUniqueWithoutPerusahaanInput[]
    updateMany?: LowonganUpdateManyWithWhereWithoutPerusahaanInput | LowonganUpdateManyWithWhereWithoutPerusahaanInput[]
    deleteMany?: LowonganScalarWhereInput | LowonganScalarWhereInput[]
  }

  export type PenggunaCreateNestedOneWithoutLamaranInput = {
    create?: XOR<PenggunaCreateWithoutLamaranInput, PenggunaUncheckedCreateWithoutLamaranInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutLamaranInput
    connect?: PenggunaWhereUniqueInput
  }

  export type LowonganCreateNestedOneWithoutLamaranInput = {
    create?: XOR<LowonganCreateWithoutLamaranInput, LowonganUncheckedCreateWithoutLamaranInput>
    connectOrCreate?: LowonganCreateOrConnectWithoutLamaranInput
    connect?: LowonganWhereUniqueInput
  }

  export type PenggunaUpdateOneRequiredWithoutLamaranNestedInput = {
    create?: XOR<PenggunaCreateWithoutLamaranInput, PenggunaUncheckedCreateWithoutLamaranInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutLamaranInput
    upsert?: PenggunaUpsertWithoutLamaranInput
    connect?: PenggunaWhereUniqueInput
    update?: XOR<XOR<PenggunaUpdateToOneWithWhereWithoutLamaranInput, PenggunaUpdateWithoutLamaranInput>, PenggunaUncheckedUpdateWithoutLamaranInput>
  }

  export type LowonganUpdateOneRequiredWithoutLamaranNestedInput = {
    create?: XOR<LowonganCreateWithoutLamaranInput, LowonganUncheckedCreateWithoutLamaranInput>
    connectOrCreate?: LowonganCreateOrConnectWithoutLamaranInput
    upsert?: LowonganUpsertWithoutLamaranInput
    connect?: LowonganWhereUniqueInput
    update?: XOR<XOR<LowonganUpdateToOneWithWhereWithoutLamaranInput, LowonganUpdateWithoutLamaranInput>, LowonganUncheckedUpdateWithoutLamaranInput>
  }

  export type PerusahaanCreateNestedOneWithoutLowonganInput = {
    create?: XOR<PerusahaanCreateWithoutLowonganInput, PerusahaanUncheckedCreateWithoutLowonganInput>
    connectOrCreate?: PerusahaanCreateOrConnectWithoutLowonganInput
    connect?: PerusahaanWhereUniqueInput
  }

  export type LamaranCreateNestedManyWithoutLowonganInput = {
    create?: XOR<LamaranCreateWithoutLowonganInput, LamaranUncheckedCreateWithoutLowonganInput> | LamaranCreateWithoutLowonganInput[] | LamaranUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: LamaranCreateOrConnectWithoutLowonganInput | LamaranCreateOrConnectWithoutLowonganInput[]
    createMany?: LamaranCreateManyLowonganInputEnvelope
    connect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
  }

  export type LowonganDisimpanCreateNestedManyWithoutLowonganInput = {
    create?: XOR<LowonganDisimpanCreateWithoutLowonganInput, LowonganDisimpanUncheckedCreateWithoutLowonganInput> | LowonganDisimpanCreateWithoutLowonganInput[] | LowonganDisimpanUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: LowonganDisimpanCreateOrConnectWithoutLowonganInput | LowonganDisimpanCreateOrConnectWithoutLowonganInput[]
    createMany?: LowonganDisimpanCreateManyLowonganInputEnvelope
    connect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
  }

  export type LamaranUncheckedCreateNestedManyWithoutLowonganInput = {
    create?: XOR<LamaranCreateWithoutLowonganInput, LamaranUncheckedCreateWithoutLowonganInput> | LamaranCreateWithoutLowonganInput[] | LamaranUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: LamaranCreateOrConnectWithoutLowonganInput | LamaranCreateOrConnectWithoutLowonganInput[]
    createMany?: LamaranCreateManyLowonganInputEnvelope
    connect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
  }

  export type LowonganDisimpanUncheckedCreateNestedManyWithoutLowonganInput = {
    create?: XOR<LowonganDisimpanCreateWithoutLowonganInput, LowonganDisimpanUncheckedCreateWithoutLowonganInput> | LowonganDisimpanCreateWithoutLowonganInput[] | LowonganDisimpanUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: LowonganDisimpanCreateOrConnectWithoutLowonganInput | LowonganDisimpanCreateOrConnectWithoutLowonganInput[]
    createMany?: LowonganDisimpanCreateManyLowonganInputEnvelope
    connect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
  }

  export type EnumJenisPekerjaanFieldUpdateOperationsInput = {
    set?: $Enums.JenisPekerjaan
  }

  export type PerusahaanUpdateOneRequiredWithoutLowonganNestedInput = {
    create?: XOR<PerusahaanCreateWithoutLowonganInput, PerusahaanUncheckedCreateWithoutLowonganInput>
    connectOrCreate?: PerusahaanCreateOrConnectWithoutLowonganInput
    upsert?: PerusahaanUpsertWithoutLowonganInput
    connect?: PerusahaanWhereUniqueInput
    update?: XOR<XOR<PerusahaanUpdateToOneWithWhereWithoutLowonganInput, PerusahaanUpdateWithoutLowonganInput>, PerusahaanUncheckedUpdateWithoutLowonganInput>
  }

  export type LamaranUpdateManyWithoutLowonganNestedInput = {
    create?: XOR<LamaranCreateWithoutLowonganInput, LamaranUncheckedCreateWithoutLowonganInput> | LamaranCreateWithoutLowonganInput[] | LamaranUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: LamaranCreateOrConnectWithoutLowonganInput | LamaranCreateOrConnectWithoutLowonganInput[]
    upsert?: LamaranUpsertWithWhereUniqueWithoutLowonganInput | LamaranUpsertWithWhereUniqueWithoutLowonganInput[]
    createMany?: LamaranCreateManyLowonganInputEnvelope
    set?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    disconnect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    delete?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    connect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    update?: LamaranUpdateWithWhereUniqueWithoutLowonganInput | LamaranUpdateWithWhereUniqueWithoutLowonganInput[]
    updateMany?: LamaranUpdateManyWithWhereWithoutLowonganInput | LamaranUpdateManyWithWhereWithoutLowonganInput[]
    deleteMany?: LamaranScalarWhereInput | LamaranScalarWhereInput[]
  }

  export type LowonganDisimpanUpdateManyWithoutLowonganNestedInput = {
    create?: XOR<LowonganDisimpanCreateWithoutLowonganInput, LowonganDisimpanUncheckedCreateWithoutLowonganInput> | LowonganDisimpanCreateWithoutLowonganInput[] | LowonganDisimpanUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: LowonganDisimpanCreateOrConnectWithoutLowonganInput | LowonganDisimpanCreateOrConnectWithoutLowonganInput[]
    upsert?: LowonganDisimpanUpsertWithWhereUniqueWithoutLowonganInput | LowonganDisimpanUpsertWithWhereUniqueWithoutLowonganInput[]
    createMany?: LowonganDisimpanCreateManyLowonganInputEnvelope
    set?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    disconnect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    delete?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    connect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    update?: LowonganDisimpanUpdateWithWhereUniqueWithoutLowonganInput | LowonganDisimpanUpdateWithWhereUniqueWithoutLowonganInput[]
    updateMany?: LowonganDisimpanUpdateManyWithWhereWithoutLowonganInput | LowonganDisimpanUpdateManyWithWhereWithoutLowonganInput[]
    deleteMany?: LowonganDisimpanScalarWhereInput | LowonganDisimpanScalarWhereInput[]
  }

  export type LamaranUncheckedUpdateManyWithoutLowonganNestedInput = {
    create?: XOR<LamaranCreateWithoutLowonganInput, LamaranUncheckedCreateWithoutLowonganInput> | LamaranCreateWithoutLowonganInput[] | LamaranUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: LamaranCreateOrConnectWithoutLowonganInput | LamaranCreateOrConnectWithoutLowonganInput[]
    upsert?: LamaranUpsertWithWhereUniqueWithoutLowonganInput | LamaranUpsertWithWhereUniqueWithoutLowonganInput[]
    createMany?: LamaranCreateManyLowonganInputEnvelope
    set?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    disconnect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    delete?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    connect?: LamaranWhereUniqueInput | LamaranWhereUniqueInput[]
    update?: LamaranUpdateWithWhereUniqueWithoutLowonganInput | LamaranUpdateWithWhereUniqueWithoutLowonganInput[]
    updateMany?: LamaranUpdateManyWithWhereWithoutLowonganInput | LamaranUpdateManyWithWhereWithoutLowonganInput[]
    deleteMany?: LamaranScalarWhereInput | LamaranScalarWhereInput[]
  }

  export type LowonganDisimpanUncheckedUpdateManyWithoutLowonganNestedInput = {
    create?: XOR<LowonganDisimpanCreateWithoutLowonganInput, LowonganDisimpanUncheckedCreateWithoutLowonganInput> | LowonganDisimpanCreateWithoutLowonganInput[] | LowonganDisimpanUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: LowonganDisimpanCreateOrConnectWithoutLowonganInput | LowonganDisimpanCreateOrConnectWithoutLowonganInput[]
    upsert?: LowonganDisimpanUpsertWithWhereUniqueWithoutLowonganInput | LowonganDisimpanUpsertWithWhereUniqueWithoutLowonganInput[]
    createMany?: LowonganDisimpanCreateManyLowonganInputEnvelope
    set?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    disconnect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    delete?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    connect?: LowonganDisimpanWhereUniqueInput | LowonganDisimpanWhereUniqueInput[]
    update?: LowonganDisimpanUpdateWithWhereUniqueWithoutLowonganInput | LowonganDisimpanUpdateWithWhereUniqueWithoutLowonganInput[]
    updateMany?: LowonganDisimpanUpdateManyWithWhereWithoutLowonganInput | LowonganDisimpanUpdateManyWithWhereWithoutLowonganInput[]
    deleteMany?: LowonganDisimpanScalarWhereInput | LowonganDisimpanScalarWhereInput[]
  }

  export type PenggunaCreateNestedOneWithoutLowonganDisimpanInput = {
    create?: XOR<PenggunaCreateWithoutLowonganDisimpanInput, PenggunaUncheckedCreateWithoutLowonganDisimpanInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutLowonganDisimpanInput
    connect?: PenggunaWhereUniqueInput
  }

  export type LowonganCreateNestedOneWithoutDisimpanOlehInput = {
    create?: XOR<LowonganCreateWithoutDisimpanOlehInput, LowonganUncheckedCreateWithoutDisimpanOlehInput>
    connectOrCreate?: LowonganCreateOrConnectWithoutDisimpanOlehInput
    connect?: LowonganWhereUniqueInput
  }

  export type PenggunaUpdateOneRequiredWithoutLowonganDisimpanNestedInput = {
    create?: XOR<PenggunaCreateWithoutLowonganDisimpanInput, PenggunaUncheckedCreateWithoutLowonganDisimpanInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutLowonganDisimpanInput
    upsert?: PenggunaUpsertWithoutLowonganDisimpanInput
    connect?: PenggunaWhereUniqueInput
    update?: XOR<XOR<PenggunaUpdateToOneWithWhereWithoutLowonganDisimpanInput, PenggunaUpdateWithoutLowonganDisimpanInput>, PenggunaUncheckedUpdateWithoutLowonganDisimpanInput>
  }

  export type LowonganUpdateOneRequiredWithoutDisimpanOlehNestedInput = {
    create?: XOR<LowonganCreateWithoutDisimpanOlehInput, LowonganUncheckedCreateWithoutDisimpanOlehInput>
    connectOrCreate?: LowonganCreateOrConnectWithoutDisimpanOlehInput
    upsert?: LowonganUpsertWithoutDisimpanOlehInput
    connect?: LowonganWhereUniqueInput
    update?: XOR<XOR<LowonganUpdateToOneWithWhereWithoutDisimpanOlehInput, LowonganUpdateWithoutDisimpanOlehInput>, LowonganUncheckedUpdateWithoutDisimpanOlehInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPeranPenggunaFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeranPenggunaFilter<$PrismaModel> | $Enums.PeranPengguna
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumJenisKelaminNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel> | null
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJenisKelaminNullableFilter<$PrismaModel> | $Enums.JenisKelamin | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumPeranPenggunaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeranPenggunaWithAggregatesFilter<$PrismaModel> | $Enums.PeranPengguna
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeranPenggunaFilter<$PrismaModel>
    _max?: NestedEnumPeranPenggunaFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumJenisKelaminNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel> | null
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJenisKelaminNullableWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminNullableFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumJenisPekerjaanFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPekerjaan | EnumJenisPekerjaanFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPekerjaan[] | ListEnumJenisPekerjaanFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPekerjaan[] | ListEnumJenisPekerjaanFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPekerjaanFilter<$PrismaModel> | $Enums.JenisPekerjaan
  }

  export type NestedEnumJenisPekerjaanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPekerjaan | EnumJenisPekerjaanFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPekerjaan[] | ListEnumJenisPekerjaanFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPekerjaan[] | ListEnumJenisPekerjaanFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPekerjaanWithAggregatesFilter<$PrismaModel> | $Enums.JenisPekerjaan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisPekerjaanFilter<$PrismaModel>
    _max?: NestedEnumJenisPekerjaanFilter<$PrismaModel>
  }

  export type LamaranCreateWithoutPenggunaInput = {
    tanggal?: Date | string
    waktuPelamaran?: Date | string | null
    lowongan: LowonganCreateNestedOneWithoutLamaranInput
  }

  export type LamaranUncheckedCreateWithoutPenggunaInput = {
    id?: number
    lowonganId: number
    tanggal?: Date | string
    waktuPelamaran?: Date | string | null
  }

  export type LamaranCreateOrConnectWithoutPenggunaInput = {
    where: LamaranWhereUniqueInput
    create: XOR<LamaranCreateWithoutPenggunaInput, LamaranUncheckedCreateWithoutPenggunaInput>
  }

  export type LamaranCreateManyPenggunaInputEnvelope = {
    data: LamaranCreateManyPenggunaInput | LamaranCreateManyPenggunaInput[]
    skipDuplicates?: boolean
  }

  export type LowonganDisimpanCreateWithoutPenggunaInput = {
    tanggal?: Date | string
    lowongan: LowonganCreateNestedOneWithoutDisimpanOlehInput
  }

  export type LowonganDisimpanUncheckedCreateWithoutPenggunaInput = {
    id?: number
    lowonganId: number
    tanggal?: Date | string
  }

  export type LowonganDisimpanCreateOrConnectWithoutPenggunaInput = {
    where: LowonganDisimpanWhereUniqueInput
    create: XOR<LowonganDisimpanCreateWithoutPenggunaInput, LowonganDisimpanUncheckedCreateWithoutPenggunaInput>
  }

  export type LowonganDisimpanCreateManyPenggunaInputEnvelope = {
    data: LowonganDisimpanCreateManyPenggunaInput | LowonganDisimpanCreateManyPenggunaInput[]
    skipDuplicates?: boolean
  }

  export type LamaranUpsertWithWhereUniqueWithoutPenggunaInput = {
    where: LamaranWhereUniqueInput
    update: XOR<LamaranUpdateWithoutPenggunaInput, LamaranUncheckedUpdateWithoutPenggunaInput>
    create: XOR<LamaranCreateWithoutPenggunaInput, LamaranUncheckedCreateWithoutPenggunaInput>
  }

  export type LamaranUpdateWithWhereUniqueWithoutPenggunaInput = {
    where: LamaranWhereUniqueInput
    data: XOR<LamaranUpdateWithoutPenggunaInput, LamaranUncheckedUpdateWithoutPenggunaInput>
  }

  export type LamaranUpdateManyWithWhereWithoutPenggunaInput = {
    where: LamaranScalarWhereInput
    data: XOR<LamaranUpdateManyMutationInput, LamaranUncheckedUpdateManyWithoutPenggunaInput>
  }

  export type LamaranScalarWhereInput = {
    AND?: LamaranScalarWhereInput | LamaranScalarWhereInput[]
    OR?: LamaranScalarWhereInput[]
    NOT?: LamaranScalarWhereInput | LamaranScalarWhereInput[]
    id?: IntFilter<"Lamaran"> | number
    penggunaId?: IntFilter<"Lamaran"> | number
    lowonganId?: IntFilter<"Lamaran"> | number
    tanggal?: DateTimeFilter<"Lamaran"> | Date | string
    waktuPelamaran?: DateTimeNullableFilter<"Lamaran"> | Date | string | null
  }

  export type LowonganDisimpanUpsertWithWhereUniqueWithoutPenggunaInput = {
    where: LowonganDisimpanWhereUniqueInput
    update: XOR<LowonganDisimpanUpdateWithoutPenggunaInput, LowonganDisimpanUncheckedUpdateWithoutPenggunaInput>
    create: XOR<LowonganDisimpanCreateWithoutPenggunaInput, LowonganDisimpanUncheckedCreateWithoutPenggunaInput>
  }

  export type LowonganDisimpanUpdateWithWhereUniqueWithoutPenggunaInput = {
    where: LowonganDisimpanWhereUniqueInput
    data: XOR<LowonganDisimpanUpdateWithoutPenggunaInput, LowonganDisimpanUncheckedUpdateWithoutPenggunaInput>
  }

  export type LowonganDisimpanUpdateManyWithWhereWithoutPenggunaInput = {
    where: LowonganDisimpanScalarWhereInput
    data: XOR<LowonganDisimpanUpdateManyMutationInput, LowonganDisimpanUncheckedUpdateManyWithoutPenggunaInput>
  }

  export type LowonganDisimpanScalarWhereInput = {
    AND?: LowonganDisimpanScalarWhereInput | LowonganDisimpanScalarWhereInput[]
    OR?: LowonganDisimpanScalarWhereInput[]
    NOT?: LowonganDisimpanScalarWhereInput | LowonganDisimpanScalarWhereInput[]
    id?: IntFilter<"LowonganDisimpan"> | number
    penggunaId?: IntFilter<"LowonganDisimpan"> | number
    lowonganId?: IntFilter<"LowonganDisimpan"> | number
    tanggal?: DateTimeFilter<"LowonganDisimpan"> | Date | string
  }

  export type LowonganCreateWithoutPerusahaanInput = {
    nama: string
    ketentuan: string
    persyaratan: string
    salary?: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan
    dibuatPada?: Date | string
    expiredAt?: Date | string | null
    linkPendaftaran?: string | null
    lamaran?: LamaranCreateNestedManyWithoutLowonganInput
    disimpanOleh?: LowonganDisimpanCreateNestedManyWithoutLowonganInput
  }

  export type LowonganUncheckedCreateWithoutPerusahaanInput = {
    id?: number
    nama: string
    ketentuan: string
    persyaratan: string
    salary?: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan
    dibuatPada?: Date | string
    expiredAt?: Date | string | null
    linkPendaftaran?: string | null
    lamaran?: LamaranUncheckedCreateNestedManyWithoutLowonganInput
    disimpanOleh?: LowonganDisimpanUncheckedCreateNestedManyWithoutLowonganInput
  }

  export type LowonganCreateOrConnectWithoutPerusahaanInput = {
    where: LowonganWhereUniqueInput
    create: XOR<LowonganCreateWithoutPerusahaanInput, LowonganUncheckedCreateWithoutPerusahaanInput>
  }

  export type LowonganCreateManyPerusahaanInputEnvelope = {
    data: LowonganCreateManyPerusahaanInput | LowonganCreateManyPerusahaanInput[]
    skipDuplicates?: boolean
  }

  export type LowonganUpsertWithWhereUniqueWithoutPerusahaanInput = {
    where: LowonganWhereUniqueInput
    update: XOR<LowonganUpdateWithoutPerusahaanInput, LowonganUncheckedUpdateWithoutPerusahaanInput>
    create: XOR<LowonganCreateWithoutPerusahaanInput, LowonganUncheckedCreateWithoutPerusahaanInput>
  }

  export type LowonganUpdateWithWhereUniqueWithoutPerusahaanInput = {
    where: LowonganWhereUniqueInput
    data: XOR<LowonganUpdateWithoutPerusahaanInput, LowonganUncheckedUpdateWithoutPerusahaanInput>
  }

  export type LowonganUpdateManyWithWhereWithoutPerusahaanInput = {
    where: LowonganScalarWhereInput
    data: XOR<LowonganUpdateManyMutationInput, LowonganUncheckedUpdateManyWithoutPerusahaanInput>
  }

  export type LowonganScalarWhereInput = {
    AND?: LowonganScalarWhereInput | LowonganScalarWhereInput[]
    OR?: LowonganScalarWhereInput[]
    NOT?: LowonganScalarWhereInput | LowonganScalarWhereInput[]
    id?: IntFilter<"Lowongan"> | number
    nama?: StringFilter<"Lowongan"> | string
    ketentuan?: StringFilter<"Lowongan"> | string
    persyaratan?: StringFilter<"Lowongan"> | string
    salary?: StringNullableFilter<"Lowongan"> | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFilter<"Lowongan"> | $Enums.JenisPekerjaan
    perusahaanId?: IntFilter<"Lowongan"> | number
    dibuatPada?: DateTimeFilter<"Lowongan"> | Date | string
    expiredAt?: DateTimeNullableFilter<"Lowongan"> | Date | string | null
    linkPendaftaran?: StringNullableFilter<"Lowongan"> | string | null
  }

  export type PenggunaCreateWithoutLamaranInput = {
    nama: string
    email: string
    katasandi: string
    peran: $Enums.PeranPengguna
    nisn: string
    alamat?: string | null
    telepon?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: $Enums.JenisKelamin | null
    dibuatPada?: Date | string
    lowonganDisimpan?: LowonganDisimpanCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaUncheckedCreateWithoutLamaranInput = {
    id?: number
    nama: string
    email: string
    katasandi: string
    peran: $Enums.PeranPengguna
    nisn: string
    alamat?: string | null
    telepon?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: $Enums.JenisKelamin | null
    dibuatPada?: Date | string
    lowonganDisimpan?: LowonganDisimpanUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaCreateOrConnectWithoutLamaranInput = {
    where: PenggunaWhereUniqueInput
    create: XOR<PenggunaCreateWithoutLamaranInput, PenggunaUncheckedCreateWithoutLamaranInput>
  }

  export type LowonganCreateWithoutLamaranInput = {
    nama: string
    ketentuan: string
    persyaratan: string
    salary?: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan
    dibuatPada?: Date | string
    expiredAt?: Date | string | null
    linkPendaftaran?: string | null
    perusahaan: PerusahaanCreateNestedOneWithoutLowonganInput
    disimpanOleh?: LowonganDisimpanCreateNestedManyWithoutLowonganInput
  }

  export type LowonganUncheckedCreateWithoutLamaranInput = {
    id?: number
    nama: string
    ketentuan: string
    persyaratan: string
    salary?: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan
    perusahaanId: number
    dibuatPada?: Date | string
    expiredAt?: Date | string | null
    linkPendaftaran?: string | null
    disimpanOleh?: LowonganDisimpanUncheckedCreateNestedManyWithoutLowonganInput
  }

  export type LowonganCreateOrConnectWithoutLamaranInput = {
    where: LowonganWhereUniqueInput
    create: XOR<LowonganCreateWithoutLamaranInput, LowonganUncheckedCreateWithoutLamaranInput>
  }

  export type PenggunaUpsertWithoutLamaranInput = {
    update: XOR<PenggunaUpdateWithoutLamaranInput, PenggunaUncheckedUpdateWithoutLamaranInput>
    create: XOR<PenggunaCreateWithoutLamaranInput, PenggunaUncheckedCreateWithoutLamaranInput>
    where?: PenggunaWhereInput
  }

  export type PenggunaUpdateToOneWithWhereWithoutLamaranInput = {
    where?: PenggunaWhereInput
    data: XOR<PenggunaUpdateWithoutLamaranInput, PenggunaUncheckedUpdateWithoutLamaranInput>
  }

  export type PenggunaUpdateWithoutLamaranInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    katasandi?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    nisn?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableEnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin | null
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    lowonganDisimpan?: LowonganDisimpanUpdateManyWithoutPenggunaNestedInput
  }

  export type PenggunaUncheckedUpdateWithoutLamaranInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    katasandi?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    nisn?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableEnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin | null
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    lowonganDisimpan?: LowonganDisimpanUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type LowonganUpsertWithoutLamaranInput = {
    update: XOR<LowonganUpdateWithoutLamaranInput, LowonganUncheckedUpdateWithoutLamaranInput>
    create: XOR<LowonganCreateWithoutLamaranInput, LowonganUncheckedCreateWithoutLamaranInput>
    where?: LowonganWhereInput
  }

  export type LowonganUpdateToOneWithWhereWithoutLamaranInput = {
    where?: LowonganWhereInput
    data: XOR<LowonganUpdateWithoutLamaranInput, LowonganUncheckedUpdateWithoutLamaranInput>
  }

  export type LowonganUpdateWithoutLamaranInput = {
    nama?: StringFieldUpdateOperationsInput | string
    ketentuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFieldUpdateOperationsInput | $Enums.JenisPekerjaan
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkPendaftaran?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaan?: PerusahaanUpdateOneRequiredWithoutLowonganNestedInput
    disimpanOleh?: LowonganDisimpanUpdateManyWithoutLowonganNestedInput
  }

  export type LowonganUncheckedUpdateWithoutLamaranInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    ketentuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFieldUpdateOperationsInput | $Enums.JenisPekerjaan
    perusahaanId?: IntFieldUpdateOperationsInput | number
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkPendaftaran?: NullableStringFieldUpdateOperationsInput | string | null
    disimpanOleh?: LowonganDisimpanUncheckedUpdateManyWithoutLowonganNestedInput
  }

  export type PerusahaanCreateWithoutLowonganInput = {
    nama: string
    gambar?: string | null
    alamat: string
    email: string
    telepon?: string | null
    deskripsi?: string | null
  }

  export type PerusahaanUncheckedCreateWithoutLowonganInput = {
    id?: number
    nama: string
    gambar?: string | null
    alamat: string
    email: string
    telepon?: string | null
    deskripsi?: string | null
  }

  export type PerusahaanCreateOrConnectWithoutLowonganInput = {
    where: PerusahaanWhereUniqueInput
    create: XOR<PerusahaanCreateWithoutLowonganInput, PerusahaanUncheckedCreateWithoutLowonganInput>
  }

  export type LamaranCreateWithoutLowonganInput = {
    tanggal?: Date | string
    waktuPelamaran?: Date | string | null
    pengguna: PenggunaCreateNestedOneWithoutLamaranInput
  }

  export type LamaranUncheckedCreateWithoutLowonganInput = {
    id?: number
    penggunaId: number
    tanggal?: Date | string
    waktuPelamaran?: Date | string | null
  }

  export type LamaranCreateOrConnectWithoutLowonganInput = {
    where: LamaranWhereUniqueInput
    create: XOR<LamaranCreateWithoutLowonganInput, LamaranUncheckedCreateWithoutLowonganInput>
  }

  export type LamaranCreateManyLowonganInputEnvelope = {
    data: LamaranCreateManyLowonganInput | LamaranCreateManyLowonganInput[]
    skipDuplicates?: boolean
  }

  export type LowonganDisimpanCreateWithoutLowonganInput = {
    tanggal?: Date | string
    pengguna: PenggunaCreateNestedOneWithoutLowonganDisimpanInput
  }

  export type LowonganDisimpanUncheckedCreateWithoutLowonganInput = {
    id?: number
    penggunaId: number
    tanggal?: Date | string
  }

  export type LowonganDisimpanCreateOrConnectWithoutLowonganInput = {
    where: LowonganDisimpanWhereUniqueInput
    create: XOR<LowonganDisimpanCreateWithoutLowonganInput, LowonganDisimpanUncheckedCreateWithoutLowonganInput>
  }

  export type LowonganDisimpanCreateManyLowonganInputEnvelope = {
    data: LowonganDisimpanCreateManyLowonganInput | LowonganDisimpanCreateManyLowonganInput[]
    skipDuplicates?: boolean
  }

  export type PerusahaanUpsertWithoutLowonganInput = {
    update: XOR<PerusahaanUpdateWithoutLowonganInput, PerusahaanUncheckedUpdateWithoutLowonganInput>
    create: XOR<PerusahaanCreateWithoutLowonganInput, PerusahaanUncheckedCreateWithoutLowonganInput>
    where?: PerusahaanWhereInput
  }

  export type PerusahaanUpdateToOneWithWhereWithoutLowonganInput = {
    where?: PerusahaanWhereInput
    data: XOR<PerusahaanUpdateWithoutLowonganInput, PerusahaanUncheckedUpdateWithoutLowonganInput>
  }

  export type PerusahaanUpdateWithoutLowonganInput = {
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PerusahaanUncheckedUpdateWithoutLowonganInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LamaranUpsertWithWhereUniqueWithoutLowonganInput = {
    where: LamaranWhereUniqueInput
    update: XOR<LamaranUpdateWithoutLowonganInput, LamaranUncheckedUpdateWithoutLowonganInput>
    create: XOR<LamaranCreateWithoutLowonganInput, LamaranUncheckedCreateWithoutLowonganInput>
  }

  export type LamaranUpdateWithWhereUniqueWithoutLowonganInput = {
    where: LamaranWhereUniqueInput
    data: XOR<LamaranUpdateWithoutLowonganInput, LamaranUncheckedUpdateWithoutLowonganInput>
  }

  export type LamaranUpdateManyWithWhereWithoutLowonganInput = {
    where: LamaranScalarWhereInput
    data: XOR<LamaranUpdateManyMutationInput, LamaranUncheckedUpdateManyWithoutLowonganInput>
  }

  export type LowonganDisimpanUpsertWithWhereUniqueWithoutLowonganInput = {
    where: LowonganDisimpanWhereUniqueInput
    update: XOR<LowonganDisimpanUpdateWithoutLowonganInput, LowonganDisimpanUncheckedUpdateWithoutLowonganInput>
    create: XOR<LowonganDisimpanCreateWithoutLowonganInput, LowonganDisimpanUncheckedCreateWithoutLowonganInput>
  }

  export type LowonganDisimpanUpdateWithWhereUniqueWithoutLowonganInput = {
    where: LowonganDisimpanWhereUniqueInput
    data: XOR<LowonganDisimpanUpdateWithoutLowonganInput, LowonganDisimpanUncheckedUpdateWithoutLowonganInput>
  }

  export type LowonganDisimpanUpdateManyWithWhereWithoutLowonganInput = {
    where: LowonganDisimpanScalarWhereInput
    data: XOR<LowonganDisimpanUpdateManyMutationInput, LowonganDisimpanUncheckedUpdateManyWithoutLowonganInput>
  }

  export type PenggunaCreateWithoutLowonganDisimpanInput = {
    nama: string
    email: string
    katasandi: string
    peran: $Enums.PeranPengguna
    nisn: string
    alamat?: string | null
    telepon?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: $Enums.JenisKelamin | null
    dibuatPada?: Date | string
    lamaran?: LamaranCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaUncheckedCreateWithoutLowonganDisimpanInput = {
    id?: number
    nama: string
    email: string
    katasandi: string
    peran: $Enums.PeranPengguna
    nisn: string
    alamat?: string | null
    telepon?: string | null
    tanggalLahir?: Date | string | null
    jenisKelamin?: $Enums.JenisKelamin | null
    dibuatPada?: Date | string
    lamaran?: LamaranUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type PenggunaCreateOrConnectWithoutLowonganDisimpanInput = {
    where: PenggunaWhereUniqueInput
    create: XOR<PenggunaCreateWithoutLowonganDisimpanInput, PenggunaUncheckedCreateWithoutLowonganDisimpanInput>
  }

  export type LowonganCreateWithoutDisimpanOlehInput = {
    nama: string
    ketentuan: string
    persyaratan: string
    salary?: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan
    dibuatPada?: Date | string
    expiredAt?: Date | string | null
    linkPendaftaran?: string | null
    perusahaan: PerusahaanCreateNestedOneWithoutLowonganInput
    lamaran?: LamaranCreateNestedManyWithoutLowonganInput
  }

  export type LowonganUncheckedCreateWithoutDisimpanOlehInput = {
    id?: number
    nama: string
    ketentuan: string
    persyaratan: string
    salary?: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan
    perusahaanId: number
    dibuatPada?: Date | string
    expiredAt?: Date | string | null
    linkPendaftaran?: string | null
    lamaran?: LamaranUncheckedCreateNestedManyWithoutLowonganInput
  }

  export type LowonganCreateOrConnectWithoutDisimpanOlehInput = {
    where: LowonganWhereUniqueInput
    create: XOR<LowonganCreateWithoutDisimpanOlehInput, LowonganUncheckedCreateWithoutDisimpanOlehInput>
  }

  export type PenggunaUpsertWithoutLowonganDisimpanInput = {
    update: XOR<PenggunaUpdateWithoutLowonganDisimpanInput, PenggunaUncheckedUpdateWithoutLowonganDisimpanInput>
    create: XOR<PenggunaCreateWithoutLowonganDisimpanInput, PenggunaUncheckedCreateWithoutLowonganDisimpanInput>
    where?: PenggunaWhereInput
  }

  export type PenggunaUpdateToOneWithWhereWithoutLowonganDisimpanInput = {
    where?: PenggunaWhereInput
    data: XOR<PenggunaUpdateWithoutLowonganDisimpanInput, PenggunaUncheckedUpdateWithoutLowonganDisimpanInput>
  }

  export type PenggunaUpdateWithoutLowonganDisimpanInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    katasandi?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    nisn?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableEnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin | null
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    lamaran?: LamaranUpdateManyWithoutPenggunaNestedInput
  }

  export type PenggunaUncheckedUpdateWithoutLowonganDisimpanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    katasandi?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    nisn?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jenisKelamin?: NullableEnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin | null
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    lamaran?: LamaranUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type LowonganUpsertWithoutDisimpanOlehInput = {
    update: XOR<LowonganUpdateWithoutDisimpanOlehInput, LowonganUncheckedUpdateWithoutDisimpanOlehInput>
    create: XOR<LowonganCreateWithoutDisimpanOlehInput, LowonganUncheckedCreateWithoutDisimpanOlehInput>
    where?: LowonganWhereInput
  }

  export type LowonganUpdateToOneWithWhereWithoutDisimpanOlehInput = {
    where?: LowonganWhereInput
    data: XOR<LowonganUpdateWithoutDisimpanOlehInput, LowonganUncheckedUpdateWithoutDisimpanOlehInput>
  }

  export type LowonganUpdateWithoutDisimpanOlehInput = {
    nama?: StringFieldUpdateOperationsInput | string
    ketentuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFieldUpdateOperationsInput | $Enums.JenisPekerjaan
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkPendaftaran?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaan?: PerusahaanUpdateOneRequiredWithoutLowonganNestedInput
    lamaran?: LamaranUpdateManyWithoutLowonganNestedInput
  }

  export type LowonganUncheckedUpdateWithoutDisimpanOlehInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    ketentuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFieldUpdateOperationsInput | $Enums.JenisPekerjaan
    perusahaanId?: IntFieldUpdateOperationsInput | number
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkPendaftaran?: NullableStringFieldUpdateOperationsInput | string | null
    lamaran?: LamaranUncheckedUpdateManyWithoutLowonganNestedInput
  }

  export type LamaranCreateManyPenggunaInput = {
    id?: number
    lowonganId: number
    tanggal?: Date | string
    waktuPelamaran?: Date | string | null
  }

  export type LowonganDisimpanCreateManyPenggunaInput = {
    id?: number
    lowonganId: number
    tanggal?: Date | string
  }

  export type LamaranUpdateWithoutPenggunaInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuPelamaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lowongan?: LowonganUpdateOneRequiredWithoutLamaranNestedInput
  }

  export type LamaranUncheckedUpdateWithoutPenggunaInput = {
    id?: IntFieldUpdateOperationsInput | number
    lowonganId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuPelamaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LamaranUncheckedUpdateManyWithoutPenggunaInput = {
    id?: IntFieldUpdateOperationsInput | number
    lowonganId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuPelamaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LowonganDisimpanUpdateWithoutPenggunaInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lowongan?: LowonganUpdateOneRequiredWithoutDisimpanOlehNestedInput
  }

  export type LowonganDisimpanUncheckedUpdateWithoutPenggunaInput = {
    id?: IntFieldUpdateOperationsInput | number
    lowonganId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LowonganDisimpanUncheckedUpdateManyWithoutPenggunaInput = {
    id?: IntFieldUpdateOperationsInput | number
    lowonganId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LowonganCreateManyPerusahaanInput = {
    id?: number
    nama: string
    ketentuan: string
    persyaratan: string
    salary?: string | null
    jenisPekerjaan: $Enums.JenisPekerjaan
    dibuatPada?: Date | string
    expiredAt?: Date | string | null
    linkPendaftaran?: string | null
  }

  export type LowonganUpdateWithoutPerusahaanInput = {
    nama?: StringFieldUpdateOperationsInput | string
    ketentuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFieldUpdateOperationsInput | $Enums.JenisPekerjaan
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkPendaftaran?: NullableStringFieldUpdateOperationsInput | string | null
    lamaran?: LamaranUpdateManyWithoutLowonganNestedInput
    disimpanOleh?: LowonganDisimpanUpdateManyWithoutLowonganNestedInput
  }

  export type LowonganUncheckedUpdateWithoutPerusahaanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    ketentuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFieldUpdateOperationsInput | $Enums.JenisPekerjaan
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkPendaftaran?: NullableStringFieldUpdateOperationsInput | string | null
    lamaran?: LamaranUncheckedUpdateManyWithoutLowonganNestedInput
    disimpanOleh?: LowonganDisimpanUncheckedUpdateManyWithoutLowonganNestedInput
  }

  export type LowonganUncheckedUpdateManyWithoutPerusahaanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    ketentuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPekerjaan?: EnumJenisPekerjaanFieldUpdateOperationsInput | $Enums.JenisPekerjaan
    dibuatPada?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkPendaftaran?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LamaranCreateManyLowonganInput = {
    id?: number
    penggunaId: number
    tanggal?: Date | string
    waktuPelamaran?: Date | string | null
  }

  export type LowonganDisimpanCreateManyLowonganInput = {
    id?: number
    penggunaId: number
    tanggal?: Date | string
  }

  export type LamaranUpdateWithoutLowonganInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuPelamaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pengguna?: PenggunaUpdateOneRequiredWithoutLamaranNestedInput
  }

  export type LamaranUncheckedUpdateWithoutLowonganInput = {
    id?: IntFieldUpdateOperationsInput | number
    penggunaId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuPelamaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LamaranUncheckedUpdateManyWithoutLowonganInput = {
    id?: IntFieldUpdateOperationsInput | number
    penggunaId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuPelamaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LowonganDisimpanUpdateWithoutLowonganInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: PenggunaUpdateOneRequiredWithoutLowonganDisimpanNestedInput
  }

  export type LowonganDisimpanUncheckedUpdateWithoutLowonganInput = {
    id?: IntFieldUpdateOperationsInput | number
    penggunaId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LowonganDisimpanUncheckedUpdateManyWithoutLowonganInput = {
    id?: IntFieldUpdateOperationsInput | number
    penggunaId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}