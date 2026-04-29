
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FamilyBinding
 * 
 */
export type FamilyBinding = $Result.DefaultSelection<Prisma.$FamilyBindingPayload>
/**
 * Model Medicine
 * 
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>
/**
 * Model MedicineInventory
 * 
 */
export type MedicineInventory = $Result.DefaultSelection<Prisma.$MedicineInventoryPayload>
/**
 * Model MedicinePrescription
 * 
 */
export type MedicinePrescription = $Result.DefaultSelection<Prisma.$MedicinePrescriptionPayload>
/**
 * Model CheckIn
 * 
 */
export type CheckIn = $Result.DefaultSelection<Prisma.$CheckInPayload>
/**
 * Model SOAPRecord
 * 
 */
export type SOAPRecord = $Result.DefaultSelection<Prisma.$SOAPRecordPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model AlertSubscription
 * 
 */
export type AlertSubscription = $Result.DefaultSelection<Prisma.$AlertSubscriptionPayload>
/**
 * Model DeviceToken
 * 
 */
export type DeviceToken = $Result.DefaultSelection<Prisma.$DeviceTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.familyBinding`: Exposes CRUD operations for the **FamilyBinding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FamilyBindings
    * const familyBindings = await prisma.familyBinding.findMany()
    * ```
    */
  get familyBinding(): Prisma.FamilyBindingDelegate<ExtArgs>;

  /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs>;

  /**
   * `prisma.medicineInventory`: Exposes CRUD operations for the **MedicineInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicineInventories
    * const medicineInventories = await prisma.medicineInventory.findMany()
    * ```
    */
  get medicineInventory(): Prisma.MedicineInventoryDelegate<ExtArgs>;

  /**
   * `prisma.medicinePrescription`: Exposes CRUD operations for the **MedicinePrescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicinePrescriptions
    * const medicinePrescriptions = await prisma.medicinePrescription.findMany()
    * ```
    */
  get medicinePrescription(): Prisma.MedicinePrescriptionDelegate<ExtArgs>;

  /**
   * `prisma.checkIn`: Exposes CRUD operations for the **CheckIn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckIns
    * const checkIns = await prisma.checkIn.findMany()
    * ```
    */
  get checkIn(): Prisma.CheckInDelegate<ExtArgs>;

  /**
   * `prisma.sOAPRecord`: Exposes CRUD operations for the **SOAPRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SOAPRecords
    * const sOAPRecords = await prisma.sOAPRecord.findMany()
    * ```
    */
  get sOAPRecord(): Prisma.SOAPRecordDelegate<ExtArgs>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs>;

  /**
   * `prisma.alertSubscription`: Exposes CRUD operations for the **AlertSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertSubscriptions
    * const alertSubscriptions = await prisma.alertSubscription.findMany()
    * ```
    */
  get alertSubscription(): Prisma.AlertSubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.deviceToken`: Exposes CRUD operations for the **DeviceToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceTokens
    * const deviceTokens = await prisma.deviceToken.findMany()
    * ```
    */
  get deviceToken(): Prisma.DeviceTokenDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    FamilyBinding: 'FamilyBinding',
    Medicine: 'Medicine',
    MedicineInventory: 'MedicineInventory',
    MedicinePrescription: 'MedicinePrescription',
    CheckIn: 'CheckIn',
    SOAPRecord: 'SOAPRecord',
    Alert: 'Alert',
    AlertSubscription: 'AlertSubscription',
    DeviceToken: 'DeviceToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "familyBinding" | "medicine" | "medicineInventory" | "medicinePrescription" | "checkIn" | "sOAPRecord" | "alert" | "alertSubscription" | "deviceToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FamilyBinding: {
        payload: Prisma.$FamilyBindingPayload<ExtArgs>
        fields: Prisma.FamilyBindingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyBindingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyBindingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyBindingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyBindingPayload>
          }
          findFirst: {
            args: Prisma.FamilyBindingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyBindingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyBindingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyBindingPayload>
          }
          findMany: {
            args: Prisma.FamilyBindingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyBindingPayload>[]
          }
          create: {
            args: Prisma.FamilyBindingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyBindingPayload>
          }
          createMany: {
            args: Prisma.FamilyBindingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FamilyBindingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyBindingPayload>[]
          }
          delete: {
            args: Prisma.FamilyBindingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyBindingPayload>
          }
          update: {
            args: Prisma.FamilyBindingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyBindingPayload>
          }
          deleteMany: {
            args: Prisma.FamilyBindingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyBindingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FamilyBindingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyBindingPayload>
          }
          aggregate: {
            args: Prisma.FamilyBindingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamilyBinding>
          }
          groupBy: {
            args: Prisma.FamilyBindingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyBindingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyBindingCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyBindingCountAggregateOutputType> | number
          }
        }
      }
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
      MedicineInventory: {
        payload: Prisma.$MedicineInventoryPayload<ExtArgs>
        fields: Prisma.MedicineInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineInventoryPayload>
          }
          findFirst: {
            args: Prisma.MedicineInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineInventoryPayload>
          }
          findMany: {
            args: Prisma.MedicineInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineInventoryPayload>[]
          }
          create: {
            args: Prisma.MedicineInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineInventoryPayload>
          }
          createMany: {
            args: Prisma.MedicineInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineInventoryPayload>[]
          }
          delete: {
            args: Prisma.MedicineInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineInventoryPayload>
          }
          update: {
            args: Prisma.MedicineInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineInventoryPayload>
          }
          deleteMany: {
            args: Prisma.MedicineInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicineInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineInventoryPayload>
          }
          aggregate: {
            args: Prisma.MedicineInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicineInventory>
          }
          groupBy: {
            args: Prisma.MedicineInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineInventoryCountAggregateOutputType> | number
          }
        }
      }
      MedicinePrescription: {
        payload: Prisma.$MedicinePrescriptionPayload<ExtArgs>
        fields: Prisma.MedicinePrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicinePrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicinePrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePrescriptionPayload>
          }
          findFirst: {
            args: Prisma.MedicinePrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicinePrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePrescriptionPayload>
          }
          findMany: {
            args: Prisma.MedicinePrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePrescriptionPayload>[]
          }
          create: {
            args: Prisma.MedicinePrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePrescriptionPayload>
          }
          createMany: {
            args: Prisma.MedicinePrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicinePrescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePrescriptionPayload>[]
          }
          delete: {
            args: Prisma.MedicinePrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePrescriptionPayload>
          }
          update: {
            args: Prisma.MedicinePrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.MedicinePrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicinePrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicinePrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePrescriptionPayload>
          }
          aggregate: {
            args: Prisma.MedicinePrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicinePrescription>
          }
          groupBy: {
            args: Prisma.MedicinePrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicinePrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicinePrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<MedicinePrescriptionCountAggregateOutputType> | number
          }
        }
      }
      CheckIn: {
        payload: Prisma.$CheckInPayload<ExtArgs>
        fields: Prisma.CheckInFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckInFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckInFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findFirst: {
            args: Prisma.CheckInFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckInFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findMany: {
            args: Prisma.CheckInFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          create: {
            args: Prisma.CheckInCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          createMany: {
            args: Prisma.CheckInCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckInCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          delete: {
            args: Prisma.CheckInDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          update: {
            args: Prisma.CheckInUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          deleteMany: {
            args: Prisma.CheckInDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckInUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CheckInUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          aggregate: {
            args: Prisma.CheckInAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckIn>
          }
          groupBy: {
            args: Prisma.CheckInGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckInGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckInCountArgs<ExtArgs>
            result: $Utils.Optional<CheckInCountAggregateOutputType> | number
          }
        }
      }
      SOAPRecord: {
        payload: Prisma.$SOAPRecordPayload<ExtArgs>
        fields: Prisma.SOAPRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SOAPRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOAPRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SOAPRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOAPRecordPayload>
          }
          findFirst: {
            args: Prisma.SOAPRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOAPRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SOAPRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOAPRecordPayload>
          }
          findMany: {
            args: Prisma.SOAPRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOAPRecordPayload>[]
          }
          create: {
            args: Prisma.SOAPRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOAPRecordPayload>
          }
          createMany: {
            args: Prisma.SOAPRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SOAPRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOAPRecordPayload>[]
          }
          delete: {
            args: Prisma.SOAPRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOAPRecordPayload>
          }
          update: {
            args: Prisma.SOAPRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOAPRecordPayload>
          }
          deleteMany: {
            args: Prisma.SOAPRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SOAPRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SOAPRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOAPRecordPayload>
          }
          aggregate: {
            args: Prisma.SOAPRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSOAPRecord>
          }
          groupBy: {
            args: Prisma.SOAPRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<SOAPRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.SOAPRecordCountArgs<ExtArgs>
            result: $Utils.Optional<SOAPRecordCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      AlertSubscription: {
        payload: Prisma.$AlertSubscriptionPayload<ExtArgs>
        fields: Prisma.AlertSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.AlertSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSubscriptionPayload>
          }
          findMany: {
            args: Prisma.AlertSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSubscriptionPayload>[]
          }
          create: {
            args: Prisma.AlertSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSubscriptionPayload>
          }
          createMany: {
            args: Prisma.AlertSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.AlertSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSubscriptionPayload>
          }
          update: {
            args: Prisma.AlertSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.AlertSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.AlertSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertSubscription>
          }
          groupBy: {
            args: Prisma.AlertSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<AlertSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      DeviceToken: {
        payload: Prisma.$DeviceTokenPayload<ExtArgs>
        fields: Prisma.DeviceTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          findFirst: {
            args: Prisma.DeviceTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          findMany: {
            args: Prisma.DeviceTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>[]
          }
          create: {
            args: Prisma.DeviceTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          createMany: {
            args: Prisma.DeviceTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>[]
          }
          delete: {
            args: Prisma.DeviceTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          update: {
            args: Prisma.DeviceTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          deleteMany: {
            args: Prisma.DeviceTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          aggregate: {
            args: Prisma.DeviceTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceToken>
          }
          groupBy: {
            args: Prisma.DeviceTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceTokenCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceTokenCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bindingsAsPatient: number
    bindingsAsFamily: number
    medicines: number
    checkIns: number
    soapRecords: number
    alertSubscriptions: number
    deviceTokens: number
    alerts: number
    triggeredAlerts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bindingsAsPatient?: boolean | UserCountOutputTypeCountBindingsAsPatientArgs
    bindingsAsFamily?: boolean | UserCountOutputTypeCountBindingsAsFamilyArgs
    medicines?: boolean | UserCountOutputTypeCountMedicinesArgs
    checkIns?: boolean | UserCountOutputTypeCountCheckInsArgs
    soapRecords?: boolean | UserCountOutputTypeCountSoapRecordsArgs
    alertSubscriptions?: boolean | UserCountOutputTypeCountAlertSubscriptionsArgs
    deviceTokens?: boolean | UserCountOutputTypeCountDeviceTokensArgs
    alerts?: boolean | UserCountOutputTypeCountAlertsArgs
    triggeredAlerts?: boolean | UserCountOutputTypeCountTriggeredAlertsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBindingsAsPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyBindingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBindingsAsFamilyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyBindingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSoapRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SOAPRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlertSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeviceTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTriggeredAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Count Type MedicineCountOutputType
   */

  export type MedicineCountOutputType = {
    prescriptions: number
    checkIns: number
  }

  export type MedicineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | MedicineCountOutputTypeCountPrescriptionsArgs
    checkIns?: boolean | MedicineCountOutputTypeCountCheckInsArgs
  }

  // Custom InputTypes
  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicinePrescriptionWhereInput
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountCheckInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    phone: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    gender: string | null
    birthDate: Date | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    gender: string | null
    birthDate: Date | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone: number
    passwordHash: number
    name: number
    role: number
    gender: number
    birthDate: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    phone?: true
    passwordHash?: true
    name?: true
    role?: true
    gender?: true
    birthDate?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone?: true
    passwordHash?: true
    name?: true
    role?: true
    gender?: true
    birthDate?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone?: true
    passwordHash?: true
    name?: true
    role?: true
    gender?: true
    birthDate?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender: string | null
    birthDate: Date | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    gender?: boolean
    birthDate?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bindingsAsPatient?: boolean | User$bindingsAsPatientArgs<ExtArgs>
    bindingsAsFamily?: boolean | User$bindingsAsFamilyArgs<ExtArgs>
    medicines?: boolean | User$medicinesArgs<ExtArgs>
    checkIns?: boolean | User$checkInsArgs<ExtArgs>
    soapRecords?: boolean | User$soapRecordsArgs<ExtArgs>
    alertSubscriptions?: boolean | User$alertSubscriptionsArgs<ExtArgs>
    deviceTokens?: boolean | User$deviceTokensArgs<ExtArgs>
    alerts?: boolean | User$alertsArgs<ExtArgs>
    triggeredAlerts?: boolean | User$triggeredAlertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    gender?: boolean
    birthDate?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phone?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    gender?: boolean
    birthDate?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bindingsAsPatient?: boolean | User$bindingsAsPatientArgs<ExtArgs>
    bindingsAsFamily?: boolean | User$bindingsAsFamilyArgs<ExtArgs>
    medicines?: boolean | User$medicinesArgs<ExtArgs>
    checkIns?: boolean | User$checkInsArgs<ExtArgs>
    soapRecords?: boolean | User$soapRecordsArgs<ExtArgs>
    alertSubscriptions?: boolean | User$alertSubscriptionsArgs<ExtArgs>
    deviceTokens?: boolean | User$deviceTokensArgs<ExtArgs>
    alerts?: boolean | User$alertsArgs<ExtArgs>
    triggeredAlerts?: boolean | User$triggeredAlertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bindingsAsPatient: Prisma.$FamilyBindingPayload<ExtArgs>[]
      bindingsAsFamily: Prisma.$FamilyBindingPayload<ExtArgs>[]
      medicines: Prisma.$MedicinePayload<ExtArgs>[]
      checkIns: Prisma.$CheckInPayload<ExtArgs>[]
      soapRecords: Prisma.$SOAPRecordPayload<ExtArgs>[]
      alertSubscriptions: Prisma.$AlertSubscriptionPayload<ExtArgs>[]
      deviceTokens: Prisma.$DeviceTokenPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      triggeredAlerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      passwordHash: string
      name: string
      role: string
      gender: string | null
      birthDate: Date | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bindingsAsPatient<T extends User$bindingsAsPatientArgs<ExtArgs> = {}>(args?: Subset<T, User$bindingsAsPatientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "findMany"> | Null>
    bindingsAsFamily<T extends User$bindingsAsFamilyArgs<ExtArgs> = {}>(args?: Subset<T, User$bindingsAsFamilyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "findMany"> | Null>
    medicines<T extends User$medicinesArgs<ExtArgs> = {}>(args?: Subset<T, User$medicinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany"> | Null>
    checkIns<T extends User$checkInsArgs<ExtArgs> = {}>(args?: Subset<T, User$checkInsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany"> | Null>
    soapRecords<T extends User$soapRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$soapRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOAPRecordPayload<ExtArgs>, T, "findMany"> | Null>
    alertSubscriptions<T extends User$alertSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$alertSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertSubscriptionPayload<ExtArgs>, T, "findMany"> | Null>
    deviceTokens<T extends User$deviceTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$deviceTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findMany"> | Null>
    alerts<T extends User$alertsArgs<ExtArgs> = {}>(args?: Subset<T, User$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany"> | Null>
    triggeredAlerts<T extends User$triggeredAlertsArgs<ExtArgs> = {}>(args?: Subset<T, User$triggeredAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.bindingsAsPatient
   */
  export type User$bindingsAsPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
    where?: FamilyBindingWhereInput
    orderBy?: FamilyBindingOrderByWithRelationInput | FamilyBindingOrderByWithRelationInput[]
    cursor?: FamilyBindingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyBindingScalarFieldEnum | FamilyBindingScalarFieldEnum[]
  }

  /**
   * User.bindingsAsFamily
   */
  export type User$bindingsAsFamilyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
    where?: FamilyBindingWhereInput
    orderBy?: FamilyBindingOrderByWithRelationInput | FamilyBindingOrderByWithRelationInput[]
    cursor?: FamilyBindingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyBindingScalarFieldEnum | FamilyBindingScalarFieldEnum[]
  }

  /**
   * User.medicines
   */
  export type User$medicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    cursor?: MedicineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * User.checkIns
   */
  export type User$checkInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    cursor?: CheckInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * User.soapRecords
   */
  export type User$soapRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordInclude<ExtArgs> | null
    where?: SOAPRecordWhereInput
    orderBy?: SOAPRecordOrderByWithRelationInput | SOAPRecordOrderByWithRelationInput[]
    cursor?: SOAPRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SOAPRecordScalarFieldEnum | SOAPRecordScalarFieldEnum[]
  }

  /**
   * User.alertSubscriptions
   */
  export type User$alertSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionInclude<ExtArgs> | null
    where?: AlertSubscriptionWhereInput
    orderBy?: AlertSubscriptionOrderByWithRelationInput | AlertSubscriptionOrderByWithRelationInput[]
    cursor?: AlertSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertSubscriptionScalarFieldEnum | AlertSubscriptionScalarFieldEnum[]
  }

  /**
   * User.deviceTokens
   */
  export type User$deviceTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    where?: DeviceTokenWhereInput
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    cursor?: DeviceTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * User.alerts
   */
  export type User$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * User.triggeredAlerts
   */
  export type User$triggeredAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FamilyBinding
   */

  export type AggregateFamilyBinding = {
    _count: FamilyBindingCountAggregateOutputType | null
    _min: FamilyBindingMinAggregateOutputType | null
    _max: FamilyBindingMaxAggregateOutputType | null
  }

  export type FamilyBindingMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    familyId: string | null
    verified: boolean | null
    createdAt: Date | null
  }

  export type FamilyBindingMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    familyId: string | null
    verified: boolean | null
    createdAt: Date | null
  }

  export type FamilyBindingCountAggregateOutputType = {
    id: number
    patientId: number
    familyId: number
    verified: number
    createdAt: number
    _all: number
  }


  export type FamilyBindingMinAggregateInputType = {
    id?: true
    patientId?: true
    familyId?: true
    verified?: true
    createdAt?: true
  }

  export type FamilyBindingMaxAggregateInputType = {
    id?: true
    patientId?: true
    familyId?: true
    verified?: true
    createdAt?: true
  }

  export type FamilyBindingCountAggregateInputType = {
    id?: true
    patientId?: true
    familyId?: true
    verified?: true
    createdAt?: true
    _all?: true
  }

  export type FamilyBindingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyBinding to aggregate.
     */
    where?: FamilyBindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyBindings to fetch.
     */
    orderBy?: FamilyBindingOrderByWithRelationInput | FamilyBindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyBindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyBindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyBindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FamilyBindings
    **/
    _count?: true | FamilyBindingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyBindingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyBindingMaxAggregateInputType
  }

  export type GetFamilyBindingAggregateType<T extends FamilyBindingAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilyBinding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilyBinding[P]>
      : GetScalarType<T[P], AggregateFamilyBinding[P]>
  }




  export type FamilyBindingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyBindingWhereInput
    orderBy?: FamilyBindingOrderByWithAggregationInput | FamilyBindingOrderByWithAggregationInput[]
    by: FamilyBindingScalarFieldEnum[] | FamilyBindingScalarFieldEnum
    having?: FamilyBindingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyBindingCountAggregateInputType | true
    _min?: FamilyBindingMinAggregateInputType
    _max?: FamilyBindingMaxAggregateInputType
  }

  export type FamilyBindingGroupByOutputType = {
    id: string
    patientId: string
    familyId: string
    verified: boolean
    createdAt: Date
    _count: FamilyBindingCountAggregateOutputType | null
    _min: FamilyBindingMinAggregateOutputType | null
    _max: FamilyBindingMaxAggregateOutputType | null
  }

  type GetFamilyBindingGroupByPayload<T extends FamilyBindingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyBindingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyBindingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyBindingGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyBindingGroupByOutputType[P]>
        }
      >
    >


  export type FamilyBindingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    familyId?: boolean
    verified?: boolean
    createdAt?: boolean
    patient?: boolean | UserDefaultArgs<ExtArgs>
    family?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyBinding"]>

  export type FamilyBindingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    familyId?: boolean
    verified?: boolean
    createdAt?: boolean
    patient?: boolean | UserDefaultArgs<ExtArgs>
    family?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyBinding"]>

  export type FamilyBindingSelectScalar = {
    id?: boolean
    patientId?: boolean
    familyId?: boolean
    verified?: boolean
    createdAt?: boolean
  }

  export type FamilyBindingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UserDefaultArgs<ExtArgs>
    family?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FamilyBindingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UserDefaultArgs<ExtArgs>
    family?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FamilyBindingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FamilyBinding"
    objects: {
      patient: Prisma.$UserPayload<ExtArgs>
      family: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      familyId: string
      verified: boolean
      createdAt: Date
    }, ExtArgs["result"]["familyBinding"]>
    composites: {}
  }

  type FamilyBindingGetPayload<S extends boolean | null | undefined | FamilyBindingDefaultArgs> = $Result.GetResult<Prisma.$FamilyBindingPayload, S>

  type FamilyBindingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FamilyBindingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FamilyBindingCountAggregateInputType | true
    }

  export interface FamilyBindingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FamilyBinding'], meta: { name: 'FamilyBinding' } }
    /**
     * Find zero or one FamilyBinding that matches the filter.
     * @param {FamilyBindingFindUniqueArgs} args - Arguments to find a FamilyBinding
     * @example
     * // Get one FamilyBinding
     * const familyBinding = await prisma.familyBinding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamilyBindingFindUniqueArgs>(args: SelectSubset<T, FamilyBindingFindUniqueArgs<ExtArgs>>): Prisma__FamilyBindingClient<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FamilyBinding that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FamilyBindingFindUniqueOrThrowArgs} args - Arguments to find a FamilyBinding
     * @example
     * // Get one FamilyBinding
     * const familyBinding = await prisma.familyBinding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamilyBindingFindUniqueOrThrowArgs>(args: SelectSubset<T, FamilyBindingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamilyBindingClient<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FamilyBinding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyBindingFindFirstArgs} args - Arguments to find a FamilyBinding
     * @example
     * // Get one FamilyBinding
     * const familyBinding = await prisma.familyBinding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamilyBindingFindFirstArgs>(args?: SelectSubset<T, FamilyBindingFindFirstArgs<ExtArgs>>): Prisma__FamilyBindingClient<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FamilyBinding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyBindingFindFirstOrThrowArgs} args - Arguments to find a FamilyBinding
     * @example
     * // Get one FamilyBinding
     * const familyBinding = await prisma.familyBinding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamilyBindingFindFirstOrThrowArgs>(args?: SelectSubset<T, FamilyBindingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamilyBindingClient<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FamilyBindings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyBindingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FamilyBindings
     * const familyBindings = await prisma.familyBinding.findMany()
     * 
     * // Get first 10 FamilyBindings
     * const familyBindings = await prisma.familyBinding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyBindingWithIdOnly = await prisma.familyBinding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamilyBindingFindManyArgs>(args?: SelectSubset<T, FamilyBindingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FamilyBinding.
     * @param {FamilyBindingCreateArgs} args - Arguments to create a FamilyBinding.
     * @example
     * // Create one FamilyBinding
     * const FamilyBinding = await prisma.familyBinding.create({
     *   data: {
     *     // ... data to create a FamilyBinding
     *   }
     * })
     * 
     */
    create<T extends FamilyBindingCreateArgs>(args: SelectSubset<T, FamilyBindingCreateArgs<ExtArgs>>): Prisma__FamilyBindingClient<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FamilyBindings.
     * @param {FamilyBindingCreateManyArgs} args - Arguments to create many FamilyBindings.
     * @example
     * // Create many FamilyBindings
     * const familyBinding = await prisma.familyBinding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamilyBindingCreateManyArgs>(args?: SelectSubset<T, FamilyBindingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FamilyBindings and returns the data saved in the database.
     * @param {FamilyBindingCreateManyAndReturnArgs} args - Arguments to create many FamilyBindings.
     * @example
     * // Create many FamilyBindings
     * const familyBinding = await prisma.familyBinding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FamilyBindings and only return the `id`
     * const familyBindingWithIdOnly = await prisma.familyBinding.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FamilyBindingCreateManyAndReturnArgs>(args?: SelectSubset<T, FamilyBindingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FamilyBinding.
     * @param {FamilyBindingDeleteArgs} args - Arguments to delete one FamilyBinding.
     * @example
     * // Delete one FamilyBinding
     * const FamilyBinding = await prisma.familyBinding.delete({
     *   where: {
     *     // ... filter to delete one FamilyBinding
     *   }
     * })
     * 
     */
    delete<T extends FamilyBindingDeleteArgs>(args: SelectSubset<T, FamilyBindingDeleteArgs<ExtArgs>>): Prisma__FamilyBindingClient<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FamilyBinding.
     * @param {FamilyBindingUpdateArgs} args - Arguments to update one FamilyBinding.
     * @example
     * // Update one FamilyBinding
     * const familyBinding = await prisma.familyBinding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamilyBindingUpdateArgs>(args: SelectSubset<T, FamilyBindingUpdateArgs<ExtArgs>>): Prisma__FamilyBindingClient<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FamilyBindings.
     * @param {FamilyBindingDeleteManyArgs} args - Arguments to filter FamilyBindings to delete.
     * @example
     * // Delete a few FamilyBindings
     * const { count } = await prisma.familyBinding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamilyBindingDeleteManyArgs>(args?: SelectSubset<T, FamilyBindingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyBindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyBindingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FamilyBindings
     * const familyBinding = await prisma.familyBinding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamilyBindingUpdateManyArgs>(args: SelectSubset<T, FamilyBindingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FamilyBinding.
     * @param {FamilyBindingUpsertArgs} args - Arguments to update or create a FamilyBinding.
     * @example
     * // Update or create a FamilyBinding
     * const familyBinding = await prisma.familyBinding.upsert({
     *   create: {
     *     // ... data to create a FamilyBinding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FamilyBinding we want to update
     *   }
     * })
     */
    upsert<T extends FamilyBindingUpsertArgs>(args: SelectSubset<T, FamilyBindingUpsertArgs<ExtArgs>>): Prisma__FamilyBindingClient<$Result.GetResult<Prisma.$FamilyBindingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FamilyBindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyBindingCountArgs} args - Arguments to filter FamilyBindings to count.
     * @example
     * // Count the number of FamilyBindings
     * const count = await prisma.familyBinding.count({
     *   where: {
     *     // ... the filter for the FamilyBindings we want to count
     *   }
     * })
    **/
    count<T extends FamilyBindingCountArgs>(
      args?: Subset<T, FamilyBindingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyBindingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FamilyBinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyBindingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamilyBindingAggregateArgs>(args: Subset<T, FamilyBindingAggregateArgs>): Prisma.PrismaPromise<GetFamilyBindingAggregateType<T>>

    /**
     * Group by FamilyBinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyBindingGroupByArgs} args - Group by arguments.
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
      T extends FamilyBindingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyBindingGroupByArgs['orderBy'] }
        : { orderBy?: FamilyBindingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamilyBindingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyBindingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FamilyBinding model
   */
  readonly fields: FamilyBindingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FamilyBinding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyBindingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    family<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FamilyBinding model
   */ 
  interface FamilyBindingFieldRefs {
    readonly id: FieldRef<"FamilyBinding", 'String'>
    readonly patientId: FieldRef<"FamilyBinding", 'String'>
    readonly familyId: FieldRef<"FamilyBinding", 'String'>
    readonly verified: FieldRef<"FamilyBinding", 'Boolean'>
    readonly createdAt: FieldRef<"FamilyBinding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FamilyBinding findUnique
   */
  export type FamilyBindingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
    /**
     * Filter, which FamilyBinding to fetch.
     */
    where: FamilyBindingWhereUniqueInput
  }

  /**
   * FamilyBinding findUniqueOrThrow
   */
  export type FamilyBindingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
    /**
     * Filter, which FamilyBinding to fetch.
     */
    where: FamilyBindingWhereUniqueInput
  }

  /**
   * FamilyBinding findFirst
   */
  export type FamilyBindingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
    /**
     * Filter, which FamilyBinding to fetch.
     */
    where?: FamilyBindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyBindings to fetch.
     */
    orderBy?: FamilyBindingOrderByWithRelationInput | FamilyBindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyBindings.
     */
    cursor?: FamilyBindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyBindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyBindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyBindings.
     */
    distinct?: FamilyBindingScalarFieldEnum | FamilyBindingScalarFieldEnum[]
  }

  /**
   * FamilyBinding findFirstOrThrow
   */
  export type FamilyBindingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
    /**
     * Filter, which FamilyBinding to fetch.
     */
    where?: FamilyBindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyBindings to fetch.
     */
    orderBy?: FamilyBindingOrderByWithRelationInput | FamilyBindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyBindings.
     */
    cursor?: FamilyBindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyBindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyBindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyBindings.
     */
    distinct?: FamilyBindingScalarFieldEnum | FamilyBindingScalarFieldEnum[]
  }

  /**
   * FamilyBinding findMany
   */
  export type FamilyBindingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
    /**
     * Filter, which FamilyBindings to fetch.
     */
    where?: FamilyBindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyBindings to fetch.
     */
    orderBy?: FamilyBindingOrderByWithRelationInput | FamilyBindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FamilyBindings.
     */
    cursor?: FamilyBindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyBindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyBindings.
     */
    skip?: number
    distinct?: FamilyBindingScalarFieldEnum | FamilyBindingScalarFieldEnum[]
  }

  /**
   * FamilyBinding create
   */
  export type FamilyBindingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
    /**
     * The data needed to create a FamilyBinding.
     */
    data: XOR<FamilyBindingCreateInput, FamilyBindingUncheckedCreateInput>
  }

  /**
   * FamilyBinding createMany
   */
  export type FamilyBindingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FamilyBindings.
     */
    data: FamilyBindingCreateManyInput | FamilyBindingCreateManyInput[]
  }

  /**
   * FamilyBinding createManyAndReturn
   */
  export type FamilyBindingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FamilyBindings.
     */
    data: FamilyBindingCreateManyInput | FamilyBindingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FamilyBinding update
   */
  export type FamilyBindingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
    /**
     * The data needed to update a FamilyBinding.
     */
    data: XOR<FamilyBindingUpdateInput, FamilyBindingUncheckedUpdateInput>
    /**
     * Choose, which FamilyBinding to update.
     */
    where: FamilyBindingWhereUniqueInput
  }

  /**
   * FamilyBinding updateMany
   */
  export type FamilyBindingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FamilyBindings.
     */
    data: XOR<FamilyBindingUpdateManyMutationInput, FamilyBindingUncheckedUpdateManyInput>
    /**
     * Filter which FamilyBindings to update
     */
    where?: FamilyBindingWhereInput
  }

  /**
   * FamilyBinding upsert
   */
  export type FamilyBindingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
    /**
     * The filter to search for the FamilyBinding to update in case it exists.
     */
    where: FamilyBindingWhereUniqueInput
    /**
     * In case the FamilyBinding found by the `where` argument doesn't exist, create a new FamilyBinding with this data.
     */
    create: XOR<FamilyBindingCreateInput, FamilyBindingUncheckedCreateInput>
    /**
     * In case the FamilyBinding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyBindingUpdateInput, FamilyBindingUncheckedUpdateInput>
  }

  /**
   * FamilyBinding delete
   */
  export type FamilyBindingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
    /**
     * Filter which FamilyBinding to delete.
     */
    where: FamilyBindingWhereUniqueInput
  }

  /**
   * FamilyBinding deleteMany
   */
  export type FamilyBindingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyBindings to delete
     */
    where?: FamilyBindingWhereInput
  }

  /**
   * FamilyBinding without action
   */
  export type FamilyBindingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyBinding
     */
    select?: FamilyBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyBindingInclude<ExtArgs> | null
  }


  /**
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    dosage: string | null
    frequency: string | null
    scheduleJson: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    dosage: string | null
    frequency: string | null
    scheduleJson: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    dosage: number
    frequency: number
    scheduleJson: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicineMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    dosage?: true
    frequency?: true
    scheduleJson?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    dosage?: true
    frequency?: true
    scheduleJson?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    dosage?: true
    frequency?: true
    scheduleJson?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: string
    userId: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: MedicineCountAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    dosage?: boolean
    frequency?: boolean
    scheduleJson?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    inventory?: boolean | Medicine$inventoryArgs<ExtArgs>
    prescriptions?: boolean | Medicine$prescriptionsArgs<ExtArgs>
    checkIns?: boolean | Medicine$checkInsArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    dosage?: boolean
    frequency?: boolean
    scheduleJson?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    dosage?: boolean
    frequency?: boolean
    scheduleJson?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    inventory?: boolean | Medicine$inventoryArgs<ExtArgs>
    prescriptions?: boolean | Medicine$prescriptionsArgs<ExtArgs>
    checkIns?: boolean | Medicine$checkInsArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      inventory: Prisma.$MedicineInventoryPayload<ExtArgs> | null
      prescriptions: Prisma.$MedicinePrescriptionPayload<ExtArgs>[]
      checkIns: Prisma.$CheckInPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      dosage: string
      frequency: string
      scheduleJson: string
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineFindUniqueArgs>(args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineFindFirstArgs>(args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineFindManyArgs>(args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends MedicineCreateArgs>(args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Medicines.
     * @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineCreateManyArgs>(args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicineCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends MedicineDeleteArgs>(args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineUpdateArgs>(args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineDeleteManyArgs>(args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineUpdateManyArgs>(args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends MedicineUpsertArgs>(args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
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
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inventory<T extends Medicine$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$inventoryArgs<ExtArgs>>): Prisma__MedicineInventoryClient<$Result.GetResult<Prisma.$MedicineInventoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    prescriptions<T extends Medicine$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePrescriptionPayload<ExtArgs>, T, "findMany"> | Null>
    checkIns<T extends Medicine$checkInsArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$checkInsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Medicine model
   */ 
  interface MedicineFieldRefs {
    readonly id: FieldRef<"Medicine", 'String'>
    readonly userId: FieldRef<"Medicine", 'String'>
    readonly name: FieldRef<"Medicine", 'String'>
    readonly dosage: FieldRef<"Medicine", 'String'>
    readonly frequency: FieldRef<"Medicine", 'String'>
    readonly scheduleJson: FieldRef<"Medicine", 'String'>
    readonly note: FieldRef<"Medicine", 'String'>
    readonly createdAt: FieldRef<"Medicine", 'DateTime'>
    readonly updatedAt: FieldRef<"Medicine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }

  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
  }

  /**
   * Medicine createManyAndReturn
   */
  export type MedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
  }

  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }

  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
  }

  /**
   * Medicine.inventory
   */
  export type Medicine$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryInclude<ExtArgs> | null
    where?: MedicineInventoryWhereInput
  }

  /**
   * Medicine.prescriptions
   */
  export type Medicine$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionInclude<ExtArgs> | null
    where?: MedicinePrescriptionWhereInput
    orderBy?: MedicinePrescriptionOrderByWithRelationInput | MedicinePrescriptionOrderByWithRelationInput[]
    cursor?: MedicinePrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicinePrescriptionScalarFieldEnum | MedicinePrescriptionScalarFieldEnum[]
  }

  /**
   * Medicine.checkIns
   */
  export type Medicine$checkInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    cursor?: CheckInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
  }


  /**
   * Model MedicineInventory
   */

  export type AggregateMedicineInventory = {
    _count: MedicineInventoryCountAggregateOutputType | null
    _avg: MedicineInventoryAvgAggregateOutputType | null
    _sum: MedicineInventorySumAggregateOutputType | null
    _min: MedicineInventoryMinAggregateOutputType | null
    _max: MedicineInventoryMaxAggregateOutputType | null
  }

  export type MedicineInventoryAvgAggregateOutputType = {
    totalCount: number | null
    remainingCount: number | null
    alertThreshold: number | null
  }

  export type MedicineInventorySumAggregateOutputType = {
    totalCount: number | null
    remainingCount: number | null
    alertThreshold: number | null
  }

  export type MedicineInventoryMinAggregateOutputType = {
    id: string | null
    medicineId: string | null
    totalCount: number | null
    remainingCount: number | null
    unit: string | null
    alertThreshold: number | null
    updatedAt: Date | null
  }

  export type MedicineInventoryMaxAggregateOutputType = {
    id: string | null
    medicineId: string | null
    totalCount: number | null
    remainingCount: number | null
    unit: string | null
    alertThreshold: number | null
    updatedAt: Date | null
  }

  export type MedicineInventoryCountAggregateOutputType = {
    id: number
    medicineId: number
    totalCount: number
    remainingCount: number
    unit: number
    alertThreshold: number
    updatedAt: number
    _all: number
  }


  export type MedicineInventoryAvgAggregateInputType = {
    totalCount?: true
    remainingCount?: true
    alertThreshold?: true
  }

  export type MedicineInventorySumAggregateInputType = {
    totalCount?: true
    remainingCount?: true
    alertThreshold?: true
  }

  export type MedicineInventoryMinAggregateInputType = {
    id?: true
    medicineId?: true
    totalCount?: true
    remainingCount?: true
    unit?: true
    alertThreshold?: true
    updatedAt?: true
  }

  export type MedicineInventoryMaxAggregateInputType = {
    id?: true
    medicineId?: true
    totalCount?: true
    remainingCount?: true
    unit?: true
    alertThreshold?: true
    updatedAt?: true
  }

  export type MedicineInventoryCountAggregateInputType = {
    id?: true
    medicineId?: true
    totalCount?: true
    remainingCount?: true
    unit?: true
    alertThreshold?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicineInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineInventory to aggregate.
     */
    where?: MedicineInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineInventories to fetch.
     */
    orderBy?: MedicineInventoryOrderByWithRelationInput | MedicineInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicineInventories
    **/
    _count?: true | MedicineInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineInventoryMaxAggregateInputType
  }

  export type GetMedicineInventoryAggregateType<T extends MedicineInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicineInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicineInventory[P]>
      : GetScalarType<T[P], AggregateMedicineInventory[P]>
  }




  export type MedicineInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineInventoryWhereInput
    orderBy?: MedicineInventoryOrderByWithAggregationInput | MedicineInventoryOrderByWithAggregationInput[]
    by: MedicineInventoryScalarFieldEnum[] | MedicineInventoryScalarFieldEnum
    having?: MedicineInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineInventoryCountAggregateInputType | true
    _avg?: MedicineInventoryAvgAggregateInputType
    _sum?: MedicineInventorySumAggregateInputType
    _min?: MedicineInventoryMinAggregateInputType
    _max?: MedicineInventoryMaxAggregateInputType
  }

  export type MedicineInventoryGroupByOutputType = {
    id: string
    medicineId: string
    totalCount: number
    remainingCount: number
    unit: string
    alertThreshold: number
    updatedAt: Date
    _count: MedicineInventoryCountAggregateOutputType | null
    _avg: MedicineInventoryAvgAggregateOutputType | null
    _sum: MedicineInventorySumAggregateOutputType | null
    _min: MedicineInventoryMinAggregateOutputType | null
    _max: MedicineInventoryMaxAggregateOutputType | null
  }

  type GetMedicineInventoryGroupByPayload<T extends MedicineInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineInventoryGroupByOutputType[P]>
        }
      >
    >


  export type MedicineInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    totalCount?: boolean
    remainingCount?: boolean
    unit?: boolean
    alertThreshold?: boolean
    updatedAt?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineInventory"]>

  export type MedicineInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    totalCount?: boolean
    remainingCount?: boolean
    unit?: boolean
    alertThreshold?: boolean
    updatedAt?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineInventory"]>

  export type MedicineInventorySelectScalar = {
    id?: boolean
    medicineId?: boolean
    totalCount?: boolean
    remainingCount?: boolean
    unit?: boolean
    alertThreshold?: boolean
    updatedAt?: boolean
  }

  export type MedicineInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type MedicineInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $MedicineInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicineInventory"
    objects: {
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medicineId: string
      totalCount: number
      remainingCount: number
      unit: string
      alertThreshold: number
      updatedAt: Date
    }, ExtArgs["result"]["medicineInventory"]>
    composites: {}
  }

  type MedicineInventoryGetPayload<S extends boolean | null | undefined | MedicineInventoryDefaultArgs> = $Result.GetResult<Prisma.$MedicineInventoryPayload, S>

  type MedicineInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicineInventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicineInventoryCountAggregateInputType | true
    }

  export interface MedicineInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicineInventory'], meta: { name: 'MedicineInventory' } }
    /**
     * Find zero or one MedicineInventory that matches the filter.
     * @param {MedicineInventoryFindUniqueArgs} args - Arguments to find a MedicineInventory
     * @example
     * // Get one MedicineInventory
     * const medicineInventory = await prisma.medicineInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineInventoryFindUniqueArgs>(args: SelectSubset<T, MedicineInventoryFindUniqueArgs<ExtArgs>>): Prisma__MedicineInventoryClient<$Result.GetResult<Prisma.$MedicineInventoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MedicineInventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicineInventoryFindUniqueOrThrowArgs} args - Arguments to find a MedicineInventory
     * @example
     * // Get one MedicineInventory
     * const medicineInventory = await prisma.medicineInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineInventoryClient<$Result.GetResult<Prisma.$MedicineInventoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MedicineInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineInventoryFindFirstArgs} args - Arguments to find a MedicineInventory
     * @example
     * // Get one MedicineInventory
     * const medicineInventory = await prisma.medicineInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineInventoryFindFirstArgs>(args?: SelectSubset<T, MedicineInventoryFindFirstArgs<ExtArgs>>): Prisma__MedicineInventoryClient<$Result.GetResult<Prisma.$MedicineInventoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MedicineInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineInventoryFindFirstOrThrowArgs} args - Arguments to find a MedicineInventory
     * @example
     * // Get one MedicineInventory
     * const medicineInventory = await prisma.medicineInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineInventoryClient<$Result.GetResult<Prisma.$MedicineInventoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MedicineInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicineInventories
     * const medicineInventories = await prisma.medicineInventory.findMany()
     * 
     * // Get first 10 MedicineInventories
     * const medicineInventories = await prisma.medicineInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineInventoryWithIdOnly = await prisma.medicineInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineInventoryFindManyArgs>(args?: SelectSubset<T, MedicineInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineInventoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MedicineInventory.
     * @param {MedicineInventoryCreateArgs} args - Arguments to create a MedicineInventory.
     * @example
     * // Create one MedicineInventory
     * const MedicineInventory = await prisma.medicineInventory.create({
     *   data: {
     *     // ... data to create a MedicineInventory
     *   }
     * })
     * 
     */
    create<T extends MedicineInventoryCreateArgs>(args: SelectSubset<T, MedicineInventoryCreateArgs<ExtArgs>>): Prisma__MedicineInventoryClient<$Result.GetResult<Prisma.$MedicineInventoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MedicineInventories.
     * @param {MedicineInventoryCreateManyArgs} args - Arguments to create many MedicineInventories.
     * @example
     * // Create many MedicineInventories
     * const medicineInventory = await prisma.medicineInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineInventoryCreateManyArgs>(args?: SelectSubset<T, MedicineInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicineInventories and returns the data saved in the database.
     * @param {MedicineInventoryCreateManyAndReturnArgs} args - Arguments to create many MedicineInventories.
     * @example
     * // Create many MedicineInventories
     * const medicineInventory = await prisma.medicineInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicineInventories and only return the `id`
     * const medicineInventoryWithIdOnly = await prisma.medicineInventory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineInventoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MedicineInventory.
     * @param {MedicineInventoryDeleteArgs} args - Arguments to delete one MedicineInventory.
     * @example
     * // Delete one MedicineInventory
     * const MedicineInventory = await prisma.medicineInventory.delete({
     *   where: {
     *     // ... filter to delete one MedicineInventory
     *   }
     * })
     * 
     */
    delete<T extends MedicineInventoryDeleteArgs>(args: SelectSubset<T, MedicineInventoryDeleteArgs<ExtArgs>>): Prisma__MedicineInventoryClient<$Result.GetResult<Prisma.$MedicineInventoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MedicineInventory.
     * @param {MedicineInventoryUpdateArgs} args - Arguments to update one MedicineInventory.
     * @example
     * // Update one MedicineInventory
     * const medicineInventory = await prisma.medicineInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineInventoryUpdateArgs>(args: SelectSubset<T, MedicineInventoryUpdateArgs<ExtArgs>>): Prisma__MedicineInventoryClient<$Result.GetResult<Prisma.$MedicineInventoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MedicineInventories.
     * @param {MedicineInventoryDeleteManyArgs} args - Arguments to filter MedicineInventories to delete.
     * @example
     * // Delete a few MedicineInventories
     * const { count } = await prisma.medicineInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineInventoryDeleteManyArgs>(args?: SelectSubset<T, MedicineInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicineInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicineInventories
     * const medicineInventory = await prisma.medicineInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineInventoryUpdateManyArgs>(args: SelectSubset<T, MedicineInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicineInventory.
     * @param {MedicineInventoryUpsertArgs} args - Arguments to update or create a MedicineInventory.
     * @example
     * // Update or create a MedicineInventory
     * const medicineInventory = await prisma.medicineInventory.upsert({
     *   create: {
     *     // ... data to create a MedicineInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicineInventory we want to update
     *   }
     * })
     */
    upsert<T extends MedicineInventoryUpsertArgs>(args: SelectSubset<T, MedicineInventoryUpsertArgs<ExtArgs>>): Prisma__MedicineInventoryClient<$Result.GetResult<Prisma.$MedicineInventoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MedicineInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineInventoryCountArgs} args - Arguments to filter MedicineInventories to count.
     * @example
     * // Count the number of MedicineInventories
     * const count = await prisma.medicineInventory.count({
     *   where: {
     *     // ... the filter for the MedicineInventories we want to count
     *   }
     * })
    **/
    count<T extends MedicineInventoryCountArgs>(
      args?: Subset<T, MedicineInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicineInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicineInventoryAggregateArgs>(args: Subset<T, MedicineInventoryAggregateArgs>): Prisma.PrismaPromise<GetMedicineInventoryAggregateType<T>>

    /**
     * Group by MedicineInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineInventoryGroupByArgs} args - Group by arguments.
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
      T extends MedicineInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineInventoryGroupByArgs['orderBy'] }
        : { orderBy?: MedicineInventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicineInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicineInventory model
   */
  readonly fields: MedicineInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicineInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MedicineInventory model
   */ 
  interface MedicineInventoryFieldRefs {
    readonly id: FieldRef<"MedicineInventory", 'String'>
    readonly medicineId: FieldRef<"MedicineInventory", 'String'>
    readonly totalCount: FieldRef<"MedicineInventory", 'Int'>
    readonly remainingCount: FieldRef<"MedicineInventory", 'Int'>
    readonly unit: FieldRef<"MedicineInventory", 'String'>
    readonly alertThreshold: FieldRef<"MedicineInventory", 'Int'>
    readonly updatedAt: FieldRef<"MedicineInventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicineInventory findUnique
   */
  export type MedicineInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicineInventory to fetch.
     */
    where: MedicineInventoryWhereUniqueInput
  }

  /**
   * MedicineInventory findUniqueOrThrow
   */
  export type MedicineInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicineInventory to fetch.
     */
    where: MedicineInventoryWhereUniqueInput
  }

  /**
   * MedicineInventory findFirst
   */
  export type MedicineInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicineInventory to fetch.
     */
    where?: MedicineInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineInventories to fetch.
     */
    orderBy?: MedicineInventoryOrderByWithRelationInput | MedicineInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineInventories.
     */
    cursor?: MedicineInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineInventories.
     */
    distinct?: MedicineInventoryScalarFieldEnum | MedicineInventoryScalarFieldEnum[]
  }

  /**
   * MedicineInventory findFirstOrThrow
   */
  export type MedicineInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicineInventory to fetch.
     */
    where?: MedicineInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineInventories to fetch.
     */
    orderBy?: MedicineInventoryOrderByWithRelationInput | MedicineInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineInventories.
     */
    cursor?: MedicineInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineInventories.
     */
    distinct?: MedicineInventoryScalarFieldEnum | MedicineInventoryScalarFieldEnum[]
  }

  /**
   * MedicineInventory findMany
   */
  export type MedicineInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicineInventories to fetch.
     */
    where?: MedicineInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineInventories to fetch.
     */
    orderBy?: MedicineInventoryOrderByWithRelationInput | MedicineInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicineInventories.
     */
    cursor?: MedicineInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineInventories.
     */
    skip?: number
    distinct?: MedicineInventoryScalarFieldEnum | MedicineInventoryScalarFieldEnum[]
  }

  /**
   * MedicineInventory create
   */
  export type MedicineInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicineInventory.
     */
    data: XOR<MedicineInventoryCreateInput, MedicineInventoryUncheckedCreateInput>
  }

  /**
   * MedicineInventory createMany
   */
  export type MedicineInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicineInventories.
     */
    data: MedicineInventoryCreateManyInput | MedicineInventoryCreateManyInput[]
  }

  /**
   * MedicineInventory createManyAndReturn
   */
  export type MedicineInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MedicineInventories.
     */
    data: MedicineInventoryCreateManyInput | MedicineInventoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicineInventory update
   */
  export type MedicineInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicineInventory.
     */
    data: XOR<MedicineInventoryUpdateInput, MedicineInventoryUncheckedUpdateInput>
    /**
     * Choose, which MedicineInventory to update.
     */
    where: MedicineInventoryWhereUniqueInput
  }

  /**
   * MedicineInventory updateMany
   */
  export type MedicineInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicineInventories.
     */
    data: XOR<MedicineInventoryUpdateManyMutationInput, MedicineInventoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicineInventories to update
     */
    where?: MedicineInventoryWhereInput
  }

  /**
   * MedicineInventory upsert
   */
  export type MedicineInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicineInventory to update in case it exists.
     */
    where: MedicineInventoryWhereUniqueInput
    /**
     * In case the MedicineInventory found by the `where` argument doesn't exist, create a new MedicineInventory with this data.
     */
    create: XOR<MedicineInventoryCreateInput, MedicineInventoryUncheckedCreateInput>
    /**
     * In case the MedicineInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineInventoryUpdateInput, MedicineInventoryUncheckedUpdateInput>
  }

  /**
   * MedicineInventory delete
   */
  export type MedicineInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryInclude<ExtArgs> | null
    /**
     * Filter which MedicineInventory to delete.
     */
    where: MedicineInventoryWhereUniqueInput
  }

  /**
   * MedicineInventory deleteMany
   */
  export type MedicineInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineInventories to delete
     */
    where?: MedicineInventoryWhereInput
  }

  /**
   * MedicineInventory without action
   */
  export type MedicineInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineInventory
     */
    select?: MedicineInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInventoryInclude<ExtArgs> | null
  }


  /**
   * Model MedicinePrescription
   */

  export type AggregateMedicinePrescription = {
    _count: MedicinePrescriptionCountAggregateOutputType | null
    _min: MedicinePrescriptionMinAggregateOutputType | null
    _max: MedicinePrescriptionMaxAggregateOutputType | null
  }

  export type MedicinePrescriptionMinAggregateOutputType = {
    id: string | null
    medicineId: string | null
    imageUrl: string | null
    ocrRawText: string | null
    ocrResultJson: string | null
    doctorName: string | null
    hospitalName: string | null
    prescribedAt: Date | null
    createdAt: Date | null
  }

  export type MedicinePrescriptionMaxAggregateOutputType = {
    id: string | null
    medicineId: string | null
    imageUrl: string | null
    ocrRawText: string | null
    ocrResultJson: string | null
    doctorName: string | null
    hospitalName: string | null
    prescribedAt: Date | null
    createdAt: Date | null
  }

  export type MedicinePrescriptionCountAggregateOutputType = {
    id: number
    medicineId: number
    imageUrl: number
    ocrRawText: number
    ocrResultJson: number
    doctorName: number
    hospitalName: number
    prescribedAt: number
    createdAt: number
    _all: number
  }


  export type MedicinePrescriptionMinAggregateInputType = {
    id?: true
    medicineId?: true
    imageUrl?: true
    ocrRawText?: true
    ocrResultJson?: true
    doctorName?: true
    hospitalName?: true
    prescribedAt?: true
    createdAt?: true
  }

  export type MedicinePrescriptionMaxAggregateInputType = {
    id?: true
    medicineId?: true
    imageUrl?: true
    ocrRawText?: true
    ocrResultJson?: true
    doctorName?: true
    hospitalName?: true
    prescribedAt?: true
    createdAt?: true
  }

  export type MedicinePrescriptionCountAggregateInputType = {
    id?: true
    medicineId?: true
    imageUrl?: true
    ocrRawText?: true
    ocrResultJson?: true
    doctorName?: true
    hospitalName?: true
    prescribedAt?: true
    createdAt?: true
    _all?: true
  }

  export type MedicinePrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicinePrescription to aggregate.
     */
    where?: MedicinePrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinePrescriptions to fetch.
     */
    orderBy?: MedicinePrescriptionOrderByWithRelationInput | MedicinePrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicinePrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinePrescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinePrescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicinePrescriptions
    **/
    _count?: true | MedicinePrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicinePrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicinePrescriptionMaxAggregateInputType
  }

  export type GetMedicinePrescriptionAggregateType<T extends MedicinePrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicinePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicinePrescription[P]>
      : GetScalarType<T[P], AggregateMedicinePrescription[P]>
  }




  export type MedicinePrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicinePrescriptionWhereInput
    orderBy?: MedicinePrescriptionOrderByWithAggregationInput | MedicinePrescriptionOrderByWithAggregationInput[]
    by: MedicinePrescriptionScalarFieldEnum[] | MedicinePrescriptionScalarFieldEnum
    having?: MedicinePrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicinePrescriptionCountAggregateInputType | true
    _min?: MedicinePrescriptionMinAggregateInputType
    _max?: MedicinePrescriptionMaxAggregateInputType
  }

  export type MedicinePrescriptionGroupByOutputType = {
    id: string
    medicineId: string
    imageUrl: string | null
    ocrRawText: string | null
    ocrResultJson: string | null
    doctorName: string | null
    hospitalName: string | null
    prescribedAt: Date | null
    createdAt: Date
    _count: MedicinePrescriptionCountAggregateOutputType | null
    _min: MedicinePrescriptionMinAggregateOutputType | null
    _max: MedicinePrescriptionMaxAggregateOutputType | null
  }

  type GetMedicinePrescriptionGroupByPayload<T extends MedicinePrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicinePrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicinePrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicinePrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], MedicinePrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type MedicinePrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    imageUrl?: boolean
    ocrRawText?: boolean
    ocrResultJson?: boolean
    doctorName?: boolean
    hospitalName?: boolean
    prescribedAt?: boolean
    createdAt?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicinePrescription"]>

  export type MedicinePrescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    imageUrl?: boolean
    ocrRawText?: boolean
    ocrResultJson?: boolean
    doctorName?: boolean
    hospitalName?: boolean
    prescribedAt?: boolean
    createdAt?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicinePrescription"]>

  export type MedicinePrescriptionSelectScalar = {
    id?: boolean
    medicineId?: boolean
    imageUrl?: boolean
    ocrRawText?: boolean
    ocrResultJson?: boolean
    doctorName?: boolean
    hospitalName?: boolean
    prescribedAt?: boolean
    createdAt?: boolean
  }

  export type MedicinePrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type MedicinePrescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $MedicinePrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicinePrescription"
    objects: {
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medicineId: string
      imageUrl: string | null
      ocrRawText: string | null
      ocrResultJson: string | null
      doctorName: string | null
      hospitalName: string | null
      prescribedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["medicinePrescription"]>
    composites: {}
  }

  type MedicinePrescriptionGetPayload<S extends boolean | null | undefined | MedicinePrescriptionDefaultArgs> = $Result.GetResult<Prisma.$MedicinePrescriptionPayload, S>

  type MedicinePrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicinePrescriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicinePrescriptionCountAggregateInputType | true
    }

  export interface MedicinePrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicinePrescription'], meta: { name: 'MedicinePrescription' } }
    /**
     * Find zero or one MedicinePrescription that matches the filter.
     * @param {MedicinePrescriptionFindUniqueArgs} args - Arguments to find a MedicinePrescription
     * @example
     * // Get one MedicinePrescription
     * const medicinePrescription = await prisma.medicinePrescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicinePrescriptionFindUniqueArgs>(args: SelectSubset<T, MedicinePrescriptionFindUniqueArgs<ExtArgs>>): Prisma__MedicinePrescriptionClient<$Result.GetResult<Prisma.$MedicinePrescriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MedicinePrescription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicinePrescriptionFindUniqueOrThrowArgs} args - Arguments to find a MedicinePrescription
     * @example
     * // Get one MedicinePrescription
     * const medicinePrescription = await prisma.medicinePrescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicinePrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicinePrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicinePrescriptionClient<$Result.GetResult<Prisma.$MedicinePrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MedicinePrescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePrescriptionFindFirstArgs} args - Arguments to find a MedicinePrescription
     * @example
     * // Get one MedicinePrescription
     * const medicinePrescription = await prisma.medicinePrescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicinePrescriptionFindFirstArgs>(args?: SelectSubset<T, MedicinePrescriptionFindFirstArgs<ExtArgs>>): Prisma__MedicinePrescriptionClient<$Result.GetResult<Prisma.$MedicinePrescriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MedicinePrescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePrescriptionFindFirstOrThrowArgs} args - Arguments to find a MedicinePrescription
     * @example
     * // Get one MedicinePrescription
     * const medicinePrescription = await prisma.medicinePrescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicinePrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicinePrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicinePrescriptionClient<$Result.GetResult<Prisma.$MedicinePrescriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MedicinePrescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicinePrescriptions
     * const medicinePrescriptions = await prisma.medicinePrescription.findMany()
     * 
     * // Get first 10 MedicinePrescriptions
     * const medicinePrescriptions = await prisma.medicinePrescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicinePrescriptionWithIdOnly = await prisma.medicinePrescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicinePrescriptionFindManyArgs>(args?: SelectSubset<T, MedicinePrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePrescriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MedicinePrescription.
     * @param {MedicinePrescriptionCreateArgs} args - Arguments to create a MedicinePrescription.
     * @example
     * // Create one MedicinePrescription
     * const MedicinePrescription = await prisma.medicinePrescription.create({
     *   data: {
     *     // ... data to create a MedicinePrescription
     *   }
     * })
     * 
     */
    create<T extends MedicinePrescriptionCreateArgs>(args: SelectSubset<T, MedicinePrescriptionCreateArgs<ExtArgs>>): Prisma__MedicinePrescriptionClient<$Result.GetResult<Prisma.$MedicinePrescriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MedicinePrescriptions.
     * @param {MedicinePrescriptionCreateManyArgs} args - Arguments to create many MedicinePrescriptions.
     * @example
     * // Create many MedicinePrescriptions
     * const medicinePrescription = await prisma.medicinePrescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicinePrescriptionCreateManyArgs>(args?: SelectSubset<T, MedicinePrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicinePrescriptions and returns the data saved in the database.
     * @param {MedicinePrescriptionCreateManyAndReturnArgs} args - Arguments to create many MedicinePrescriptions.
     * @example
     * // Create many MedicinePrescriptions
     * const medicinePrescription = await prisma.medicinePrescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicinePrescriptions and only return the `id`
     * const medicinePrescriptionWithIdOnly = await prisma.medicinePrescription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicinePrescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicinePrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePrescriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MedicinePrescription.
     * @param {MedicinePrescriptionDeleteArgs} args - Arguments to delete one MedicinePrescription.
     * @example
     * // Delete one MedicinePrescription
     * const MedicinePrescription = await prisma.medicinePrescription.delete({
     *   where: {
     *     // ... filter to delete one MedicinePrescription
     *   }
     * })
     * 
     */
    delete<T extends MedicinePrescriptionDeleteArgs>(args: SelectSubset<T, MedicinePrescriptionDeleteArgs<ExtArgs>>): Prisma__MedicinePrescriptionClient<$Result.GetResult<Prisma.$MedicinePrescriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MedicinePrescription.
     * @param {MedicinePrescriptionUpdateArgs} args - Arguments to update one MedicinePrescription.
     * @example
     * // Update one MedicinePrescription
     * const medicinePrescription = await prisma.medicinePrescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicinePrescriptionUpdateArgs>(args: SelectSubset<T, MedicinePrescriptionUpdateArgs<ExtArgs>>): Prisma__MedicinePrescriptionClient<$Result.GetResult<Prisma.$MedicinePrescriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MedicinePrescriptions.
     * @param {MedicinePrescriptionDeleteManyArgs} args - Arguments to filter MedicinePrescriptions to delete.
     * @example
     * // Delete a few MedicinePrescriptions
     * const { count } = await prisma.medicinePrescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicinePrescriptionDeleteManyArgs>(args?: SelectSubset<T, MedicinePrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicinePrescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicinePrescriptions
     * const medicinePrescription = await prisma.medicinePrescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicinePrescriptionUpdateManyArgs>(args: SelectSubset<T, MedicinePrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicinePrescription.
     * @param {MedicinePrescriptionUpsertArgs} args - Arguments to update or create a MedicinePrescription.
     * @example
     * // Update or create a MedicinePrescription
     * const medicinePrescription = await prisma.medicinePrescription.upsert({
     *   create: {
     *     // ... data to create a MedicinePrescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicinePrescription we want to update
     *   }
     * })
     */
    upsert<T extends MedicinePrescriptionUpsertArgs>(args: SelectSubset<T, MedicinePrescriptionUpsertArgs<ExtArgs>>): Prisma__MedicinePrescriptionClient<$Result.GetResult<Prisma.$MedicinePrescriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MedicinePrescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePrescriptionCountArgs} args - Arguments to filter MedicinePrescriptions to count.
     * @example
     * // Count the number of MedicinePrescriptions
     * const count = await prisma.medicinePrescription.count({
     *   where: {
     *     // ... the filter for the MedicinePrescriptions we want to count
     *   }
     * })
    **/
    count<T extends MedicinePrescriptionCountArgs>(
      args?: Subset<T, MedicinePrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicinePrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicinePrescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicinePrescriptionAggregateArgs>(args: Subset<T, MedicinePrescriptionAggregateArgs>): Prisma.PrismaPromise<GetMedicinePrescriptionAggregateType<T>>

    /**
     * Group by MedicinePrescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePrescriptionGroupByArgs} args - Group by arguments.
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
      T extends MedicinePrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicinePrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: MedicinePrescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicinePrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicinePrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicinePrescription model
   */
  readonly fields: MedicinePrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicinePrescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicinePrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MedicinePrescription model
   */ 
  interface MedicinePrescriptionFieldRefs {
    readonly id: FieldRef<"MedicinePrescription", 'String'>
    readonly medicineId: FieldRef<"MedicinePrescription", 'String'>
    readonly imageUrl: FieldRef<"MedicinePrescription", 'String'>
    readonly ocrRawText: FieldRef<"MedicinePrescription", 'String'>
    readonly ocrResultJson: FieldRef<"MedicinePrescription", 'String'>
    readonly doctorName: FieldRef<"MedicinePrescription", 'String'>
    readonly hospitalName: FieldRef<"MedicinePrescription", 'String'>
    readonly prescribedAt: FieldRef<"MedicinePrescription", 'DateTime'>
    readonly createdAt: FieldRef<"MedicinePrescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicinePrescription findUnique
   */
  export type MedicinePrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which MedicinePrescription to fetch.
     */
    where: MedicinePrescriptionWhereUniqueInput
  }

  /**
   * MedicinePrescription findUniqueOrThrow
   */
  export type MedicinePrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which MedicinePrescription to fetch.
     */
    where: MedicinePrescriptionWhereUniqueInput
  }

  /**
   * MedicinePrescription findFirst
   */
  export type MedicinePrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which MedicinePrescription to fetch.
     */
    where?: MedicinePrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinePrescriptions to fetch.
     */
    orderBy?: MedicinePrescriptionOrderByWithRelationInput | MedicinePrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicinePrescriptions.
     */
    cursor?: MedicinePrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinePrescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinePrescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicinePrescriptions.
     */
    distinct?: MedicinePrescriptionScalarFieldEnum | MedicinePrescriptionScalarFieldEnum[]
  }

  /**
   * MedicinePrescription findFirstOrThrow
   */
  export type MedicinePrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which MedicinePrescription to fetch.
     */
    where?: MedicinePrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinePrescriptions to fetch.
     */
    orderBy?: MedicinePrescriptionOrderByWithRelationInput | MedicinePrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicinePrescriptions.
     */
    cursor?: MedicinePrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinePrescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinePrescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicinePrescriptions.
     */
    distinct?: MedicinePrescriptionScalarFieldEnum | MedicinePrescriptionScalarFieldEnum[]
  }

  /**
   * MedicinePrescription findMany
   */
  export type MedicinePrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which MedicinePrescriptions to fetch.
     */
    where?: MedicinePrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinePrescriptions to fetch.
     */
    orderBy?: MedicinePrescriptionOrderByWithRelationInput | MedicinePrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicinePrescriptions.
     */
    cursor?: MedicinePrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinePrescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinePrescriptions.
     */
    skip?: number
    distinct?: MedicinePrescriptionScalarFieldEnum | MedicinePrescriptionScalarFieldEnum[]
  }

  /**
   * MedicinePrescription create
   */
  export type MedicinePrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicinePrescription.
     */
    data: XOR<MedicinePrescriptionCreateInput, MedicinePrescriptionUncheckedCreateInput>
  }

  /**
   * MedicinePrescription createMany
   */
  export type MedicinePrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicinePrescriptions.
     */
    data: MedicinePrescriptionCreateManyInput | MedicinePrescriptionCreateManyInput[]
  }

  /**
   * MedicinePrescription createManyAndReturn
   */
  export type MedicinePrescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MedicinePrescriptions.
     */
    data: MedicinePrescriptionCreateManyInput | MedicinePrescriptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicinePrescription update
   */
  export type MedicinePrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicinePrescription.
     */
    data: XOR<MedicinePrescriptionUpdateInput, MedicinePrescriptionUncheckedUpdateInput>
    /**
     * Choose, which MedicinePrescription to update.
     */
    where: MedicinePrescriptionWhereUniqueInput
  }

  /**
   * MedicinePrescription updateMany
   */
  export type MedicinePrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicinePrescriptions.
     */
    data: XOR<MedicinePrescriptionUpdateManyMutationInput, MedicinePrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which MedicinePrescriptions to update
     */
    where?: MedicinePrescriptionWhereInput
  }

  /**
   * MedicinePrescription upsert
   */
  export type MedicinePrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicinePrescription to update in case it exists.
     */
    where: MedicinePrescriptionWhereUniqueInput
    /**
     * In case the MedicinePrescription found by the `where` argument doesn't exist, create a new MedicinePrescription with this data.
     */
    create: XOR<MedicinePrescriptionCreateInput, MedicinePrescriptionUncheckedCreateInput>
    /**
     * In case the MedicinePrescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicinePrescriptionUpdateInput, MedicinePrescriptionUncheckedUpdateInput>
  }

  /**
   * MedicinePrescription delete
   */
  export type MedicinePrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionInclude<ExtArgs> | null
    /**
     * Filter which MedicinePrescription to delete.
     */
    where: MedicinePrescriptionWhereUniqueInput
  }

  /**
   * MedicinePrescription deleteMany
   */
  export type MedicinePrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicinePrescriptions to delete
     */
    where?: MedicinePrescriptionWhereInput
  }

  /**
   * MedicinePrescription without action
   */
  export type MedicinePrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePrescription
     */
    select?: MedicinePrescriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model CheckIn
   */

  export type AggregateCheckIn = {
    _count: CheckInCountAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  export type CheckInMinAggregateOutputType = {
    id: string | null
    userId: string | null
    medicineId: string | null
    scheduledTime: Date | null
    actualTime: Date | null
    missed: boolean | null
    missedAlertSent: boolean | null
    confirmType: string | null
    createdAt: Date | null
  }

  export type CheckInMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    medicineId: string | null
    scheduledTime: Date | null
    actualTime: Date | null
    missed: boolean | null
    missedAlertSent: boolean | null
    confirmType: string | null
    createdAt: Date | null
  }

  export type CheckInCountAggregateOutputType = {
    id: number
    userId: number
    medicineId: number
    scheduledTime: number
    actualTime: number
    missed: number
    missedAlertSent: number
    confirmType: number
    createdAt: number
    _all: number
  }


  export type CheckInMinAggregateInputType = {
    id?: true
    userId?: true
    medicineId?: true
    scheduledTime?: true
    actualTime?: true
    missed?: true
    missedAlertSent?: true
    confirmType?: true
    createdAt?: true
  }

  export type CheckInMaxAggregateInputType = {
    id?: true
    userId?: true
    medicineId?: true
    scheduledTime?: true
    actualTime?: true
    missed?: true
    missedAlertSent?: true
    confirmType?: true
    createdAt?: true
  }

  export type CheckInCountAggregateInputType = {
    id?: true
    userId?: true
    medicineId?: true
    scheduledTime?: true
    actualTime?: true
    missed?: true
    missedAlertSent?: true
    confirmType?: true
    createdAt?: true
    _all?: true
  }

  export type CheckInAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIn to aggregate.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckIns
    **/
    _count?: true | CheckInCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckInMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckInMaxAggregateInputType
  }

  export type GetCheckInAggregateType<T extends CheckInAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckIn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckIn[P]>
      : GetScalarType<T[P], AggregateCheckIn[P]>
  }




  export type CheckInGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithAggregationInput | CheckInOrderByWithAggregationInput[]
    by: CheckInScalarFieldEnum[] | CheckInScalarFieldEnum
    having?: CheckInScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckInCountAggregateInputType | true
    _min?: CheckInMinAggregateInputType
    _max?: CheckInMaxAggregateInputType
  }

  export type CheckInGroupByOutputType = {
    id: string
    userId: string
    medicineId: string
    scheduledTime: Date
    actualTime: Date | null
    missed: boolean
    missedAlertSent: boolean
    confirmType: string | null
    createdAt: Date
    _count: CheckInCountAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  type GetCheckInGroupByPayload<T extends CheckInGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckInGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckInGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckInGroupByOutputType[P]>
            : GetScalarType<T[P], CheckInGroupByOutputType[P]>
        }
      >
    >


  export type CheckInSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    medicineId?: boolean
    scheduledTime?: boolean
    actualTime?: boolean
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    medicineId?: boolean
    scheduledTime?: boolean
    actualTime?: boolean
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectScalar = {
    id?: boolean
    userId?: boolean
    medicineId?: boolean
    scheduledTime?: boolean
    actualTime?: boolean
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: boolean
    createdAt?: boolean
  }

  export type CheckInInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type CheckInIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $CheckInPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckIn"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      medicineId: string
      scheduledTime: Date
      actualTime: Date | null
      missed: boolean
      missedAlertSent: boolean
      confirmType: string | null
      createdAt: Date
    }, ExtArgs["result"]["checkIn"]>
    composites: {}
  }

  type CheckInGetPayload<S extends boolean | null | undefined | CheckInDefaultArgs> = $Result.GetResult<Prisma.$CheckInPayload, S>

  type CheckInCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CheckInFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CheckInCountAggregateInputType | true
    }

  export interface CheckInDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckIn'], meta: { name: 'CheckIn' } }
    /**
     * Find zero or one CheckIn that matches the filter.
     * @param {CheckInFindUniqueArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckInFindUniqueArgs>(args: SelectSubset<T, CheckInFindUniqueArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CheckIn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CheckInFindUniqueOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckInFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckInFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CheckIn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckInFindFirstArgs>(args?: SelectSubset<T, CheckInFindFirstArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CheckIn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckInFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckInFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CheckIns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckIns
     * const checkIns = await prisma.checkIn.findMany()
     * 
     * // Get first 10 CheckIns
     * const checkIns = await prisma.checkIn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkInWithIdOnly = await prisma.checkIn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckInFindManyArgs>(args?: SelectSubset<T, CheckInFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CheckIn.
     * @param {CheckInCreateArgs} args - Arguments to create a CheckIn.
     * @example
     * // Create one CheckIn
     * const CheckIn = await prisma.checkIn.create({
     *   data: {
     *     // ... data to create a CheckIn
     *   }
     * })
     * 
     */
    create<T extends CheckInCreateArgs>(args: SelectSubset<T, CheckInCreateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CheckIns.
     * @param {CheckInCreateManyArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckInCreateManyArgs>(args?: SelectSubset<T, CheckInCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckIns and returns the data saved in the database.
     * @param {CheckInCreateManyAndReturnArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckIns and only return the `id`
     * const checkInWithIdOnly = await prisma.checkIn.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckInCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckInCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CheckIn.
     * @param {CheckInDeleteArgs} args - Arguments to delete one CheckIn.
     * @example
     * // Delete one CheckIn
     * const CheckIn = await prisma.checkIn.delete({
     *   where: {
     *     // ... filter to delete one CheckIn
     *   }
     * })
     * 
     */
    delete<T extends CheckInDeleteArgs>(args: SelectSubset<T, CheckInDeleteArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CheckIn.
     * @param {CheckInUpdateArgs} args - Arguments to update one CheckIn.
     * @example
     * // Update one CheckIn
     * const checkIn = await prisma.checkIn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckInUpdateArgs>(args: SelectSubset<T, CheckInUpdateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CheckIns.
     * @param {CheckInDeleteManyArgs} args - Arguments to filter CheckIns to delete.
     * @example
     * // Delete a few CheckIns
     * const { count } = await prisma.checkIn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckInDeleteManyArgs>(args?: SelectSubset<T, CheckInDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckInUpdateManyArgs>(args: SelectSubset<T, CheckInUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CheckIn.
     * @param {CheckInUpsertArgs} args - Arguments to update or create a CheckIn.
     * @example
     * // Update or create a CheckIn
     * const checkIn = await prisma.checkIn.upsert({
     *   create: {
     *     // ... data to create a CheckIn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckIn we want to update
     *   }
     * })
     */
    upsert<T extends CheckInUpsertArgs>(args: SelectSubset<T, CheckInUpsertArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInCountArgs} args - Arguments to filter CheckIns to count.
     * @example
     * // Count the number of CheckIns
     * const count = await prisma.checkIn.count({
     *   where: {
     *     // ... the filter for the CheckIns we want to count
     *   }
     * })
    **/
    count<T extends CheckInCountArgs>(
      args?: Subset<T, CheckInCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckInCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckInAggregateArgs>(args: Subset<T, CheckInAggregateArgs>): Prisma.PrismaPromise<GetCheckInAggregateType<T>>

    /**
     * Group by CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGroupByArgs} args - Group by arguments.
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
      T extends CheckInGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckInGroupByArgs['orderBy'] }
        : { orderBy?: CheckInGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckIn model
   */
  readonly fields: CheckInFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckIn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckInClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CheckIn model
   */ 
  interface CheckInFieldRefs {
    readonly id: FieldRef<"CheckIn", 'String'>
    readonly userId: FieldRef<"CheckIn", 'String'>
    readonly medicineId: FieldRef<"CheckIn", 'String'>
    readonly scheduledTime: FieldRef<"CheckIn", 'DateTime'>
    readonly actualTime: FieldRef<"CheckIn", 'DateTime'>
    readonly missed: FieldRef<"CheckIn", 'Boolean'>
    readonly missedAlertSent: FieldRef<"CheckIn", 'Boolean'>
    readonly confirmType: FieldRef<"CheckIn", 'String'>
    readonly createdAt: FieldRef<"CheckIn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckIn findUnique
   */
  export type CheckInFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findUniqueOrThrow
   */
  export type CheckInFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findFirst
   */
  export type CheckInFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findFirstOrThrow
   */
  export type CheckInFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findMany
   */
  export type CheckInFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIns to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn create
   */
  export type CheckInCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckIn.
     */
    data: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
  }

  /**
   * CheckIn createMany
   */
  export type CheckInCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
  }

  /**
   * CheckIn createManyAndReturn
   */
  export type CheckInCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckIn update
   */
  export type CheckInUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckIn.
     */
    data: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
    /**
     * Choose, which CheckIn to update.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn updateMany
   */
  export type CheckInUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput
  }

  /**
   * CheckIn upsert
   */
  export type CheckInUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckIn to update in case it exists.
     */
    where: CheckInWhereUniqueInput
    /**
     * In case the CheckIn found by the `where` argument doesn't exist, create a new CheckIn with this data.
     */
    create: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
    /**
     * In case the CheckIn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
  }

  /**
   * CheckIn delete
   */
  export type CheckInDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter which CheckIn to delete.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn deleteMany
   */
  export type CheckInDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIns to delete
     */
    where?: CheckInWhereInput
  }

  /**
   * CheckIn without action
   */
  export type CheckInDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
  }


  /**
   * Model SOAPRecord
   */

  export type AggregateSOAPRecord = {
    _count: SOAPRecordCountAggregateOutputType | null
    _avg: SOAPRecordAvgAggregateOutputType | null
    _sum: SOAPRecordSumAggregateOutputType | null
    _min: SOAPRecordMinAggregateOutputType | null
    _max: SOAPRecordMaxAggregateOutputType | null
  }

  export type SOAPRecordAvgAggregateOutputType = {
    bloodSugar: number | null
    heartRate: number | null
    weight: number | null
    temperature: number | null
    adherenceRate: number | null
  }

  export type SOAPRecordSumAggregateOutputType = {
    bloodSugar: number | null
    heartRate: number | null
    weight: number | null
    temperature: number | null
    adherenceRate: number | null
  }

  export type SOAPRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectiveNote: string | null
    symptomSeverity: string | null
    symptomTags: string | null
    bloodPressure: string | null
    bloodSugar: number | null
    heartRate: number | null
    weight: number | null
    temperature: number | null
    assessmentNote: string | null
    adherenceRate: number | null
    reportJson: string | null
    recordedAt: Date | null
    createdAt: Date | null
  }

  export type SOAPRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectiveNote: string | null
    symptomSeverity: string | null
    symptomTags: string | null
    bloodPressure: string | null
    bloodSugar: number | null
    heartRate: number | null
    weight: number | null
    temperature: number | null
    assessmentNote: string | null
    adherenceRate: number | null
    reportJson: string | null
    recordedAt: Date | null
    createdAt: Date | null
  }

  export type SOAPRecordCountAggregateOutputType = {
    id: number
    userId: number
    subjectiveNote: number
    symptomSeverity: number
    symptomTags: number
    bloodPressure: number
    bloodSugar: number
    heartRate: number
    weight: number
    temperature: number
    assessmentNote: number
    adherenceRate: number
    reportJson: number
    recordedAt: number
    createdAt: number
    _all: number
  }


  export type SOAPRecordAvgAggregateInputType = {
    bloodSugar?: true
    heartRate?: true
    weight?: true
    temperature?: true
    adherenceRate?: true
  }

  export type SOAPRecordSumAggregateInputType = {
    bloodSugar?: true
    heartRate?: true
    weight?: true
    temperature?: true
    adherenceRate?: true
  }

  export type SOAPRecordMinAggregateInputType = {
    id?: true
    userId?: true
    subjectiveNote?: true
    symptomSeverity?: true
    symptomTags?: true
    bloodPressure?: true
    bloodSugar?: true
    heartRate?: true
    weight?: true
    temperature?: true
    assessmentNote?: true
    adherenceRate?: true
    reportJson?: true
    recordedAt?: true
    createdAt?: true
  }

  export type SOAPRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    subjectiveNote?: true
    symptomSeverity?: true
    symptomTags?: true
    bloodPressure?: true
    bloodSugar?: true
    heartRate?: true
    weight?: true
    temperature?: true
    assessmentNote?: true
    adherenceRate?: true
    reportJson?: true
    recordedAt?: true
    createdAt?: true
  }

  export type SOAPRecordCountAggregateInputType = {
    id?: true
    userId?: true
    subjectiveNote?: true
    symptomSeverity?: true
    symptomTags?: true
    bloodPressure?: true
    bloodSugar?: true
    heartRate?: true
    weight?: true
    temperature?: true
    assessmentNote?: true
    adherenceRate?: true
    reportJson?: true
    recordedAt?: true
    createdAt?: true
    _all?: true
  }

  export type SOAPRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SOAPRecord to aggregate.
     */
    where?: SOAPRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOAPRecords to fetch.
     */
    orderBy?: SOAPRecordOrderByWithRelationInput | SOAPRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SOAPRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOAPRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOAPRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SOAPRecords
    **/
    _count?: true | SOAPRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SOAPRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SOAPRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SOAPRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SOAPRecordMaxAggregateInputType
  }

  export type GetSOAPRecordAggregateType<T extends SOAPRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateSOAPRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSOAPRecord[P]>
      : GetScalarType<T[P], AggregateSOAPRecord[P]>
  }




  export type SOAPRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SOAPRecordWhereInput
    orderBy?: SOAPRecordOrderByWithAggregationInput | SOAPRecordOrderByWithAggregationInput[]
    by: SOAPRecordScalarFieldEnum[] | SOAPRecordScalarFieldEnum
    having?: SOAPRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SOAPRecordCountAggregateInputType | true
    _avg?: SOAPRecordAvgAggregateInputType
    _sum?: SOAPRecordSumAggregateInputType
    _min?: SOAPRecordMinAggregateInputType
    _max?: SOAPRecordMaxAggregateInputType
  }

  export type SOAPRecordGroupByOutputType = {
    id: string
    userId: string
    subjectiveNote: string | null
    symptomSeverity: string | null
    symptomTags: string | null
    bloodPressure: string | null
    bloodSugar: number | null
    heartRate: number | null
    weight: number | null
    temperature: number | null
    assessmentNote: string | null
    adherenceRate: number | null
    reportJson: string | null
    recordedAt: Date
    createdAt: Date
    _count: SOAPRecordCountAggregateOutputType | null
    _avg: SOAPRecordAvgAggregateOutputType | null
    _sum: SOAPRecordSumAggregateOutputType | null
    _min: SOAPRecordMinAggregateOutputType | null
    _max: SOAPRecordMaxAggregateOutputType | null
  }

  type GetSOAPRecordGroupByPayload<T extends SOAPRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SOAPRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SOAPRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SOAPRecordGroupByOutputType[P]>
            : GetScalarType<T[P], SOAPRecordGroupByOutputType[P]>
        }
      >
    >


  export type SOAPRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectiveNote?: boolean
    symptomSeverity?: boolean
    symptomTags?: boolean
    bloodPressure?: boolean
    bloodSugar?: boolean
    heartRate?: boolean
    weight?: boolean
    temperature?: boolean
    assessmentNote?: boolean
    adherenceRate?: boolean
    reportJson?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sOAPRecord"]>

  export type SOAPRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectiveNote?: boolean
    symptomSeverity?: boolean
    symptomTags?: boolean
    bloodPressure?: boolean
    bloodSugar?: boolean
    heartRate?: boolean
    weight?: boolean
    temperature?: boolean
    assessmentNote?: boolean
    adherenceRate?: boolean
    reportJson?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sOAPRecord"]>

  export type SOAPRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    subjectiveNote?: boolean
    symptomSeverity?: boolean
    symptomTags?: boolean
    bloodPressure?: boolean
    bloodSugar?: boolean
    heartRate?: boolean
    weight?: boolean
    temperature?: boolean
    assessmentNote?: boolean
    adherenceRate?: boolean
    reportJson?: boolean
    recordedAt?: boolean
    createdAt?: boolean
  }

  export type SOAPRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SOAPRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SOAPRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SOAPRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subjectiveNote: string | null
      symptomSeverity: string | null
      symptomTags: string | null
      bloodPressure: string | null
      bloodSugar: number | null
      heartRate: number | null
      weight: number | null
      temperature: number | null
      assessmentNote: string | null
      adherenceRate: number | null
      reportJson: string | null
      recordedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["sOAPRecord"]>
    composites: {}
  }

  type SOAPRecordGetPayload<S extends boolean | null | undefined | SOAPRecordDefaultArgs> = $Result.GetResult<Prisma.$SOAPRecordPayload, S>

  type SOAPRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SOAPRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SOAPRecordCountAggregateInputType | true
    }

  export interface SOAPRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SOAPRecord'], meta: { name: 'SOAPRecord' } }
    /**
     * Find zero or one SOAPRecord that matches the filter.
     * @param {SOAPRecordFindUniqueArgs} args - Arguments to find a SOAPRecord
     * @example
     * // Get one SOAPRecord
     * const sOAPRecord = await prisma.sOAPRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SOAPRecordFindUniqueArgs>(args: SelectSubset<T, SOAPRecordFindUniqueArgs<ExtArgs>>): Prisma__SOAPRecordClient<$Result.GetResult<Prisma.$SOAPRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SOAPRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SOAPRecordFindUniqueOrThrowArgs} args - Arguments to find a SOAPRecord
     * @example
     * // Get one SOAPRecord
     * const sOAPRecord = await prisma.sOAPRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SOAPRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, SOAPRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SOAPRecordClient<$Result.GetResult<Prisma.$SOAPRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SOAPRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOAPRecordFindFirstArgs} args - Arguments to find a SOAPRecord
     * @example
     * // Get one SOAPRecord
     * const sOAPRecord = await prisma.sOAPRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SOAPRecordFindFirstArgs>(args?: SelectSubset<T, SOAPRecordFindFirstArgs<ExtArgs>>): Prisma__SOAPRecordClient<$Result.GetResult<Prisma.$SOAPRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SOAPRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOAPRecordFindFirstOrThrowArgs} args - Arguments to find a SOAPRecord
     * @example
     * // Get one SOAPRecord
     * const sOAPRecord = await prisma.sOAPRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SOAPRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, SOAPRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__SOAPRecordClient<$Result.GetResult<Prisma.$SOAPRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SOAPRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOAPRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SOAPRecords
     * const sOAPRecords = await prisma.sOAPRecord.findMany()
     * 
     * // Get first 10 SOAPRecords
     * const sOAPRecords = await prisma.sOAPRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sOAPRecordWithIdOnly = await prisma.sOAPRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SOAPRecordFindManyArgs>(args?: SelectSubset<T, SOAPRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOAPRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SOAPRecord.
     * @param {SOAPRecordCreateArgs} args - Arguments to create a SOAPRecord.
     * @example
     * // Create one SOAPRecord
     * const SOAPRecord = await prisma.sOAPRecord.create({
     *   data: {
     *     // ... data to create a SOAPRecord
     *   }
     * })
     * 
     */
    create<T extends SOAPRecordCreateArgs>(args: SelectSubset<T, SOAPRecordCreateArgs<ExtArgs>>): Prisma__SOAPRecordClient<$Result.GetResult<Prisma.$SOAPRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SOAPRecords.
     * @param {SOAPRecordCreateManyArgs} args - Arguments to create many SOAPRecords.
     * @example
     * // Create many SOAPRecords
     * const sOAPRecord = await prisma.sOAPRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SOAPRecordCreateManyArgs>(args?: SelectSubset<T, SOAPRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SOAPRecords and returns the data saved in the database.
     * @param {SOAPRecordCreateManyAndReturnArgs} args - Arguments to create many SOAPRecords.
     * @example
     * // Create many SOAPRecords
     * const sOAPRecord = await prisma.sOAPRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SOAPRecords and only return the `id`
     * const sOAPRecordWithIdOnly = await prisma.sOAPRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SOAPRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, SOAPRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOAPRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SOAPRecord.
     * @param {SOAPRecordDeleteArgs} args - Arguments to delete one SOAPRecord.
     * @example
     * // Delete one SOAPRecord
     * const SOAPRecord = await prisma.sOAPRecord.delete({
     *   where: {
     *     // ... filter to delete one SOAPRecord
     *   }
     * })
     * 
     */
    delete<T extends SOAPRecordDeleteArgs>(args: SelectSubset<T, SOAPRecordDeleteArgs<ExtArgs>>): Prisma__SOAPRecordClient<$Result.GetResult<Prisma.$SOAPRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SOAPRecord.
     * @param {SOAPRecordUpdateArgs} args - Arguments to update one SOAPRecord.
     * @example
     * // Update one SOAPRecord
     * const sOAPRecord = await prisma.sOAPRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SOAPRecordUpdateArgs>(args: SelectSubset<T, SOAPRecordUpdateArgs<ExtArgs>>): Prisma__SOAPRecordClient<$Result.GetResult<Prisma.$SOAPRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SOAPRecords.
     * @param {SOAPRecordDeleteManyArgs} args - Arguments to filter SOAPRecords to delete.
     * @example
     * // Delete a few SOAPRecords
     * const { count } = await prisma.sOAPRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SOAPRecordDeleteManyArgs>(args?: SelectSubset<T, SOAPRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SOAPRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOAPRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SOAPRecords
     * const sOAPRecord = await prisma.sOAPRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SOAPRecordUpdateManyArgs>(args: SelectSubset<T, SOAPRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SOAPRecord.
     * @param {SOAPRecordUpsertArgs} args - Arguments to update or create a SOAPRecord.
     * @example
     * // Update or create a SOAPRecord
     * const sOAPRecord = await prisma.sOAPRecord.upsert({
     *   create: {
     *     // ... data to create a SOAPRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SOAPRecord we want to update
     *   }
     * })
     */
    upsert<T extends SOAPRecordUpsertArgs>(args: SelectSubset<T, SOAPRecordUpsertArgs<ExtArgs>>): Prisma__SOAPRecordClient<$Result.GetResult<Prisma.$SOAPRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SOAPRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOAPRecordCountArgs} args - Arguments to filter SOAPRecords to count.
     * @example
     * // Count the number of SOAPRecords
     * const count = await prisma.sOAPRecord.count({
     *   where: {
     *     // ... the filter for the SOAPRecords we want to count
     *   }
     * })
    **/
    count<T extends SOAPRecordCountArgs>(
      args?: Subset<T, SOAPRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SOAPRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SOAPRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOAPRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SOAPRecordAggregateArgs>(args: Subset<T, SOAPRecordAggregateArgs>): Prisma.PrismaPromise<GetSOAPRecordAggregateType<T>>

    /**
     * Group by SOAPRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOAPRecordGroupByArgs} args - Group by arguments.
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
      T extends SOAPRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SOAPRecordGroupByArgs['orderBy'] }
        : { orderBy?: SOAPRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SOAPRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSOAPRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SOAPRecord model
   */
  readonly fields: SOAPRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SOAPRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SOAPRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SOAPRecord model
   */ 
  interface SOAPRecordFieldRefs {
    readonly id: FieldRef<"SOAPRecord", 'String'>
    readonly userId: FieldRef<"SOAPRecord", 'String'>
    readonly subjectiveNote: FieldRef<"SOAPRecord", 'String'>
    readonly symptomSeverity: FieldRef<"SOAPRecord", 'String'>
    readonly symptomTags: FieldRef<"SOAPRecord", 'String'>
    readonly bloodPressure: FieldRef<"SOAPRecord", 'String'>
    readonly bloodSugar: FieldRef<"SOAPRecord", 'Float'>
    readonly heartRate: FieldRef<"SOAPRecord", 'Int'>
    readonly weight: FieldRef<"SOAPRecord", 'Float'>
    readonly temperature: FieldRef<"SOAPRecord", 'Float'>
    readonly assessmentNote: FieldRef<"SOAPRecord", 'String'>
    readonly adherenceRate: FieldRef<"SOAPRecord", 'Float'>
    readonly reportJson: FieldRef<"SOAPRecord", 'String'>
    readonly recordedAt: FieldRef<"SOAPRecord", 'DateTime'>
    readonly createdAt: FieldRef<"SOAPRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SOAPRecord findUnique
   */
  export type SOAPRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordInclude<ExtArgs> | null
    /**
     * Filter, which SOAPRecord to fetch.
     */
    where: SOAPRecordWhereUniqueInput
  }

  /**
   * SOAPRecord findUniqueOrThrow
   */
  export type SOAPRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordInclude<ExtArgs> | null
    /**
     * Filter, which SOAPRecord to fetch.
     */
    where: SOAPRecordWhereUniqueInput
  }

  /**
   * SOAPRecord findFirst
   */
  export type SOAPRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordInclude<ExtArgs> | null
    /**
     * Filter, which SOAPRecord to fetch.
     */
    where?: SOAPRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOAPRecords to fetch.
     */
    orderBy?: SOAPRecordOrderByWithRelationInput | SOAPRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SOAPRecords.
     */
    cursor?: SOAPRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOAPRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOAPRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SOAPRecords.
     */
    distinct?: SOAPRecordScalarFieldEnum | SOAPRecordScalarFieldEnum[]
  }

  /**
   * SOAPRecord findFirstOrThrow
   */
  export type SOAPRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordInclude<ExtArgs> | null
    /**
     * Filter, which SOAPRecord to fetch.
     */
    where?: SOAPRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOAPRecords to fetch.
     */
    orderBy?: SOAPRecordOrderByWithRelationInput | SOAPRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SOAPRecords.
     */
    cursor?: SOAPRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOAPRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOAPRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SOAPRecords.
     */
    distinct?: SOAPRecordScalarFieldEnum | SOAPRecordScalarFieldEnum[]
  }

  /**
   * SOAPRecord findMany
   */
  export type SOAPRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordInclude<ExtArgs> | null
    /**
     * Filter, which SOAPRecords to fetch.
     */
    where?: SOAPRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOAPRecords to fetch.
     */
    orderBy?: SOAPRecordOrderByWithRelationInput | SOAPRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SOAPRecords.
     */
    cursor?: SOAPRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOAPRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOAPRecords.
     */
    skip?: number
    distinct?: SOAPRecordScalarFieldEnum | SOAPRecordScalarFieldEnum[]
  }

  /**
   * SOAPRecord create
   */
  export type SOAPRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a SOAPRecord.
     */
    data: XOR<SOAPRecordCreateInput, SOAPRecordUncheckedCreateInput>
  }

  /**
   * SOAPRecord createMany
   */
  export type SOAPRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SOAPRecords.
     */
    data: SOAPRecordCreateManyInput | SOAPRecordCreateManyInput[]
  }

  /**
   * SOAPRecord createManyAndReturn
   */
  export type SOAPRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SOAPRecords.
     */
    data: SOAPRecordCreateManyInput | SOAPRecordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SOAPRecord update
   */
  export type SOAPRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a SOAPRecord.
     */
    data: XOR<SOAPRecordUpdateInput, SOAPRecordUncheckedUpdateInput>
    /**
     * Choose, which SOAPRecord to update.
     */
    where: SOAPRecordWhereUniqueInput
  }

  /**
   * SOAPRecord updateMany
   */
  export type SOAPRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SOAPRecords.
     */
    data: XOR<SOAPRecordUpdateManyMutationInput, SOAPRecordUncheckedUpdateManyInput>
    /**
     * Filter which SOAPRecords to update
     */
    where?: SOAPRecordWhereInput
  }

  /**
   * SOAPRecord upsert
   */
  export type SOAPRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the SOAPRecord to update in case it exists.
     */
    where: SOAPRecordWhereUniqueInput
    /**
     * In case the SOAPRecord found by the `where` argument doesn't exist, create a new SOAPRecord with this data.
     */
    create: XOR<SOAPRecordCreateInput, SOAPRecordUncheckedCreateInput>
    /**
     * In case the SOAPRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SOAPRecordUpdateInput, SOAPRecordUncheckedUpdateInput>
  }

  /**
   * SOAPRecord delete
   */
  export type SOAPRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordInclude<ExtArgs> | null
    /**
     * Filter which SOAPRecord to delete.
     */
    where: SOAPRecordWhereUniqueInput
  }

  /**
   * SOAPRecord deleteMany
   */
  export type SOAPRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SOAPRecords to delete
     */
    where?: SOAPRecordWhereInput
  }

  /**
   * SOAPRecord without action
   */
  export type SOAPRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOAPRecord
     */
    select?: SOAPRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOAPRecordInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    targetUserId: string | null
    sourceUserId: string | null
    level: string | null
    title: string | null
    message: string | null
    status: string | null
    relatedCheckInId: string | null
    relatedMedicineId: string | null
    createdAt: Date | null
    readAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    targetUserId: string | null
    sourceUserId: string | null
    level: string | null
    title: string | null
    message: string | null
    status: string | null
    relatedCheckInId: string | null
    relatedMedicineId: string | null
    createdAt: Date | null
    readAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    targetUserId: number
    sourceUserId: number
    level: number
    title: number
    message: number
    status: number
    relatedCheckInId: number
    relatedMedicineId: number
    createdAt: number
    readAt: number
    _all: number
  }


  export type AlertMinAggregateInputType = {
    id?: true
    targetUserId?: true
    sourceUserId?: true
    level?: true
    title?: true
    message?: true
    status?: true
    relatedCheckInId?: true
    relatedMedicineId?: true
    createdAt?: true
    readAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    targetUserId?: true
    sourceUserId?: true
    level?: true
    title?: true
    message?: true
    status?: true
    relatedCheckInId?: true
    relatedMedicineId?: true
    createdAt?: true
    readAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    targetUserId?: true
    sourceUserId?: true
    level?: true
    title?: true
    message?: true
    status?: true
    relatedCheckInId?: true
    relatedMedicineId?: true
    createdAt?: true
    readAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    targetUserId: string
    sourceUserId: string
    level: string
    title: string
    message: string
    status: string
    relatedCheckInId: string | null
    relatedMedicineId: string | null
    createdAt: Date
    readAt: Date | null
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetUserId?: boolean
    sourceUserId?: boolean
    level?: boolean
    title?: boolean
    message?: boolean
    status?: boolean
    relatedCheckInId?: boolean
    relatedMedicineId?: boolean
    createdAt?: boolean
    readAt?: boolean
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetUserId?: boolean
    sourceUserId?: boolean
    level?: boolean
    title?: boolean
    message?: boolean
    status?: boolean
    relatedCheckInId?: boolean
    relatedMedicineId?: boolean
    createdAt?: boolean
    readAt?: boolean
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    targetUserId?: boolean
    sourceUserId?: boolean
    level?: boolean
    title?: boolean
    message?: boolean
    status?: boolean
    relatedCheckInId?: boolean
    relatedMedicineId?: boolean
    createdAt?: boolean
    readAt?: boolean
  }

  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      targetUser: Prisma.$UserPayload<ExtArgs>
      sourceUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      targetUserId: string
      sourceUserId: string
      level: string
      title: string
      message: string
      status: string
      relatedCheckInId: string | null
      relatedMedicineId: string | null
      createdAt: Date
      readAt: Date | null
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    targetUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    sourceUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Alert model
   */ 
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly targetUserId: FieldRef<"Alert", 'String'>
    readonly sourceUserId: FieldRef<"Alert", 'String'>
    readonly level: FieldRef<"Alert", 'String'>
    readonly title: FieldRef<"Alert", 'String'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly status: FieldRef<"Alert", 'String'>
    readonly relatedCheckInId: FieldRef<"Alert", 'String'>
    readonly relatedMedicineId: FieldRef<"Alert", 'String'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly readAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model AlertSubscription
   */

  export type AggregateAlertSubscription = {
    _count: AlertSubscriptionCountAggregateOutputType | null
    _avg: AlertSubscriptionAvgAggregateOutputType | null
    _sum: AlertSubscriptionSumAggregateOutputType | null
    _min: AlertSubscriptionMinAggregateOutputType | null
    _max: AlertSubscriptionMaxAggregateOutputType | null
  }

  export type AlertSubscriptionAvgAggregateOutputType = {
    missThresholdMinutes: number | null
  }

  export type AlertSubscriptionSumAggregateOutputType = {
    missThresholdMinutes: number | null
  }

  export type AlertSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    missAlertEnabled: boolean | null
    inventoryAlertEnabled: boolean | null
    sideEffectAlertEnabled: boolean | null
    missThresholdMinutes: number | null
  }

  export type AlertSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    missAlertEnabled: boolean | null
    inventoryAlertEnabled: boolean | null
    sideEffectAlertEnabled: boolean | null
    missThresholdMinutes: number | null
  }

  export type AlertSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    missAlertEnabled: number
    inventoryAlertEnabled: number
    sideEffectAlertEnabled: number
    missThresholdMinutes: number
    _all: number
  }


  export type AlertSubscriptionAvgAggregateInputType = {
    missThresholdMinutes?: true
  }

  export type AlertSubscriptionSumAggregateInputType = {
    missThresholdMinutes?: true
  }

  export type AlertSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    missAlertEnabled?: true
    inventoryAlertEnabled?: true
    sideEffectAlertEnabled?: true
    missThresholdMinutes?: true
  }

  export type AlertSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    missAlertEnabled?: true
    inventoryAlertEnabled?: true
    sideEffectAlertEnabled?: true
    missThresholdMinutes?: true
  }

  export type AlertSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    missAlertEnabled?: true
    inventoryAlertEnabled?: true
    sideEffectAlertEnabled?: true
    missThresholdMinutes?: true
    _all?: true
  }

  export type AlertSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertSubscription to aggregate.
     */
    where?: AlertSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertSubscriptions to fetch.
     */
    orderBy?: AlertSubscriptionOrderByWithRelationInput | AlertSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertSubscriptions
    **/
    _count?: true | AlertSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertSubscriptionMaxAggregateInputType
  }

  export type GetAlertSubscriptionAggregateType<T extends AlertSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertSubscription[P]>
      : GetScalarType<T[P], AggregateAlertSubscription[P]>
  }




  export type AlertSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertSubscriptionWhereInput
    orderBy?: AlertSubscriptionOrderByWithAggregationInput | AlertSubscriptionOrderByWithAggregationInput[]
    by: AlertSubscriptionScalarFieldEnum[] | AlertSubscriptionScalarFieldEnum
    having?: AlertSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertSubscriptionCountAggregateInputType | true
    _avg?: AlertSubscriptionAvgAggregateInputType
    _sum?: AlertSubscriptionSumAggregateInputType
    _min?: AlertSubscriptionMinAggregateInputType
    _max?: AlertSubscriptionMaxAggregateInputType
  }

  export type AlertSubscriptionGroupByOutputType = {
    id: string
    userId: string
    missAlertEnabled: boolean
    inventoryAlertEnabled: boolean
    sideEffectAlertEnabled: boolean
    missThresholdMinutes: number
    _count: AlertSubscriptionCountAggregateOutputType | null
    _avg: AlertSubscriptionAvgAggregateOutputType | null
    _sum: AlertSubscriptionSumAggregateOutputType | null
    _min: AlertSubscriptionMinAggregateOutputType | null
    _max: AlertSubscriptionMaxAggregateOutputType | null
  }

  type GetAlertSubscriptionGroupByPayload<T extends AlertSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], AlertSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type AlertSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    missAlertEnabled?: boolean
    inventoryAlertEnabled?: boolean
    sideEffectAlertEnabled?: boolean
    missThresholdMinutes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertSubscription"]>

  export type AlertSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    missAlertEnabled?: boolean
    inventoryAlertEnabled?: boolean
    sideEffectAlertEnabled?: boolean
    missThresholdMinutes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertSubscription"]>

  export type AlertSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    missAlertEnabled?: boolean
    inventoryAlertEnabled?: boolean
    sideEffectAlertEnabled?: boolean
    missThresholdMinutes?: boolean
  }

  export type AlertSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlertSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlertSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      missAlertEnabled: boolean
      inventoryAlertEnabled: boolean
      sideEffectAlertEnabled: boolean
      missThresholdMinutes: number
    }, ExtArgs["result"]["alertSubscription"]>
    composites: {}
  }

  type AlertSubscriptionGetPayload<S extends boolean | null | undefined | AlertSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$AlertSubscriptionPayload, S>

  type AlertSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlertSubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlertSubscriptionCountAggregateInputType | true
    }

  export interface AlertSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertSubscription'], meta: { name: 'AlertSubscription' } }
    /**
     * Find zero or one AlertSubscription that matches the filter.
     * @param {AlertSubscriptionFindUniqueArgs} args - Arguments to find a AlertSubscription
     * @example
     * // Get one AlertSubscription
     * const alertSubscription = await prisma.alertSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertSubscriptionFindUniqueArgs>(args: SelectSubset<T, AlertSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__AlertSubscriptionClient<$Result.GetResult<Prisma.$AlertSubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AlertSubscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlertSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a AlertSubscription
     * @example
     * // Get one AlertSubscription
     * const alertSubscription = await prisma.alertSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertSubscriptionClient<$Result.GetResult<Prisma.$AlertSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AlertSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSubscriptionFindFirstArgs} args - Arguments to find a AlertSubscription
     * @example
     * // Get one AlertSubscription
     * const alertSubscription = await prisma.alertSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertSubscriptionFindFirstArgs>(args?: SelectSubset<T, AlertSubscriptionFindFirstArgs<ExtArgs>>): Prisma__AlertSubscriptionClient<$Result.GetResult<Prisma.$AlertSubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AlertSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSubscriptionFindFirstOrThrowArgs} args - Arguments to find a AlertSubscription
     * @example
     * // Get one AlertSubscription
     * const alertSubscription = await prisma.alertSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertSubscriptionClient<$Result.GetResult<Prisma.$AlertSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AlertSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertSubscriptions
     * const alertSubscriptions = await prisma.alertSubscription.findMany()
     * 
     * // Get first 10 AlertSubscriptions
     * const alertSubscriptions = await prisma.alertSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertSubscriptionWithIdOnly = await prisma.alertSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertSubscriptionFindManyArgs>(args?: SelectSubset<T, AlertSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertSubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AlertSubscription.
     * @param {AlertSubscriptionCreateArgs} args - Arguments to create a AlertSubscription.
     * @example
     * // Create one AlertSubscription
     * const AlertSubscription = await prisma.alertSubscription.create({
     *   data: {
     *     // ... data to create a AlertSubscription
     *   }
     * })
     * 
     */
    create<T extends AlertSubscriptionCreateArgs>(args: SelectSubset<T, AlertSubscriptionCreateArgs<ExtArgs>>): Prisma__AlertSubscriptionClient<$Result.GetResult<Prisma.$AlertSubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AlertSubscriptions.
     * @param {AlertSubscriptionCreateManyArgs} args - Arguments to create many AlertSubscriptions.
     * @example
     * // Create many AlertSubscriptions
     * const alertSubscription = await prisma.alertSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertSubscriptionCreateManyArgs>(args?: SelectSubset<T, AlertSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlertSubscriptions and returns the data saved in the database.
     * @param {AlertSubscriptionCreateManyAndReturnArgs} args - Arguments to create many AlertSubscriptions.
     * @example
     * // Create many AlertSubscriptions
     * const alertSubscription = await prisma.alertSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlertSubscriptions and only return the `id`
     * const alertSubscriptionWithIdOnly = await prisma.alertSubscription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertSubscriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AlertSubscription.
     * @param {AlertSubscriptionDeleteArgs} args - Arguments to delete one AlertSubscription.
     * @example
     * // Delete one AlertSubscription
     * const AlertSubscription = await prisma.alertSubscription.delete({
     *   where: {
     *     // ... filter to delete one AlertSubscription
     *   }
     * })
     * 
     */
    delete<T extends AlertSubscriptionDeleteArgs>(args: SelectSubset<T, AlertSubscriptionDeleteArgs<ExtArgs>>): Prisma__AlertSubscriptionClient<$Result.GetResult<Prisma.$AlertSubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AlertSubscription.
     * @param {AlertSubscriptionUpdateArgs} args - Arguments to update one AlertSubscription.
     * @example
     * // Update one AlertSubscription
     * const alertSubscription = await prisma.alertSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertSubscriptionUpdateArgs>(args: SelectSubset<T, AlertSubscriptionUpdateArgs<ExtArgs>>): Prisma__AlertSubscriptionClient<$Result.GetResult<Prisma.$AlertSubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AlertSubscriptions.
     * @param {AlertSubscriptionDeleteManyArgs} args - Arguments to filter AlertSubscriptions to delete.
     * @example
     * // Delete a few AlertSubscriptions
     * const { count } = await prisma.alertSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertSubscriptionDeleteManyArgs>(args?: SelectSubset<T, AlertSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertSubscriptions
     * const alertSubscription = await prisma.alertSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertSubscriptionUpdateManyArgs>(args: SelectSubset<T, AlertSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlertSubscription.
     * @param {AlertSubscriptionUpsertArgs} args - Arguments to update or create a AlertSubscription.
     * @example
     * // Update or create a AlertSubscription
     * const alertSubscription = await prisma.alertSubscription.upsert({
     *   create: {
     *     // ... data to create a AlertSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertSubscription we want to update
     *   }
     * })
     */
    upsert<T extends AlertSubscriptionUpsertArgs>(args: SelectSubset<T, AlertSubscriptionUpsertArgs<ExtArgs>>): Prisma__AlertSubscriptionClient<$Result.GetResult<Prisma.$AlertSubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AlertSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSubscriptionCountArgs} args - Arguments to filter AlertSubscriptions to count.
     * @example
     * // Count the number of AlertSubscriptions
     * const count = await prisma.alertSubscription.count({
     *   where: {
     *     // ... the filter for the AlertSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends AlertSubscriptionCountArgs>(
      args?: Subset<T, AlertSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertSubscriptionAggregateArgs>(args: Subset<T, AlertSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetAlertSubscriptionAggregateType<T>>

    /**
     * Group by AlertSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends AlertSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: AlertSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertSubscription model
   */
  readonly fields: AlertSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AlertSubscription model
   */ 
  interface AlertSubscriptionFieldRefs {
    readonly id: FieldRef<"AlertSubscription", 'String'>
    readonly userId: FieldRef<"AlertSubscription", 'String'>
    readonly missAlertEnabled: FieldRef<"AlertSubscription", 'Boolean'>
    readonly inventoryAlertEnabled: FieldRef<"AlertSubscription", 'Boolean'>
    readonly sideEffectAlertEnabled: FieldRef<"AlertSubscription", 'Boolean'>
    readonly missThresholdMinutes: FieldRef<"AlertSubscription", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AlertSubscription findUnique
   */
  export type AlertSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AlertSubscription to fetch.
     */
    where: AlertSubscriptionWhereUniqueInput
  }

  /**
   * AlertSubscription findUniqueOrThrow
   */
  export type AlertSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AlertSubscription to fetch.
     */
    where: AlertSubscriptionWhereUniqueInput
  }

  /**
   * AlertSubscription findFirst
   */
  export type AlertSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AlertSubscription to fetch.
     */
    where?: AlertSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertSubscriptions to fetch.
     */
    orderBy?: AlertSubscriptionOrderByWithRelationInput | AlertSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertSubscriptions.
     */
    cursor?: AlertSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertSubscriptions.
     */
    distinct?: AlertSubscriptionScalarFieldEnum | AlertSubscriptionScalarFieldEnum[]
  }

  /**
   * AlertSubscription findFirstOrThrow
   */
  export type AlertSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AlertSubscription to fetch.
     */
    where?: AlertSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertSubscriptions to fetch.
     */
    orderBy?: AlertSubscriptionOrderByWithRelationInput | AlertSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertSubscriptions.
     */
    cursor?: AlertSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertSubscriptions.
     */
    distinct?: AlertSubscriptionScalarFieldEnum | AlertSubscriptionScalarFieldEnum[]
  }

  /**
   * AlertSubscription findMany
   */
  export type AlertSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AlertSubscriptions to fetch.
     */
    where?: AlertSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertSubscriptions to fetch.
     */
    orderBy?: AlertSubscriptionOrderByWithRelationInput | AlertSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertSubscriptions.
     */
    cursor?: AlertSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertSubscriptions.
     */
    skip?: number
    distinct?: AlertSubscriptionScalarFieldEnum | AlertSubscriptionScalarFieldEnum[]
  }

  /**
   * AlertSubscription create
   */
  export type AlertSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a AlertSubscription.
     */
    data: XOR<AlertSubscriptionCreateInput, AlertSubscriptionUncheckedCreateInput>
  }

  /**
   * AlertSubscription createMany
   */
  export type AlertSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertSubscriptions.
     */
    data: AlertSubscriptionCreateManyInput | AlertSubscriptionCreateManyInput[]
  }

  /**
   * AlertSubscription createManyAndReturn
   */
  export type AlertSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AlertSubscriptions.
     */
    data: AlertSubscriptionCreateManyInput | AlertSubscriptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlertSubscription update
   */
  export type AlertSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a AlertSubscription.
     */
    data: XOR<AlertSubscriptionUpdateInput, AlertSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which AlertSubscription to update.
     */
    where: AlertSubscriptionWhereUniqueInput
  }

  /**
   * AlertSubscription updateMany
   */
  export type AlertSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertSubscriptions.
     */
    data: XOR<AlertSubscriptionUpdateManyMutationInput, AlertSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which AlertSubscriptions to update
     */
    where?: AlertSubscriptionWhereInput
  }

  /**
   * AlertSubscription upsert
   */
  export type AlertSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the AlertSubscription to update in case it exists.
     */
    where: AlertSubscriptionWhereUniqueInput
    /**
     * In case the AlertSubscription found by the `where` argument doesn't exist, create a new AlertSubscription with this data.
     */
    create: XOR<AlertSubscriptionCreateInput, AlertSubscriptionUncheckedCreateInput>
    /**
     * In case the AlertSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertSubscriptionUpdateInput, AlertSubscriptionUncheckedUpdateInput>
  }

  /**
   * AlertSubscription delete
   */
  export type AlertSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which AlertSubscription to delete.
     */
    where: AlertSubscriptionWhereUniqueInput
  }

  /**
   * AlertSubscription deleteMany
   */
  export type AlertSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertSubscriptions to delete
     */
    where?: AlertSubscriptionWhereInput
  }

  /**
   * AlertSubscription without action
   */
  export type AlertSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSubscription
     */
    select?: AlertSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model DeviceToken
   */

  export type AggregateDeviceToken = {
    _count: DeviceTokenCountAggregateOutputType | null
    _min: DeviceTokenMinAggregateOutputType | null
    _max: DeviceTokenMaxAggregateOutputType | null
  }

  export type DeviceTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    platform: string | null
    createdAt: Date | null
  }

  export type DeviceTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    platform: string | null
    createdAt: Date | null
  }

  export type DeviceTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    platform: number
    createdAt: number
    _all: number
  }


  export type DeviceTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    platform?: true
    createdAt?: true
  }

  export type DeviceTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    platform?: true
    createdAt?: true
  }

  export type DeviceTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    platform?: true
    createdAt?: true
    _all?: true
  }

  export type DeviceTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceToken to aggregate.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceTokens
    **/
    _count?: true | DeviceTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceTokenMaxAggregateInputType
  }

  export type GetDeviceTokenAggregateType<T extends DeviceTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceToken[P]>
      : GetScalarType<T[P], AggregateDeviceToken[P]>
  }




  export type DeviceTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceTokenWhereInput
    orderBy?: DeviceTokenOrderByWithAggregationInput | DeviceTokenOrderByWithAggregationInput[]
    by: DeviceTokenScalarFieldEnum[] | DeviceTokenScalarFieldEnum
    having?: DeviceTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceTokenCountAggregateInputType | true
    _min?: DeviceTokenMinAggregateInputType
    _max?: DeviceTokenMaxAggregateInputType
  }

  export type DeviceTokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    platform: string
    createdAt: Date
    _count: DeviceTokenCountAggregateOutputType | null
    _min: DeviceTokenMinAggregateOutputType | null
    _max: DeviceTokenMaxAggregateOutputType | null
  }

  type GetDeviceTokenGroupByPayload<T extends DeviceTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceTokenGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceTokenGroupByOutputType[P]>
        }
      >
    >


  export type DeviceTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    platform?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceToken"]>

  export type DeviceTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    platform?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceToken"]>

  export type DeviceTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    platform?: boolean
    createdAt?: boolean
  }

  export type DeviceTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeviceTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      platform: string
      createdAt: Date
    }, ExtArgs["result"]["deviceToken"]>
    composites: {}
  }

  type DeviceTokenGetPayload<S extends boolean | null | undefined | DeviceTokenDefaultArgs> = $Result.GetResult<Prisma.$DeviceTokenPayload, S>

  type DeviceTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeviceTokenCountAggregateInputType | true
    }

  export interface DeviceTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceToken'], meta: { name: 'DeviceToken' } }
    /**
     * Find zero or one DeviceToken that matches the filter.
     * @param {DeviceTokenFindUniqueArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceTokenFindUniqueArgs>(args: SelectSubset<T, DeviceTokenFindUniqueArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DeviceToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeviceTokenFindUniqueOrThrowArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DeviceToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindFirstArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceTokenFindFirstArgs>(args?: SelectSubset<T, DeviceTokenFindFirstArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DeviceToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindFirstOrThrowArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DeviceTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceTokens
     * const deviceTokens = await prisma.deviceToken.findMany()
     * 
     * // Get first 10 DeviceTokens
     * const deviceTokens = await prisma.deviceToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceTokenWithIdOnly = await prisma.deviceToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceTokenFindManyArgs>(args?: SelectSubset<T, DeviceTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DeviceToken.
     * @param {DeviceTokenCreateArgs} args - Arguments to create a DeviceToken.
     * @example
     * // Create one DeviceToken
     * const DeviceToken = await prisma.deviceToken.create({
     *   data: {
     *     // ... data to create a DeviceToken
     *   }
     * })
     * 
     */
    create<T extends DeviceTokenCreateArgs>(args: SelectSubset<T, DeviceTokenCreateArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DeviceTokens.
     * @param {DeviceTokenCreateManyArgs} args - Arguments to create many DeviceTokens.
     * @example
     * // Create many DeviceTokens
     * const deviceToken = await prisma.deviceToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceTokenCreateManyArgs>(args?: SelectSubset<T, DeviceTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceTokens and returns the data saved in the database.
     * @param {DeviceTokenCreateManyAndReturnArgs} args - Arguments to create many DeviceTokens.
     * @example
     * // Create many DeviceTokens
     * const deviceToken = await prisma.deviceToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceTokens and only return the `id`
     * const deviceTokenWithIdOnly = await prisma.deviceToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DeviceToken.
     * @param {DeviceTokenDeleteArgs} args - Arguments to delete one DeviceToken.
     * @example
     * // Delete one DeviceToken
     * const DeviceToken = await prisma.deviceToken.delete({
     *   where: {
     *     // ... filter to delete one DeviceToken
     *   }
     * })
     * 
     */
    delete<T extends DeviceTokenDeleteArgs>(args: SelectSubset<T, DeviceTokenDeleteArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DeviceToken.
     * @param {DeviceTokenUpdateArgs} args - Arguments to update one DeviceToken.
     * @example
     * // Update one DeviceToken
     * const deviceToken = await prisma.deviceToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceTokenUpdateArgs>(args: SelectSubset<T, DeviceTokenUpdateArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DeviceTokens.
     * @param {DeviceTokenDeleteManyArgs} args - Arguments to filter DeviceTokens to delete.
     * @example
     * // Delete a few DeviceTokens
     * const { count } = await prisma.deviceToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceTokenDeleteManyArgs>(args?: SelectSubset<T, DeviceTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceTokens
     * const deviceToken = await prisma.deviceToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceTokenUpdateManyArgs>(args: SelectSubset<T, DeviceTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeviceToken.
     * @param {DeviceTokenUpsertArgs} args - Arguments to update or create a DeviceToken.
     * @example
     * // Update or create a DeviceToken
     * const deviceToken = await prisma.deviceToken.upsert({
     *   create: {
     *     // ... data to create a DeviceToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceToken we want to update
     *   }
     * })
     */
    upsert<T extends DeviceTokenUpsertArgs>(args: SelectSubset<T, DeviceTokenUpsertArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DeviceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenCountArgs} args - Arguments to filter DeviceTokens to count.
     * @example
     * // Count the number of DeviceTokens
     * const count = await prisma.deviceToken.count({
     *   where: {
     *     // ... the filter for the DeviceTokens we want to count
     *   }
     * })
    **/
    count<T extends DeviceTokenCountArgs>(
      args?: Subset<T, DeviceTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceTokenAggregateArgs>(args: Subset<T, DeviceTokenAggregateArgs>): Prisma.PrismaPromise<GetDeviceTokenAggregateType<T>>

    /**
     * Group by DeviceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenGroupByArgs} args - Group by arguments.
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
      T extends DeviceTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceTokenGroupByArgs['orderBy'] }
        : { orderBy?: DeviceTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceToken model
   */
  readonly fields: DeviceTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DeviceToken model
   */ 
  interface DeviceTokenFieldRefs {
    readonly id: FieldRef<"DeviceToken", 'String'>
    readonly userId: FieldRef<"DeviceToken", 'String'>
    readonly token: FieldRef<"DeviceToken", 'String'>
    readonly platform: FieldRef<"DeviceToken", 'String'>
    readonly createdAt: FieldRef<"DeviceToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceToken findUnique
   */
  export type DeviceTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken findUniqueOrThrow
   */
  export type DeviceTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken findFirst
   */
  export type DeviceTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTokens.
     */
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken findFirstOrThrow
   */
  export type DeviceTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTokens.
     */
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken findMany
   */
  export type DeviceTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter, which DeviceTokens to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken create
   */
  export type DeviceTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceToken.
     */
    data: XOR<DeviceTokenCreateInput, DeviceTokenUncheckedCreateInput>
  }

  /**
   * DeviceToken createMany
   */
  export type DeviceTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceTokens.
     */
    data: DeviceTokenCreateManyInput | DeviceTokenCreateManyInput[]
  }

  /**
   * DeviceToken createManyAndReturn
   */
  export type DeviceTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DeviceTokens.
     */
    data: DeviceTokenCreateManyInput | DeviceTokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceToken update
   */
  export type DeviceTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceToken.
     */
    data: XOR<DeviceTokenUpdateInput, DeviceTokenUncheckedUpdateInput>
    /**
     * Choose, which DeviceToken to update.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken updateMany
   */
  export type DeviceTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceTokens.
     */
    data: XOR<DeviceTokenUpdateManyMutationInput, DeviceTokenUncheckedUpdateManyInput>
    /**
     * Filter which DeviceTokens to update
     */
    where?: DeviceTokenWhereInput
  }

  /**
   * DeviceToken upsert
   */
  export type DeviceTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceToken to update in case it exists.
     */
    where: DeviceTokenWhereUniqueInput
    /**
     * In case the DeviceToken found by the `where` argument doesn't exist, create a new DeviceToken with this data.
     */
    create: XOR<DeviceTokenCreateInput, DeviceTokenUncheckedCreateInput>
    /**
     * In case the DeviceToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceTokenUpdateInput, DeviceTokenUncheckedUpdateInput>
  }

  /**
   * DeviceToken delete
   */
  export type DeviceTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
    /**
     * Filter which DeviceToken to delete.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken deleteMany
   */
  export type DeviceTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceTokens to delete
     */
    where?: DeviceTokenWhereInput
  }

  /**
   * DeviceToken without action
   */
  export type DeviceTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    gender: 'gender',
    birthDate: 'birthDate',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FamilyBindingScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    familyId: 'familyId',
    verified: 'verified',
    createdAt: 'createdAt'
  };

  export type FamilyBindingScalarFieldEnum = (typeof FamilyBindingScalarFieldEnum)[keyof typeof FamilyBindingScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    dosage: 'dosage',
    frequency: 'frequency',
    scheduleJson: 'scheduleJson',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const MedicineInventoryScalarFieldEnum: {
    id: 'id',
    medicineId: 'medicineId',
    totalCount: 'totalCount',
    remainingCount: 'remainingCount',
    unit: 'unit',
    alertThreshold: 'alertThreshold',
    updatedAt: 'updatedAt'
  };

  export type MedicineInventoryScalarFieldEnum = (typeof MedicineInventoryScalarFieldEnum)[keyof typeof MedicineInventoryScalarFieldEnum]


  export const MedicinePrescriptionScalarFieldEnum: {
    id: 'id',
    medicineId: 'medicineId',
    imageUrl: 'imageUrl',
    ocrRawText: 'ocrRawText',
    ocrResultJson: 'ocrResultJson',
    doctorName: 'doctorName',
    hospitalName: 'hospitalName',
    prescribedAt: 'prescribedAt',
    createdAt: 'createdAt'
  };

  export type MedicinePrescriptionScalarFieldEnum = (typeof MedicinePrescriptionScalarFieldEnum)[keyof typeof MedicinePrescriptionScalarFieldEnum]


  export const CheckInScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    medicineId: 'medicineId',
    scheduledTime: 'scheduledTime',
    actualTime: 'actualTime',
    missed: 'missed',
    missedAlertSent: 'missedAlertSent',
    confirmType: 'confirmType',
    createdAt: 'createdAt'
  };

  export type CheckInScalarFieldEnum = (typeof CheckInScalarFieldEnum)[keyof typeof CheckInScalarFieldEnum]


  export const SOAPRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subjectiveNote: 'subjectiveNote',
    symptomSeverity: 'symptomSeverity',
    symptomTags: 'symptomTags',
    bloodPressure: 'bloodPressure',
    bloodSugar: 'bloodSugar',
    heartRate: 'heartRate',
    weight: 'weight',
    temperature: 'temperature',
    assessmentNote: 'assessmentNote',
    adherenceRate: 'adherenceRate',
    reportJson: 'reportJson',
    recordedAt: 'recordedAt',
    createdAt: 'createdAt'
  };

  export type SOAPRecordScalarFieldEnum = (typeof SOAPRecordScalarFieldEnum)[keyof typeof SOAPRecordScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    targetUserId: 'targetUserId',
    sourceUserId: 'sourceUserId',
    level: 'level',
    title: 'title',
    message: 'message',
    status: 'status',
    relatedCheckInId: 'relatedCheckInId',
    relatedMedicineId: 'relatedMedicineId',
    createdAt: 'createdAt',
    readAt: 'readAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const AlertSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    missAlertEnabled: 'missAlertEnabled',
    inventoryAlertEnabled: 'inventoryAlertEnabled',
    sideEffectAlertEnabled: 'sideEffectAlertEnabled',
    missThresholdMinutes: 'missThresholdMinutes'
  };

  export type AlertSubscriptionScalarFieldEnum = (typeof AlertSubscriptionScalarFieldEnum)[keyof typeof AlertSubscriptionScalarFieldEnum]


  export const DeviceTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    platform: 'platform',
    createdAt: 'createdAt'
  };

  export type DeviceTokenScalarFieldEnum = (typeof DeviceTokenScalarFieldEnum)[keyof typeof DeviceTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bindingsAsPatient?: FamilyBindingListRelationFilter
    bindingsAsFamily?: FamilyBindingListRelationFilter
    medicines?: MedicineListRelationFilter
    checkIns?: CheckInListRelationFilter
    soapRecords?: SOAPRecordListRelationFilter
    alertSubscriptions?: AlertSubscriptionListRelationFilter
    deviceTokens?: DeviceTokenListRelationFilter
    alerts?: AlertListRelationFilter
    triggeredAlerts?: AlertListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bindingsAsPatient?: FamilyBindingOrderByRelationAggregateInput
    bindingsAsFamily?: FamilyBindingOrderByRelationAggregateInput
    medicines?: MedicineOrderByRelationAggregateInput
    checkIns?: CheckInOrderByRelationAggregateInput
    soapRecords?: SOAPRecordOrderByRelationAggregateInput
    alertSubscriptions?: AlertSubscriptionOrderByRelationAggregateInput
    deviceTokens?: DeviceTokenOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
    triggeredAlerts?: AlertOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bindingsAsPatient?: FamilyBindingListRelationFilter
    bindingsAsFamily?: FamilyBindingListRelationFilter
    medicines?: MedicineListRelationFilter
    checkIns?: CheckInListRelationFilter
    soapRecords?: SOAPRecordListRelationFilter
    alertSubscriptions?: AlertSubscriptionListRelationFilter
    deviceTokens?: DeviceTokenListRelationFilter
    alerts?: AlertListRelationFilter
    triggeredAlerts?: AlertListRelationFilter
  }, "id" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FamilyBindingWhereInput = {
    AND?: FamilyBindingWhereInput | FamilyBindingWhereInput[]
    OR?: FamilyBindingWhereInput[]
    NOT?: FamilyBindingWhereInput | FamilyBindingWhereInput[]
    id?: StringFilter<"FamilyBinding"> | string
    patientId?: StringFilter<"FamilyBinding"> | string
    familyId?: StringFilter<"FamilyBinding"> | string
    verified?: BoolFilter<"FamilyBinding"> | boolean
    createdAt?: DateTimeFilter<"FamilyBinding"> | Date | string
    patient?: XOR<UserRelationFilter, UserWhereInput>
    family?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FamilyBindingOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    familyId?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    patient?: UserOrderByWithRelationInput
    family?: UserOrderByWithRelationInput
  }

  export type FamilyBindingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientId_familyId?: FamilyBindingPatientIdFamilyIdCompoundUniqueInput
    AND?: FamilyBindingWhereInput | FamilyBindingWhereInput[]
    OR?: FamilyBindingWhereInput[]
    NOT?: FamilyBindingWhereInput | FamilyBindingWhereInput[]
    patientId?: StringFilter<"FamilyBinding"> | string
    familyId?: StringFilter<"FamilyBinding"> | string
    verified?: BoolFilter<"FamilyBinding"> | boolean
    createdAt?: DateTimeFilter<"FamilyBinding"> | Date | string
    patient?: XOR<UserRelationFilter, UserWhereInput>
    family?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "patientId_familyId">

  export type FamilyBindingOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    familyId?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    _count?: FamilyBindingCountOrderByAggregateInput
    _max?: FamilyBindingMaxOrderByAggregateInput
    _min?: FamilyBindingMinOrderByAggregateInput
  }

  export type FamilyBindingScalarWhereWithAggregatesInput = {
    AND?: FamilyBindingScalarWhereWithAggregatesInput | FamilyBindingScalarWhereWithAggregatesInput[]
    OR?: FamilyBindingScalarWhereWithAggregatesInput[]
    NOT?: FamilyBindingScalarWhereWithAggregatesInput | FamilyBindingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FamilyBinding"> | string
    patientId?: StringWithAggregatesFilter<"FamilyBinding"> | string
    familyId?: StringWithAggregatesFilter<"FamilyBinding"> | string
    verified?: BoolWithAggregatesFilter<"FamilyBinding"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FamilyBinding"> | Date | string
  }

  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    id?: StringFilter<"Medicine"> | string
    userId?: StringFilter<"Medicine"> | string
    name?: StringFilter<"Medicine"> | string
    dosage?: StringFilter<"Medicine"> | string
    frequency?: StringFilter<"Medicine"> | string
    scheduleJson?: StringFilter<"Medicine"> | string
    note?: StringNullableFilter<"Medicine"> | string | null
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    inventory?: XOR<MedicineInventoryNullableRelationFilter, MedicineInventoryWhereInput> | null
    prescriptions?: MedicinePrescriptionListRelationFilter
    checkIns?: CheckInListRelationFilter
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    scheduleJson?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    inventory?: MedicineInventoryOrderByWithRelationInput
    prescriptions?: MedicinePrescriptionOrderByRelationAggregateInput
    checkIns?: CheckInOrderByRelationAggregateInput
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    userId?: StringFilter<"Medicine"> | string
    name?: StringFilter<"Medicine"> | string
    dosage?: StringFilter<"Medicine"> | string
    frequency?: StringFilter<"Medicine"> | string
    scheduleJson?: StringFilter<"Medicine"> | string
    note?: StringNullableFilter<"Medicine"> | string | null
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    inventory?: XOR<MedicineInventoryNullableRelationFilter, MedicineInventoryWhereInput> | null
    prescriptions?: MedicinePrescriptionListRelationFilter
    checkIns?: CheckInListRelationFilter
  }, "id">

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    scheduleJson?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medicine"> | string
    userId?: StringWithAggregatesFilter<"Medicine"> | string
    name?: StringWithAggregatesFilter<"Medicine"> | string
    dosage?: StringWithAggregatesFilter<"Medicine"> | string
    frequency?: StringWithAggregatesFilter<"Medicine"> | string
    scheduleJson?: StringWithAggregatesFilter<"Medicine"> | string
    note?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medicine"> | Date | string
  }

  export type MedicineInventoryWhereInput = {
    AND?: MedicineInventoryWhereInput | MedicineInventoryWhereInput[]
    OR?: MedicineInventoryWhereInput[]
    NOT?: MedicineInventoryWhereInput | MedicineInventoryWhereInput[]
    id?: StringFilter<"MedicineInventory"> | string
    medicineId?: StringFilter<"MedicineInventory"> | string
    totalCount?: IntFilter<"MedicineInventory"> | number
    remainingCount?: IntFilter<"MedicineInventory"> | number
    unit?: StringFilter<"MedicineInventory"> | string
    alertThreshold?: IntFilter<"MedicineInventory"> | number
    updatedAt?: DateTimeFilter<"MedicineInventory"> | Date | string
    medicine?: XOR<MedicineRelationFilter, MedicineWhereInput>
  }

  export type MedicineInventoryOrderByWithRelationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    totalCount?: SortOrder
    remainingCount?: SortOrder
    unit?: SortOrder
    alertThreshold?: SortOrder
    updatedAt?: SortOrder
    medicine?: MedicineOrderByWithRelationInput
  }

  export type MedicineInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    medicineId?: string
    AND?: MedicineInventoryWhereInput | MedicineInventoryWhereInput[]
    OR?: MedicineInventoryWhereInput[]
    NOT?: MedicineInventoryWhereInput | MedicineInventoryWhereInput[]
    totalCount?: IntFilter<"MedicineInventory"> | number
    remainingCount?: IntFilter<"MedicineInventory"> | number
    unit?: StringFilter<"MedicineInventory"> | string
    alertThreshold?: IntFilter<"MedicineInventory"> | number
    updatedAt?: DateTimeFilter<"MedicineInventory"> | Date | string
    medicine?: XOR<MedicineRelationFilter, MedicineWhereInput>
  }, "id" | "medicineId">

  export type MedicineInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    totalCount?: SortOrder
    remainingCount?: SortOrder
    unit?: SortOrder
    alertThreshold?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicineInventoryCountOrderByAggregateInput
    _avg?: MedicineInventoryAvgOrderByAggregateInput
    _max?: MedicineInventoryMaxOrderByAggregateInput
    _min?: MedicineInventoryMinOrderByAggregateInput
    _sum?: MedicineInventorySumOrderByAggregateInput
  }

  export type MedicineInventoryScalarWhereWithAggregatesInput = {
    AND?: MedicineInventoryScalarWhereWithAggregatesInput | MedicineInventoryScalarWhereWithAggregatesInput[]
    OR?: MedicineInventoryScalarWhereWithAggregatesInput[]
    NOT?: MedicineInventoryScalarWhereWithAggregatesInput | MedicineInventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicineInventory"> | string
    medicineId?: StringWithAggregatesFilter<"MedicineInventory"> | string
    totalCount?: IntWithAggregatesFilter<"MedicineInventory"> | number
    remainingCount?: IntWithAggregatesFilter<"MedicineInventory"> | number
    unit?: StringWithAggregatesFilter<"MedicineInventory"> | string
    alertThreshold?: IntWithAggregatesFilter<"MedicineInventory"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"MedicineInventory"> | Date | string
  }

  export type MedicinePrescriptionWhereInput = {
    AND?: MedicinePrescriptionWhereInput | MedicinePrescriptionWhereInput[]
    OR?: MedicinePrescriptionWhereInput[]
    NOT?: MedicinePrescriptionWhereInput | MedicinePrescriptionWhereInput[]
    id?: StringFilter<"MedicinePrescription"> | string
    medicineId?: StringFilter<"MedicinePrescription"> | string
    imageUrl?: StringNullableFilter<"MedicinePrescription"> | string | null
    ocrRawText?: StringNullableFilter<"MedicinePrescription"> | string | null
    ocrResultJson?: StringNullableFilter<"MedicinePrescription"> | string | null
    doctorName?: StringNullableFilter<"MedicinePrescription"> | string | null
    hospitalName?: StringNullableFilter<"MedicinePrescription"> | string | null
    prescribedAt?: DateTimeNullableFilter<"MedicinePrescription"> | Date | string | null
    createdAt?: DateTimeFilter<"MedicinePrescription"> | Date | string
    medicine?: XOR<MedicineRelationFilter, MedicineWhereInput>
  }

  export type MedicinePrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    ocrRawText?: SortOrderInput | SortOrder
    ocrResultJson?: SortOrderInput | SortOrder
    doctorName?: SortOrderInput | SortOrder
    hospitalName?: SortOrderInput | SortOrder
    prescribedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    medicine?: MedicineOrderByWithRelationInput
  }

  export type MedicinePrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicinePrescriptionWhereInput | MedicinePrescriptionWhereInput[]
    OR?: MedicinePrescriptionWhereInput[]
    NOT?: MedicinePrescriptionWhereInput | MedicinePrescriptionWhereInput[]
    medicineId?: StringFilter<"MedicinePrescription"> | string
    imageUrl?: StringNullableFilter<"MedicinePrescription"> | string | null
    ocrRawText?: StringNullableFilter<"MedicinePrescription"> | string | null
    ocrResultJson?: StringNullableFilter<"MedicinePrescription"> | string | null
    doctorName?: StringNullableFilter<"MedicinePrescription"> | string | null
    hospitalName?: StringNullableFilter<"MedicinePrescription"> | string | null
    prescribedAt?: DateTimeNullableFilter<"MedicinePrescription"> | Date | string | null
    createdAt?: DateTimeFilter<"MedicinePrescription"> | Date | string
    medicine?: XOR<MedicineRelationFilter, MedicineWhereInput>
  }, "id">

  export type MedicinePrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    ocrRawText?: SortOrderInput | SortOrder
    ocrResultJson?: SortOrderInput | SortOrder
    doctorName?: SortOrderInput | SortOrder
    hospitalName?: SortOrderInput | SortOrder
    prescribedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MedicinePrescriptionCountOrderByAggregateInput
    _max?: MedicinePrescriptionMaxOrderByAggregateInput
    _min?: MedicinePrescriptionMinOrderByAggregateInput
  }

  export type MedicinePrescriptionScalarWhereWithAggregatesInput = {
    AND?: MedicinePrescriptionScalarWhereWithAggregatesInput | MedicinePrescriptionScalarWhereWithAggregatesInput[]
    OR?: MedicinePrescriptionScalarWhereWithAggregatesInput[]
    NOT?: MedicinePrescriptionScalarWhereWithAggregatesInput | MedicinePrescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicinePrescription"> | string
    medicineId?: StringWithAggregatesFilter<"MedicinePrescription"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"MedicinePrescription"> | string | null
    ocrRawText?: StringNullableWithAggregatesFilter<"MedicinePrescription"> | string | null
    ocrResultJson?: StringNullableWithAggregatesFilter<"MedicinePrescription"> | string | null
    doctorName?: StringNullableWithAggregatesFilter<"MedicinePrescription"> | string | null
    hospitalName?: StringNullableWithAggregatesFilter<"MedicinePrescription"> | string | null
    prescribedAt?: DateTimeNullableWithAggregatesFilter<"MedicinePrescription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MedicinePrescription"> | Date | string
  }

  export type CheckInWhereInput = {
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    id?: StringFilter<"CheckIn"> | string
    userId?: StringFilter<"CheckIn"> | string
    medicineId?: StringFilter<"CheckIn"> | string
    scheduledTime?: DateTimeFilter<"CheckIn"> | Date | string
    actualTime?: DateTimeNullableFilter<"CheckIn"> | Date | string | null
    missed?: BoolFilter<"CheckIn"> | boolean
    missedAlertSent?: BoolFilter<"CheckIn"> | boolean
    confirmType?: StringNullableFilter<"CheckIn"> | string | null
    createdAt?: DateTimeFilter<"CheckIn"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    medicine?: XOR<MedicineRelationFilter, MedicineWhereInput>
  }

  export type CheckInOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    medicineId?: SortOrder
    scheduledTime?: SortOrder
    actualTime?: SortOrderInput | SortOrder
    missed?: SortOrder
    missedAlertSent?: SortOrder
    confirmType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    medicine?: MedicineOrderByWithRelationInput
  }

  export type CheckInWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    userId?: StringFilter<"CheckIn"> | string
    medicineId?: StringFilter<"CheckIn"> | string
    scheduledTime?: DateTimeFilter<"CheckIn"> | Date | string
    actualTime?: DateTimeNullableFilter<"CheckIn"> | Date | string | null
    missed?: BoolFilter<"CheckIn"> | boolean
    missedAlertSent?: BoolFilter<"CheckIn"> | boolean
    confirmType?: StringNullableFilter<"CheckIn"> | string | null
    createdAt?: DateTimeFilter<"CheckIn"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    medicine?: XOR<MedicineRelationFilter, MedicineWhereInput>
  }, "id">

  export type CheckInOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    medicineId?: SortOrder
    scheduledTime?: SortOrder
    actualTime?: SortOrderInput | SortOrder
    missed?: SortOrder
    missedAlertSent?: SortOrder
    confirmType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CheckInCountOrderByAggregateInput
    _max?: CheckInMaxOrderByAggregateInput
    _min?: CheckInMinOrderByAggregateInput
  }

  export type CheckInScalarWhereWithAggregatesInput = {
    AND?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    OR?: CheckInScalarWhereWithAggregatesInput[]
    NOT?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CheckIn"> | string
    userId?: StringWithAggregatesFilter<"CheckIn"> | string
    medicineId?: StringWithAggregatesFilter<"CheckIn"> | string
    scheduledTime?: DateTimeWithAggregatesFilter<"CheckIn"> | Date | string
    actualTime?: DateTimeNullableWithAggregatesFilter<"CheckIn"> | Date | string | null
    missed?: BoolWithAggregatesFilter<"CheckIn"> | boolean
    missedAlertSent?: BoolWithAggregatesFilter<"CheckIn"> | boolean
    confirmType?: StringNullableWithAggregatesFilter<"CheckIn"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CheckIn"> | Date | string
  }

  export type SOAPRecordWhereInput = {
    AND?: SOAPRecordWhereInput | SOAPRecordWhereInput[]
    OR?: SOAPRecordWhereInput[]
    NOT?: SOAPRecordWhereInput | SOAPRecordWhereInput[]
    id?: StringFilter<"SOAPRecord"> | string
    userId?: StringFilter<"SOAPRecord"> | string
    subjectiveNote?: StringNullableFilter<"SOAPRecord"> | string | null
    symptomSeverity?: StringNullableFilter<"SOAPRecord"> | string | null
    symptomTags?: StringNullableFilter<"SOAPRecord"> | string | null
    bloodPressure?: StringNullableFilter<"SOAPRecord"> | string | null
    bloodSugar?: FloatNullableFilter<"SOAPRecord"> | number | null
    heartRate?: IntNullableFilter<"SOAPRecord"> | number | null
    weight?: FloatNullableFilter<"SOAPRecord"> | number | null
    temperature?: FloatNullableFilter<"SOAPRecord"> | number | null
    assessmentNote?: StringNullableFilter<"SOAPRecord"> | string | null
    adherenceRate?: FloatNullableFilter<"SOAPRecord"> | number | null
    reportJson?: StringNullableFilter<"SOAPRecord"> | string | null
    recordedAt?: DateTimeFilter<"SOAPRecord"> | Date | string
    createdAt?: DateTimeFilter<"SOAPRecord"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SOAPRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectiveNote?: SortOrderInput | SortOrder
    symptomSeverity?: SortOrderInput | SortOrder
    symptomTags?: SortOrderInput | SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    bloodSugar?: SortOrderInput | SortOrder
    heartRate?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    assessmentNote?: SortOrderInput | SortOrder
    adherenceRate?: SortOrderInput | SortOrder
    reportJson?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SOAPRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SOAPRecordWhereInput | SOAPRecordWhereInput[]
    OR?: SOAPRecordWhereInput[]
    NOT?: SOAPRecordWhereInput | SOAPRecordWhereInput[]
    userId?: StringFilter<"SOAPRecord"> | string
    subjectiveNote?: StringNullableFilter<"SOAPRecord"> | string | null
    symptomSeverity?: StringNullableFilter<"SOAPRecord"> | string | null
    symptomTags?: StringNullableFilter<"SOAPRecord"> | string | null
    bloodPressure?: StringNullableFilter<"SOAPRecord"> | string | null
    bloodSugar?: FloatNullableFilter<"SOAPRecord"> | number | null
    heartRate?: IntNullableFilter<"SOAPRecord"> | number | null
    weight?: FloatNullableFilter<"SOAPRecord"> | number | null
    temperature?: FloatNullableFilter<"SOAPRecord"> | number | null
    assessmentNote?: StringNullableFilter<"SOAPRecord"> | string | null
    adherenceRate?: FloatNullableFilter<"SOAPRecord"> | number | null
    reportJson?: StringNullableFilter<"SOAPRecord"> | string | null
    recordedAt?: DateTimeFilter<"SOAPRecord"> | Date | string
    createdAt?: DateTimeFilter<"SOAPRecord"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SOAPRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectiveNote?: SortOrderInput | SortOrder
    symptomSeverity?: SortOrderInput | SortOrder
    symptomTags?: SortOrderInput | SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    bloodSugar?: SortOrderInput | SortOrder
    heartRate?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    assessmentNote?: SortOrderInput | SortOrder
    adherenceRate?: SortOrderInput | SortOrder
    reportJson?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    _count?: SOAPRecordCountOrderByAggregateInput
    _avg?: SOAPRecordAvgOrderByAggregateInput
    _max?: SOAPRecordMaxOrderByAggregateInput
    _min?: SOAPRecordMinOrderByAggregateInput
    _sum?: SOAPRecordSumOrderByAggregateInput
  }

  export type SOAPRecordScalarWhereWithAggregatesInput = {
    AND?: SOAPRecordScalarWhereWithAggregatesInput | SOAPRecordScalarWhereWithAggregatesInput[]
    OR?: SOAPRecordScalarWhereWithAggregatesInput[]
    NOT?: SOAPRecordScalarWhereWithAggregatesInput | SOAPRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SOAPRecord"> | string
    userId?: StringWithAggregatesFilter<"SOAPRecord"> | string
    subjectiveNote?: StringNullableWithAggregatesFilter<"SOAPRecord"> | string | null
    symptomSeverity?: StringNullableWithAggregatesFilter<"SOAPRecord"> | string | null
    symptomTags?: StringNullableWithAggregatesFilter<"SOAPRecord"> | string | null
    bloodPressure?: StringNullableWithAggregatesFilter<"SOAPRecord"> | string | null
    bloodSugar?: FloatNullableWithAggregatesFilter<"SOAPRecord"> | number | null
    heartRate?: IntNullableWithAggregatesFilter<"SOAPRecord"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"SOAPRecord"> | number | null
    temperature?: FloatNullableWithAggregatesFilter<"SOAPRecord"> | number | null
    assessmentNote?: StringNullableWithAggregatesFilter<"SOAPRecord"> | string | null
    adherenceRate?: FloatNullableWithAggregatesFilter<"SOAPRecord"> | number | null
    reportJson?: StringNullableWithAggregatesFilter<"SOAPRecord"> | string | null
    recordedAt?: DateTimeWithAggregatesFilter<"SOAPRecord"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SOAPRecord"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    targetUserId?: StringFilter<"Alert"> | string
    sourceUserId?: StringFilter<"Alert"> | string
    level?: StringFilter<"Alert"> | string
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    status?: StringFilter<"Alert"> | string
    relatedCheckInId?: StringNullableFilter<"Alert"> | string | null
    relatedMedicineId?: StringNullableFilter<"Alert"> | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    readAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    targetUser?: XOR<UserRelationFilter, UserWhereInput>
    sourceUser?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    targetUserId?: SortOrder
    sourceUserId?: SortOrder
    level?: SortOrder
    title?: SortOrder
    message?: SortOrder
    status?: SortOrder
    relatedCheckInId?: SortOrderInput | SortOrder
    relatedMedicineId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    targetUser?: UserOrderByWithRelationInput
    sourceUser?: UserOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    targetUserId?: StringFilter<"Alert"> | string
    sourceUserId?: StringFilter<"Alert"> | string
    level?: StringFilter<"Alert"> | string
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    status?: StringFilter<"Alert"> | string
    relatedCheckInId?: StringNullableFilter<"Alert"> | string | null
    relatedMedicineId?: StringNullableFilter<"Alert"> | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    readAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    targetUser?: XOR<UserRelationFilter, UserWhereInput>
    sourceUser?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    targetUserId?: SortOrder
    sourceUserId?: SortOrder
    level?: SortOrder
    title?: SortOrder
    message?: SortOrder
    status?: SortOrder
    relatedCheckInId?: SortOrderInput | SortOrder
    relatedMedicineId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    _count?: AlertCountOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    targetUserId?: StringWithAggregatesFilter<"Alert"> | string
    sourceUserId?: StringWithAggregatesFilter<"Alert"> | string
    level?: StringWithAggregatesFilter<"Alert"> | string
    title?: StringWithAggregatesFilter<"Alert"> | string
    message?: StringWithAggregatesFilter<"Alert"> | string
    status?: StringWithAggregatesFilter<"Alert"> | string
    relatedCheckInId?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    relatedMedicineId?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    readAt?: DateTimeNullableWithAggregatesFilter<"Alert"> | Date | string | null
  }

  export type AlertSubscriptionWhereInput = {
    AND?: AlertSubscriptionWhereInput | AlertSubscriptionWhereInput[]
    OR?: AlertSubscriptionWhereInput[]
    NOT?: AlertSubscriptionWhereInput | AlertSubscriptionWhereInput[]
    id?: StringFilter<"AlertSubscription"> | string
    userId?: StringFilter<"AlertSubscription"> | string
    missAlertEnabled?: BoolFilter<"AlertSubscription"> | boolean
    inventoryAlertEnabled?: BoolFilter<"AlertSubscription"> | boolean
    sideEffectAlertEnabled?: BoolFilter<"AlertSubscription"> | boolean
    missThresholdMinutes?: IntFilter<"AlertSubscription"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AlertSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    missAlertEnabled?: SortOrder
    inventoryAlertEnabled?: SortOrder
    sideEffectAlertEnabled?: SortOrder
    missThresholdMinutes?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AlertSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertSubscriptionWhereInput | AlertSubscriptionWhereInput[]
    OR?: AlertSubscriptionWhereInput[]
    NOT?: AlertSubscriptionWhereInput | AlertSubscriptionWhereInput[]
    userId?: StringFilter<"AlertSubscription"> | string
    missAlertEnabled?: BoolFilter<"AlertSubscription"> | boolean
    inventoryAlertEnabled?: BoolFilter<"AlertSubscription"> | boolean
    sideEffectAlertEnabled?: BoolFilter<"AlertSubscription"> | boolean
    missThresholdMinutes?: IntFilter<"AlertSubscription"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AlertSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    missAlertEnabled?: SortOrder
    inventoryAlertEnabled?: SortOrder
    sideEffectAlertEnabled?: SortOrder
    missThresholdMinutes?: SortOrder
    _count?: AlertSubscriptionCountOrderByAggregateInput
    _avg?: AlertSubscriptionAvgOrderByAggregateInput
    _max?: AlertSubscriptionMaxOrderByAggregateInput
    _min?: AlertSubscriptionMinOrderByAggregateInput
    _sum?: AlertSubscriptionSumOrderByAggregateInput
  }

  export type AlertSubscriptionScalarWhereWithAggregatesInput = {
    AND?: AlertSubscriptionScalarWhereWithAggregatesInput | AlertSubscriptionScalarWhereWithAggregatesInput[]
    OR?: AlertSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: AlertSubscriptionScalarWhereWithAggregatesInput | AlertSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlertSubscription"> | string
    userId?: StringWithAggregatesFilter<"AlertSubscription"> | string
    missAlertEnabled?: BoolWithAggregatesFilter<"AlertSubscription"> | boolean
    inventoryAlertEnabled?: BoolWithAggregatesFilter<"AlertSubscription"> | boolean
    sideEffectAlertEnabled?: BoolWithAggregatesFilter<"AlertSubscription"> | boolean
    missThresholdMinutes?: IntWithAggregatesFilter<"AlertSubscription"> | number
  }

  export type DeviceTokenWhereInput = {
    AND?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    OR?: DeviceTokenWhereInput[]
    NOT?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    id?: StringFilter<"DeviceToken"> | string
    userId?: StringFilter<"DeviceToken"> | string
    token?: StringFilter<"DeviceToken"> | string
    platform?: StringFilter<"DeviceToken"> | string
    createdAt?: DateTimeFilter<"DeviceToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DeviceTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DeviceTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    OR?: DeviceTokenWhereInput[]
    NOT?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    userId?: StringFilter<"DeviceToken"> | string
    token?: StringFilter<"DeviceToken"> | string
    platform?: StringFilter<"DeviceToken"> | string
    createdAt?: DateTimeFilter<"DeviceToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DeviceTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    _count?: DeviceTokenCountOrderByAggregateInput
    _max?: DeviceTokenMaxOrderByAggregateInput
    _min?: DeviceTokenMinOrderByAggregateInput
  }

  export type DeviceTokenScalarWhereWithAggregatesInput = {
    AND?: DeviceTokenScalarWhereWithAggregatesInput | DeviceTokenScalarWhereWithAggregatesInput[]
    OR?: DeviceTokenScalarWhereWithAggregatesInput[]
    NOT?: DeviceTokenScalarWhereWithAggregatesInput | DeviceTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeviceToken"> | string
    userId?: StringWithAggregatesFilter<"DeviceToken"> | string
    token?: StringWithAggregatesFilter<"DeviceToken"> | string
    platform?: StringWithAggregatesFilter<"DeviceToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DeviceToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingCreateNestedManyWithoutFamilyInput
    medicines?: MedicineCreateNestedManyWithoutUserInput
    checkIns?: CheckInCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertCreateNestedManyWithoutSourceUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingUncheckedCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingUncheckedCreateNestedManyWithoutFamilyInput
    medicines?: MedicineUncheckedCreateNestedManyWithoutUserInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordUncheckedCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertUncheckedCreateNestedManyWithoutSourceUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUpdateManyWithoutSourceUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUncheckedUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUncheckedUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUncheckedUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUncheckedUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUncheckedUpdateManyWithoutSourceUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyBindingCreateInput = {
    id?: string
    verified?: boolean
    createdAt?: Date | string
    patient: UserCreateNestedOneWithoutBindingsAsPatientInput
    family: UserCreateNestedOneWithoutBindingsAsFamilyInput
  }

  export type FamilyBindingUncheckedCreateInput = {
    id?: string
    patientId: string
    familyId: string
    verified?: boolean
    createdAt?: Date | string
  }

  export type FamilyBindingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UserUpdateOneRequiredWithoutBindingsAsPatientNestedInput
    family?: UserUpdateOneRequiredWithoutBindingsAsFamilyNestedInput
  }

  export type FamilyBindingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    familyId?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyBindingCreateManyInput = {
    id?: string
    patientId: string
    familyId: string
    verified?: boolean
    createdAt?: Date | string
  }

  export type FamilyBindingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyBindingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    familyId?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineCreateInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicinesInput
    inventory?: MedicineInventoryCreateNestedOneWithoutMedicineInput
    prescriptions?: MedicinePrescriptionCreateNestedManyWithoutMedicineInput
    checkIns?: CheckInCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: MedicineInventoryUncheckedCreateNestedOneWithoutMedicineInput
    prescriptions?: MedicinePrescriptionUncheckedCreateNestedManyWithoutMedicineInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicinesNestedInput
    inventory?: MedicineInventoryUpdateOneWithoutMedicineNestedInput
    prescriptions?: MedicinePrescriptionUpdateManyWithoutMedicineNestedInput
    checkIns?: CheckInUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: MedicineInventoryUncheckedUpdateOneWithoutMedicineNestedInput
    prescriptions?: MedicinePrescriptionUncheckedUpdateManyWithoutMedicineNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateManyInput = {
    id?: string
    userId: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineInventoryCreateInput = {
    id?: string
    totalCount: number
    remainingCount: number
    unit: string
    alertThreshold?: number
    updatedAt?: Date | string
    medicine: MedicineCreateNestedOneWithoutInventoryInput
  }

  export type MedicineInventoryUncheckedCreateInput = {
    id?: string
    medicineId: string
    totalCount: number
    remainingCount: number
    unit: string
    alertThreshold?: number
    updatedAt?: Date | string
  }

  export type MedicineInventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    remainingCount?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    alertThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: MedicineUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type MedicineInventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    remainingCount?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    alertThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineInventoryCreateManyInput = {
    id?: string
    medicineId: string
    totalCount: number
    remainingCount: number
    unit: string
    alertThreshold?: number
    updatedAt?: Date | string
  }

  export type MedicineInventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    remainingCount?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    alertThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineInventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    remainingCount?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    alertThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicinePrescriptionCreateInput = {
    id?: string
    imageUrl?: string | null
    ocrRawText?: string | null
    ocrResultJson?: string | null
    doctorName?: string | null
    hospitalName?: string | null
    prescribedAt?: Date | string | null
    createdAt?: Date | string
    medicine: MedicineCreateNestedOneWithoutPrescriptionsInput
  }

  export type MedicinePrescriptionUncheckedCreateInput = {
    id?: string
    medicineId: string
    imageUrl?: string | null
    ocrRawText?: string | null
    ocrResultJson?: string | null
    doctorName?: string | null
    hospitalName?: string | null
    prescribedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MedicinePrescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRawText?: NullableStringFieldUpdateOperationsInput | string | null
    ocrResultJson?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalName?: NullableStringFieldUpdateOperationsInput | string | null
    prescribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: MedicineUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type MedicinePrescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRawText?: NullableStringFieldUpdateOperationsInput | string | null
    ocrResultJson?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalName?: NullableStringFieldUpdateOperationsInput | string | null
    prescribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicinePrescriptionCreateManyInput = {
    id?: string
    medicineId: string
    imageUrl?: string | null
    ocrRawText?: string | null
    ocrResultJson?: string | null
    doctorName?: string | null
    hospitalName?: string | null
    prescribedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MedicinePrescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRawText?: NullableStringFieldUpdateOperationsInput | string | null
    ocrResultJson?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalName?: NullableStringFieldUpdateOperationsInput | string | null
    prescribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicinePrescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRawText?: NullableStringFieldUpdateOperationsInput | string | null
    ocrResultJson?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalName?: NullableStringFieldUpdateOperationsInput | string | null
    prescribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateInput = {
    id?: string
    scheduledTime: Date | string
    actualTime?: Date | string | null
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCheckInsInput
    medicine: MedicineCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateInput = {
    id?: string
    userId: string
    medicineId: string
    scheduledTime: Date | string
    actualTime?: Date | string | null
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: string | null
    createdAt?: Date | string
  }

  export type CheckInUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missed?: BoolFieldUpdateOperationsInput | boolean
    missedAlertSent?: BoolFieldUpdateOperationsInput | boolean
    confirmType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckInsNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missed?: BoolFieldUpdateOperationsInput | boolean
    missedAlertSent?: BoolFieldUpdateOperationsInput | boolean
    confirmType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateManyInput = {
    id?: string
    userId: string
    medicineId: string
    scheduledTime: Date | string
    actualTime?: Date | string | null
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: string | null
    createdAt?: Date | string
  }

  export type CheckInUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missed?: BoolFieldUpdateOperationsInput | boolean
    missedAlertSent?: BoolFieldUpdateOperationsInput | boolean
    confirmType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missed?: BoolFieldUpdateOperationsInput | boolean
    missedAlertSent?: BoolFieldUpdateOperationsInput | boolean
    confirmType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOAPRecordCreateInput = {
    id?: string
    subjectiveNote?: string | null
    symptomSeverity?: string | null
    symptomTags?: string | null
    bloodPressure?: string | null
    bloodSugar?: number | null
    heartRate?: number | null
    weight?: number | null
    temperature?: number | null
    assessmentNote?: string | null
    adherenceRate?: number | null
    reportJson?: string | null
    recordedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSoapRecordsInput
  }

  export type SOAPRecordUncheckedCreateInput = {
    id?: string
    userId: string
    subjectiveNote?: string | null
    symptomSeverity?: string | null
    symptomTags?: string | null
    bloodPressure?: string | null
    bloodSugar?: number | null
    heartRate?: number | null
    weight?: number | null
    temperature?: number | null
    assessmentNote?: string | null
    adherenceRate?: number | null
    reportJson?: string | null
    recordedAt?: Date | string
    createdAt?: Date | string
  }

  export type SOAPRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectiveNote?: NullableStringFieldUpdateOperationsInput | string | null
    symptomSeverity?: NullableStringFieldUpdateOperationsInput | string | null
    symptomTags?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    assessmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    reportJson?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSoapRecordsNestedInput
  }

  export type SOAPRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectiveNote?: NullableStringFieldUpdateOperationsInput | string | null
    symptomSeverity?: NullableStringFieldUpdateOperationsInput | string | null
    symptomTags?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    assessmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    reportJson?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOAPRecordCreateManyInput = {
    id?: string
    userId: string
    subjectiveNote?: string | null
    symptomSeverity?: string | null
    symptomTags?: string | null
    bloodPressure?: string | null
    bloodSugar?: number | null
    heartRate?: number | null
    weight?: number | null
    temperature?: number | null
    assessmentNote?: string | null
    adherenceRate?: number | null
    reportJson?: string | null
    recordedAt?: Date | string
    createdAt?: Date | string
  }

  export type SOAPRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectiveNote?: NullableStringFieldUpdateOperationsInput | string | null
    symptomSeverity?: NullableStringFieldUpdateOperationsInput | string | null
    symptomTags?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    assessmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    reportJson?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOAPRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectiveNote?: NullableStringFieldUpdateOperationsInput | string | null
    symptomSeverity?: NullableStringFieldUpdateOperationsInput | string | null
    symptomTags?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    assessmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    reportJson?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    id?: string
    level: string
    title: string
    message: string
    status?: string
    relatedCheckInId?: string | null
    relatedMedicineId?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
    targetUser: UserCreateNestedOneWithoutAlertsInput
    sourceUser: UserCreateNestedOneWithoutTriggeredAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    targetUserId: string
    sourceUserId: string
    level: string
    title: string
    message: string
    status?: string
    relatedCheckInId?: string | null
    relatedMedicineId?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedCheckInId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMedicineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetUser?: UserUpdateOneRequiredWithoutAlertsNestedInput
    sourceUser?: UserUpdateOneRequiredWithoutTriggeredAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    sourceUserId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedCheckInId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMedicineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertCreateManyInput = {
    id?: string
    targetUserId: string
    sourceUserId: string
    level: string
    title: string
    message: string
    status?: string
    relatedCheckInId?: string | null
    relatedMedicineId?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedCheckInId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMedicineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    sourceUserId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedCheckInId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMedicineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertSubscriptionCreateInput = {
    id?: string
    missAlertEnabled?: boolean
    inventoryAlertEnabled?: boolean
    sideEffectAlertEnabled?: boolean
    missThresholdMinutes?: number
    user: UserCreateNestedOneWithoutAlertSubscriptionsInput
  }

  export type AlertSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    missAlertEnabled?: boolean
    inventoryAlertEnabled?: boolean
    sideEffectAlertEnabled?: boolean
    missThresholdMinutes?: number
  }

  export type AlertSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    missAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    inventoryAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    sideEffectAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    missThresholdMinutes?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAlertSubscriptionsNestedInput
  }

  export type AlertSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    missAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    inventoryAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    sideEffectAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    missThresholdMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type AlertSubscriptionCreateManyInput = {
    id?: string
    userId: string
    missAlertEnabled?: boolean
    inventoryAlertEnabled?: boolean
    sideEffectAlertEnabled?: boolean
    missThresholdMinutes?: number
  }

  export type AlertSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    missAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    inventoryAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    sideEffectAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    missThresholdMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type AlertSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    missAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    inventoryAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    sideEffectAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    missThresholdMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceTokenCreateInput = {
    id?: string
    token: string
    platform: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDeviceTokensInput
  }

  export type DeviceTokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    platform: string
    createdAt?: Date | string
  }

  export type DeviceTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDeviceTokensNestedInput
  }

  export type DeviceTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    platform: string
    createdAt?: Date | string
  }

  export type DeviceTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FamilyBindingListRelationFilter = {
    every?: FamilyBindingWhereInput
    some?: FamilyBindingWhereInput
    none?: FamilyBindingWhereInput
  }

  export type MedicineListRelationFilter = {
    every?: MedicineWhereInput
    some?: MedicineWhereInput
    none?: MedicineWhereInput
  }

  export type CheckInListRelationFilter = {
    every?: CheckInWhereInput
    some?: CheckInWhereInput
    none?: CheckInWhereInput
  }

  export type SOAPRecordListRelationFilter = {
    every?: SOAPRecordWhereInput
    some?: SOAPRecordWhereInput
    none?: SOAPRecordWhereInput
  }

  export type AlertSubscriptionListRelationFilter = {
    every?: AlertSubscriptionWhereInput
    some?: AlertSubscriptionWhereInput
    none?: AlertSubscriptionWhereInput
  }

  export type DeviceTokenListRelationFilter = {
    every?: DeviceTokenWhereInput
    some?: DeviceTokenWhereInput
    none?: DeviceTokenWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FamilyBindingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckInOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SOAPRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FamilyBindingPatientIdFamilyIdCompoundUniqueInput = {
    patientId: string
    familyId: string
  }

  export type FamilyBindingCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    familyId?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type FamilyBindingMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    familyId?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type FamilyBindingMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    familyId?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MedicineInventoryNullableRelationFilter = {
    is?: MedicineInventoryWhereInput | null
    isNot?: MedicineInventoryWhereInput | null
  }

  export type MedicinePrescriptionListRelationFilter = {
    every?: MedicinePrescriptionWhereInput
    some?: MedicinePrescriptionWhereInput
    none?: MedicinePrescriptionWhereInput
  }

  export type MedicinePrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    scheduleJson?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    scheduleJson?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    scheduleJson?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MedicineRelationFilter = {
    is?: MedicineWhereInput
    isNot?: MedicineWhereInput
  }

  export type MedicineInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    totalCount?: SortOrder
    remainingCount?: SortOrder
    unit?: SortOrder
    alertThreshold?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineInventoryAvgOrderByAggregateInput = {
    totalCount?: SortOrder
    remainingCount?: SortOrder
    alertThreshold?: SortOrder
  }

  export type MedicineInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    totalCount?: SortOrder
    remainingCount?: SortOrder
    unit?: SortOrder
    alertThreshold?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    totalCount?: SortOrder
    remainingCount?: SortOrder
    unit?: SortOrder
    alertThreshold?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineInventorySumOrderByAggregateInput = {
    totalCount?: SortOrder
    remainingCount?: SortOrder
    alertThreshold?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type MedicinePrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    imageUrl?: SortOrder
    ocrRawText?: SortOrder
    ocrResultJson?: SortOrder
    doctorName?: SortOrder
    hospitalName?: SortOrder
    prescribedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicinePrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    imageUrl?: SortOrder
    ocrRawText?: SortOrder
    ocrResultJson?: SortOrder
    doctorName?: SortOrder
    hospitalName?: SortOrder
    prescribedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicinePrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    imageUrl?: SortOrder
    ocrRawText?: SortOrder
    ocrResultJson?: SortOrder
    doctorName?: SortOrder
    hospitalName?: SortOrder
    prescribedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckInCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    medicineId?: SortOrder
    scheduledTime?: SortOrder
    actualTime?: SortOrder
    missed?: SortOrder
    missedAlertSent?: SortOrder
    confirmType?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckInMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    medicineId?: SortOrder
    scheduledTime?: SortOrder
    actualTime?: SortOrder
    missed?: SortOrder
    missedAlertSent?: SortOrder
    confirmType?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckInMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    medicineId?: SortOrder
    scheduledTime?: SortOrder
    actualTime?: SortOrder
    missed?: SortOrder
    missedAlertSent?: SortOrder
    confirmType?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SOAPRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectiveNote?: SortOrder
    symptomSeverity?: SortOrder
    symptomTags?: SortOrder
    bloodPressure?: SortOrder
    bloodSugar?: SortOrder
    heartRate?: SortOrder
    weight?: SortOrder
    temperature?: SortOrder
    assessmentNote?: SortOrder
    adherenceRate?: SortOrder
    reportJson?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SOAPRecordAvgOrderByAggregateInput = {
    bloodSugar?: SortOrder
    heartRate?: SortOrder
    weight?: SortOrder
    temperature?: SortOrder
    adherenceRate?: SortOrder
  }

  export type SOAPRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectiveNote?: SortOrder
    symptomSeverity?: SortOrder
    symptomTags?: SortOrder
    bloodPressure?: SortOrder
    bloodSugar?: SortOrder
    heartRate?: SortOrder
    weight?: SortOrder
    temperature?: SortOrder
    assessmentNote?: SortOrder
    adherenceRate?: SortOrder
    reportJson?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SOAPRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectiveNote?: SortOrder
    symptomSeverity?: SortOrder
    symptomTags?: SortOrder
    bloodPressure?: SortOrder
    bloodSugar?: SortOrder
    heartRate?: SortOrder
    weight?: SortOrder
    temperature?: SortOrder
    assessmentNote?: SortOrder
    adherenceRate?: SortOrder
    reportJson?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SOAPRecordSumOrderByAggregateInput = {
    bloodSugar?: SortOrder
    heartRate?: SortOrder
    weight?: SortOrder
    temperature?: SortOrder
    adherenceRate?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    targetUserId?: SortOrder
    sourceUserId?: SortOrder
    level?: SortOrder
    title?: SortOrder
    message?: SortOrder
    status?: SortOrder
    relatedCheckInId?: SortOrder
    relatedMedicineId?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    targetUserId?: SortOrder
    sourceUserId?: SortOrder
    level?: SortOrder
    title?: SortOrder
    message?: SortOrder
    status?: SortOrder
    relatedCheckInId?: SortOrder
    relatedMedicineId?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    targetUserId?: SortOrder
    sourceUserId?: SortOrder
    level?: SortOrder
    title?: SortOrder
    message?: SortOrder
    status?: SortOrder
    relatedCheckInId?: SortOrder
    relatedMedicineId?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
  }

  export type AlertSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missAlertEnabled?: SortOrder
    inventoryAlertEnabled?: SortOrder
    sideEffectAlertEnabled?: SortOrder
    missThresholdMinutes?: SortOrder
  }

  export type AlertSubscriptionAvgOrderByAggregateInput = {
    missThresholdMinutes?: SortOrder
  }

  export type AlertSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missAlertEnabled?: SortOrder
    inventoryAlertEnabled?: SortOrder
    sideEffectAlertEnabled?: SortOrder
    missThresholdMinutes?: SortOrder
  }

  export type AlertSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missAlertEnabled?: SortOrder
    inventoryAlertEnabled?: SortOrder
    sideEffectAlertEnabled?: SortOrder
    missThresholdMinutes?: SortOrder
  }

  export type AlertSubscriptionSumOrderByAggregateInput = {
    missThresholdMinutes?: SortOrder
  }

  export type DeviceTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
  }

  export type FamilyBindingCreateNestedManyWithoutPatientInput = {
    create?: XOR<FamilyBindingCreateWithoutPatientInput, FamilyBindingUncheckedCreateWithoutPatientInput> | FamilyBindingCreateWithoutPatientInput[] | FamilyBindingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: FamilyBindingCreateOrConnectWithoutPatientInput | FamilyBindingCreateOrConnectWithoutPatientInput[]
    createMany?: FamilyBindingCreateManyPatientInputEnvelope
    connect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
  }

  export type FamilyBindingCreateNestedManyWithoutFamilyInput = {
    create?: XOR<FamilyBindingCreateWithoutFamilyInput, FamilyBindingUncheckedCreateWithoutFamilyInput> | FamilyBindingCreateWithoutFamilyInput[] | FamilyBindingUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FamilyBindingCreateOrConnectWithoutFamilyInput | FamilyBindingCreateOrConnectWithoutFamilyInput[]
    createMany?: FamilyBindingCreateManyFamilyInputEnvelope
    connect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
  }

  export type MedicineCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicineCreateWithoutUserInput, MedicineUncheckedCreateWithoutUserInput> | MedicineCreateWithoutUserInput[] | MedicineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutUserInput | MedicineCreateOrConnectWithoutUserInput[]
    createMany?: MedicineCreateManyUserInputEnvelope
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
  }

  export type CheckInCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput> | CheckInCreateWithoutUserInput[] | CheckInUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutUserInput | CheckInCreateOrConnectWithoutUserInput[]
    createMany?: CheckInCreateManyUserInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type SOAPRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<SOAPRecordCreateWithoutUserInput, SOAPRecordUncheckedCreateWithoutUserInput> | SOAPRecordCreateWithoutUserInput[] | SOAPRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SOAPRecordCreateOrConnectWithoutUserInput | SOAPRecordCreateOrConnectWithoutUserInput[]
    createMany?: SOAPRecordCreateManyUserInputEnvelope
    connect?: SOAPRecordWhereUniqueInput | SOAPRecordWhereUniqueInput[]
  }

  export type AlertSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertSubscriptionCreateWithoutUserInput, AlertSubscriptionUncheckedCreateWithoutUserInput> | AlertSubscriptionCreateWithoutUserInput[] | AlertSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertSubscriptionCreateOrConnectWithoutUserInput | AlertSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: AlertSubscriptionCreateManyUserInputEnvelope
    connect?: AlertSubscriptionWhereUniqueInput | AlertSubscriptionWhereUniqueInput[]
  }

  export type DeviceTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceTokenCreateWithoutUserInput, DeviceTokenUncheckedCreateWithoutUserInput> | DeviceTokenCreateWithoutUserInput[] | DeviceTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceTokenCreateOrConnectWithoutUserInput | DeviceTokenCreateOrConnectWithoutUserInput[]
    createMany?: DeviceTokenCreateManyUserInputEnvelope
    connect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<AlertCreateWithoutTargetUserInput, AlertUncheckedCreateWithoutTargetUserInput> | AlertCreateWithoutTargetUserInput[] | AlertUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTargetUserInput | AlertCreateOrConnectWithoutTargetUserInput[]
    createMany?: AlertCreateManyTargetUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutSourceUserInput = {
    create?: XOR<AlertCreateWithoutSourceUserInput, AlertUncheckedCreateWithoutSourceUserInput> | AlertCreateWithoutSourceUserInput[] | AlertUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSourceUserInput | AlertCreateOrConnectWithoutSourceUserInput[]
    createMany?: AlertCreateManySourceUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type FamilyBindingUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<FamilyBindingCreateWithoutPatientInput, FamilyBindingUncheckedCreateWithoutPatientInput> | FamilyBindingCreateWithoutPatientInput[] | FamilyBindingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: FamilyBindingCreateOrConnectWithoutPatientInput | FamilyBindingCreateOrConnectWithoutPatientInput[]
    createMany?: FamilyBindingCreateManyPatientInputEnvelope
    connect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
  }

  export type FamilyBindingUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<FamilyBindingCreateWithoutFamilyInput, FamilyBindingUncheckedCreateWithoutFamilyInput> | FamilyBindingCreateWithoutFamilyInput[] | FamilyBindingUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FamilyBindingCreateOrConnectWithoutFamilyInput | FamilyBindingCreateOrConnectWithoutFamilyInput[]
    createMany?: FamilyBindingCreateManyFamilyInputEnvelope
    connect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
  }

  export type MedicineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicineCreateWithoutUserInput, MedicineUncheckedCreateWithoutUserInput> | MedicineCreateWithoutUserInput[] | MedicineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutUserInput | MedicineCreateOrConnectWithoutUserInput[]
    createMany?: MedicineCreateManyUserInputEnvelope
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
  }

  export type CheckInUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput> | CheckInCreateWithoutUserInput[] | CheckInUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutUserInput | CheckInCreateOrConnectWithoutUserInput[]
    createMany?: CheckInCreateManyUserInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type SOAPRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SOAPRecordCreateWithoutUserInput, SOAPRecordUncheckedCreateWithoutUserInput> | SOAPRecordCreateWithoutUserInput[] | SOAPRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SOAPRecordCreateOrConnectWithoutUserInput | SOAPRecordCreateOrConnectWithoutUserInput[]
    createMany?: SOAPRecordCreateManyUserInputEnvelope
    connect?: SOAPRecordWhereUniqueInput | SOAPRecordWhereUniqueInput[]
  }

  export type AlertSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertSubscriptionCreateWithoutUserInput, AlertSubscriptionUncheckedCreateWithoutUserInput> | AlertSubscriptionCreateWithoutUserInput[] | AlertSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertSubscriptionCreateOrConnectWithoutUserInput | AlertSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: AlertSubscriptionCreateManyUserInputEnvelope
    connect?: AlertSubscriptionWhereUniqueInput | AlertSubscriptionWhereUniqueInput[]
  }

  export type DeviceTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceTokenCreateWithoutUserInput, DeviceTokenUncheckedCreateWithoutUserInput> | DeviceTokenCreateWithoutUserInput[] | DeviceTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceTokenCreateOrConnectWithoutUserInput | DeviceTokenCreateOrConnectWithoutUserInput[]
    createMany?: DeviceTokenCreateManyUserInputEnvelope
    connect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<AlertCreateWithoutTargetUserInput, AlertUncheckedCreateWithoutTargetUserInput> | AlertCreateWithoutTargetUserInput[] | AlertUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTargetUserInput | AlertCreateOrConnectWithoutTargetUserInput[]
    createMany?: AlertCreateManyTargetUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutSourceUserInput = {
    create?: XOR<AlertCreateWithoutSourceUserInput, AlertUncheckedCreateWithoutSourceUserInput> | AlertCreateWithoutSourceUserInput[] | AlertUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSourceUserInput | AlertCreateOrConnectWithoutSourceUserInput[]
    createMany?: AlertCreateManySourceUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FamilyBindingUpdateManyWithoutPatientNestedInput = {
    create?: XOR<FamilyBindingCreateWithoutPatientInput, FamilyBindingUncheckedCreateWithoutPatientInput> | FamilyBindingCreateWithoutPatientInput[] | FamilyBindingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: FamilyBindingCreateOrConnectWithoutPatientInput | FamilyBindingCreateOrConnectWithoutPatientInput[]
    upsert?: FamilyBindingUpsertWithWhereUniqueWithoutPatientInput | FamilyBindingUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: FamilyBindingCreateManyPatientInputEnvelope
    set?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    disconnect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    delete?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    connect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    update?: FamilyBindingUpdateWithWhereUniqueWithoutPatientInput | FamilyBindingUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: FamilyBindingUpdateManyWithWhereWithoutPatientInput | FamilyBindingUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: FamilyBindingScalarWhereInput | FamilyBindingScalarWhereInput[]
  }

  export type FamilyBindingUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<FamilyBindingCreateWithoutFamilyInput, FamilyBindingUncheckedCreateWithoutFamilyInput> | FamilyBindingCreateWithoutFamilyInput[] | FamilyBindingUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FamilyBindingCreateOrConnectWithoutFamilyInput | FamilyBindingCreateOrConnectWithoutFamilyInput[]
    upsert?: FamilyBindingUpsertWithWhereUniqueWithoutFamilyInput | FamilyBindingUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: FamilyBindingCreateManyFamilyInputEnvelope
    set?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    disconnect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    delete?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    connect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    update?: FamilyBindingUpdateWithWhereUniqueWithoutFamilyInput | FamilyBindingUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: FamilyBindingUpdateManyWithWhereWithoutFamilyInput | FamilyBindingUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: FamilyBindingScalarWhereInput | FamilyBindingScalarWhereInput[]
  }

  export type MedicineUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicineCreateWithoutUserInput, MedicineUncheckedCreateWithoutUserInput> | MedicineCreateWithoutUserInput[] | MedicineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutUserInput | MedicineCreateOrConnectWithoutUserInput[]
    upsert?: MedicineUpsertWithWhereUniqueWithoutUserInput | MedicineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicineCreateManyUserInputEnvelope
    set?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    disconnect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    delete?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    update?: MedicineUpdateWithWhereUniqueWithoutUserInput | MedicineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicineUpdateManyWithWhereWithoutUserInput | MedicineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
  }

  export type CheckInUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput> | CheckInCreateWithoutUserInput[] | CheckInUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutUserInput | CheckInCreateOrConnectWithoutUserInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutUserInput | CheckInUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckInCreateManyUserInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutUserInput | CheckInUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutUserInput | CheckInUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type SOAPRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<SOAPRecordCreateWithoutUserInput, SOAPRecordUncheckedCreateWithoutUserInput> | SOAPRecordCreateWithoutUserInput[] | SOAPRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SOAPRecordCreateOrConnectWithoutUserInput | SOAPRecordCreateOrConnectWithoutUserInput[]
    upsert?: SOAPRecordUpsertWithWhereUniqueWithoutUserInput | SOAPRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SOAPRecordCreateManyUserInputEnvelope
    set?: SOAPRecordWhereUniqueInput | SOAPRecordWhereUniqueInput[]
    disconnect?: SOAPRecordWhereUniqueInput | SOAPRecordWhereUniqueInput[]
    delete?: SOAPRecordWhereUniqueInput | SOAPRecordWhereUniqueInput[]
    connect?: SOAPRecordWhereUniqueInput | SOAPRecordWhereUniqueInput[]
    update?: SOAPRecordUpdateWithWhereUniqueWithoutUserInput | SOAPRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SOAPRecordUpdateManyWithWhereWithoutUserInput | SOAPRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SOAPRecordScalarWhereInput | SOAPRecordScalarWhereInput[]
  }

  export type AlertSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertSubscriptionCreateWithoutUserInput, AlertSubscriptionUncheckedCreateWithoutUserInput> | AlertSubscriptionCreateWithoutUserInput[] | AlertSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertSubscriptionCreateOrConnectWithoutUserInput | AlertSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: AlertSubscriptionUpsertWithWhereUniqueWithoutUserInput | AlertSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertSubscriptionCreateManyUserInputEnvelope
    set?: AlertSubscriptionWhereUniqueInput | AlertSubscriptionWhereUniqueInput[]
    disconnect?: AlertSubscriptionWhereUniqueInput | AlertSubscriptionWhereUniqueInput[]
    delete?: AlertSubscriptionWhereUniqueInput | AlertSubscriptionWhereUniqueInput[]
    connect?: AlertSubscriptionWhereUniqueInput | AlertSubscriptionWhereUniqueInput[]
    update?: AlertSubscriptionUpdateWithWhereUniqueWithoutUserInput | AlertSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertSubscriptionUpdateManyWithWhereWithoutUserInput | AlertSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertSubscriptionScalarWhereInput | AlertSubscriptionScalarWhereInput[]
  }

  export type DeviceTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceTokenCreateWithoutUserInput, DeviceTokenUncheckedCreateWithoutUserInput> | DeviceTokenCreateWithoutUserInput[] | DeviceTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceTokenCreateOrConnectWithoutUserInput | DeviceTokenCreateOrConnectWithoutUserInput[]
    upsert?: DeviceTokenUpsertWithWhereUniqueWithoutUserInput | DeviceTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceTokenCreateManyUserInputEnvelope
    set?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    disconnect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    delete?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    connect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    update?: DeviceTokenUpdateWithWhereUniqueWithoutUserInput | DeviceTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceTokenUpdateManyWithWhereWithoutUserInput | DeviceTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceTokenScalarWhereInput | DeviceTokenScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<AlertCreateWithoutTargetUserInput, AlertUncheckedCreateWithoutTargetUserInput> | AlertCreateWithoutTargetUserInput[] | AlertUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTargetUserInput | AlertCreateOrConnectWithoutTargetUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutTargetUserInput | AlertUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: AlertCreateManyTargetUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutTargetUserInput | AlertUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutTargetUserInput | AlertUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutSourceUserNestedInput = {
    create?: XOR<AlertCreateWithoutSourceUserInput, AlertUncheckedCreateWithoutSourceUserInput> | AlertCreateWithoutSourceUserInput[] | AlertUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSourceUserInput | AlertCreateOrConnectWithoutSourceUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSourceUserInput | AlertUpsertWithWhereUniqueWithoutSourceUserInput[]
    createMany?: AlertCreateManySourceUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSourceUserInput | AlertUpdateWithWhereUniqueWithoutSourceUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSourceUserInput | AlertUpdateManyWithWhereWithoutSourceUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type FamilyBindingUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<FamilyBindingCreateWithoutPatientInput, FamilyBindingUncheckedCreateWithoutPatientInput> | FamilyBindingCreateWithoutPatientInput[] | FamilyBindingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: FamilyBindingCreateOrConnectWithoutPatientInput | FamilyBindingCreateOrConnectWithoutPatientInput[]
    upsert?: FamilyBindingUpsertWithWhereUniqueWithoutPatientInput | FamilyBindingUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: FamilyBindingCreateManyPatientInputEnvelope
    set?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    disconnect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    delete?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    connect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    update?: FamilyBindingUpdateWithWhereUniqueWithoutPatientInput | FamilyBindingUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: FamilyBindingUpdateManyWithWhereWithoutPatientInput | FamilyBindingUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: FamilyBindingScalarWhereInput | FamilyBindingScalarWhereInput[]
  }

  export type FamilyBindingUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<FamilyBindingCreateWithoutFamilyInput, FamilyBindingUncheckedCreateWithoutFamilyInput> | FamilyBindingCreateWithoutFamilyInput[] | FamilyBindingUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FamilyBindingCreateOrConnectWithoutFamilyInput | FamilyBindingCreateOrConnectWithoutFamilyInput[]
    upsert?: FamilyBindingUpsertWithWhereUniqueWithoutFamilyInput | FamilyBindingUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: FamilyBindingCreateManyFamilyInputEnvelope
    set?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    disconnect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    delete?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    connect?: FamilyBindingWhereUniqueInput | FamilyBindingWhereUniqueInput[]
    update?: FamilyBindingUpdateWithWhereUniqueWithoutFamilyInput | FamilyBindingUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: FamilyBindingUpdateManyWithWhereWithoutFamilyInput | FamilyBindingUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: FamilyBindingScalarWhereInput | FamilyBindingScalarWhereInput[]
  }

  export type MedicineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicineCreateWithoutUserInput, MedicineUncheckedCreateWithoutUserInput> | MedicineCreateWithoutUserInput[] | MedicineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutUserInput | MedicineCreateOrConnectWithoutUserInput[]
    upsert?: MedicineUpsertWithWhereUniqueWithoutUserInput | MedicineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicineCreateManyUserInputEnvelope
    set?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    disconnect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    delete?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    update?: MedicineUpdateWithWhereUniqueWithoutUserInput | MedicineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicineUpdateManyWithWhereWithoutUserInput | MedicineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
  }

  export type CheckInUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput> | CheckInCreateWithoutUserInput[] | CheckInUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutUserInput | CheckInCreateOrConnectWithoutUserInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutUserInput | CheckInUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckInCreateManyUserInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutUserInput | CheckInUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutUserInput | CheckInUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type SOAPRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SOAPRecordCreateWithoutUserInput, SOAPRecordUncheckedCreateWithoutUserInput> | SOAPRecordCreateWithoutUserInput[] | SOAPRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SOAPRecordCreateOrConnectWithoutUserInput | SOAPRecordCreateOrConnectWithoutUserInput[]
    upsert?: SOAPRecordUpsertWithWhereUniqueWithoutUserInput | SOAPRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SOAPRecordCreateManyUserInputEnvelope
    set?: SOAPRecordWhereUniqueInput | SOAPRecordWhereUniqueInput[]
    disconnect?: SOAPRecordWhereUniqueInput | SOAPRecordWhereUniqueInput[]
    delete?: SOAPRecordWhereUniqueInput | SOAPRecordWhereUniqueInput[]
    connect?: SOAPRecordWhereUniqueInput | SOAPRecordWhereUniqueInput[]
    update?: SOAPRecordUpdateWithWhereUniqueWithoutUserInput | SOAPRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SOAPRecordUpdateManyWithWhereWithoutUserInput | SOAPRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SOAPRecordScalarWhereInput | SOAPRecordScalarWhereInput[]
  }

  export type AlertSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertSubscriptionCreateWithoutUserInput, AlertSubscriptionUncheckedCreateWithoutUserInput> | AlertSubscriptionCreateWithoutUserInput[] | AlertSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertSubscriptionCreateOrConnectWithoutUserInput | AlertSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: AlertSubscriptionUpsertWithWhereUniqueWithoutUserInput | AlertSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertSubscriptionCreateManyUserInputEnvelope
    set?: AlertSubscriptionWhereUniqueInput | AlertSubscriptionWhereUniqueInput[]
    disconnect?: AlertSubscriptionWhereUniqueInput | AlertSubscriptionWhereUniqueInput[]
    delete?: AlertSubscriptionWhereUniqueInput | AlertSubscriptionWhereUniqueInput[]
    connect?: AlertSubscriptionWhereUniqueInput | AlertSubscriptionWhereUniqueInput[]
    update?: AlertSubscriptionUpdateWithWhereUniqueWithoutUserInput | AlertSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertSubscriptionUpdateManyWithWhereWithoutUserInput | AlertSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertSubscriptionScalarWhereInput | AlertSubscriptionScalarWhereInput[]
  }

  export type DeviceTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceTokenCreateWithoutUserInput, DeviceTokenUncheckedCreateWithoutUserInput> | DeviceTokenCreateWithoutUserInput[] | DeviceTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceTokenCreateOrConnectWithoutUserInput | DeviceTokenCreateOrConnectWithoutUserInput[]
    upsert?: DeviceTokenUpsertWithWhereUniqueWithoutUserInput | DeviceTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceTokenCreateManyUserInputEnvelope
    set?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    disconnect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    delete?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    connect?: DeviceTokenWhereUniqueInput | DeviceTokenWhereUniqueInput[]
    update?: DeviceTokenUpdateWithWhereUniqueWithoutUserInput | DeviceTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceTokenUpdateManyWithWhereWithoutUserInput | DeviceTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceTokenScalarWhereInput | DeviceTokenScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<AlertCreateWithoutTargetUserInput, AlertUncheckedCreateWithoutTargetUserInput> | AlertCreateWithoutTargetUserInput[] | AlertUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTargetUserInput | AlertCreateOrConnectWithoutTargetUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutTargetUserInput | AlertUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: AlertCreateManyTargetUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutTargetUserInput | AlertUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutTargetUserInput | AlertUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutSourceUserNestedInput = {
    create?: XOR<AlertCreateWithoutSourceUserInput, AlertUncheckedCreateWithoutSourceUserInput> | AlertCreateWithoutSourceUserInput[] | AlertUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSourceUserInput | AlertCreateOrConnectWithoutSourceUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSourceUserInput | AlertUpsertWithWhereUniqueWithoutSourceUserInput[]
    createMany?: AlertCreateManySourceUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSourceUserInput | AlertUpdateWithWhereUniqueWithoutSourceUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSourceUserInput | AlertUpdateManyWithWhereWithoutSourceUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBindingsAsPatientInput = {
    create?: XOR<UserCreateWithoutBindingsAsPatientInput, UserUncheckedCreateWithoutBindingsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutBindingsAsPatientInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBindingsAsFamilyInput = {
    create?: XOR<UserCreateWithoutBindingsAsFamilyInput, UserUncheckedCreateWithoutBindingsAsFamilyInput>
    connectOrCreate?: UserCreateOrConnectWithoutBindingsAsFamilyInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutBindingsAsPatientNestedInput = {
    create?: XOR<UserCreateWithoutBindingsAsPatientInput, UserUncheckedCreateWithoutBindingsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutBindingsAsPatientInput
    upsert?: UserUpsertWithoutBindingsAsPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBindingsAsPatientInput, UserUpdateWithoutBindingsAsPatientInput>, UserUncheckedUpdateWithoutBindingsAsPatientInput>
  }

  export type UserUpdateOneRequiredWithoutBindingsAsFamilyNestedInput = {
    create?: XOR<UserCreateWithoutBindingsAsFamilyInput, UserUncheckedCreateWithoutBindingsAsFamilyInput>
    connectOrCreate?: UserCreateOrConnectWithoutBindingsAsFamilyInput
    upsert?: UserUpsertWithoutBindingsAsFamilyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBindingsAsFamilyInput, UserUpdateWithoutBindingsAsFamilyInput>, UserUncheckedUpdateWithoutBindingsAsFamilyInput>
  }

  export type UserCreateNestedOneWithoutMedicinesInput = {
    create?: XOR<UserCreateWithoutMedicinesInput, UserUncheckedCreateWithoutMedicinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicinesInput
    connect?: UserWhereUniqueInput
  }

  export type MedicineInventoryCreateNestedOneWithoutMedicineInput = {
    create?: XOR<MedicineInventoryCreateWithoutMedicineInput, MedicineInventoryUncheckedCreateWithoutMedicineInput>
    connectOrCreate?: MedicineInventoryCreateOrConnectWithoutMedicineInput
    connect?: MedicineInventoryWhereUniqueInput
  }

  export type MedicinePrescriptionCreateNestedManyWithoutMedicineInput = {
    create?: XOR<MedicinePrescriptionCreateWithoutMedicineInput, MedicinePrescriptionUncheckedCreateWithoutMedicineInput> | MedicinePrescriptionCreateWithoutMedicineInput[] | MedicinePrescriptionUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicinePrescriptionCreateOrConnectWithoutMedicineInput | MedicinePrescriptionCreateOrConnectWithoutMedicineInput[]
    createMany?: MedicinePrescriptionCreateManyMedicineInputEnvelope
    connect?: MedicinePrescriptionWhereUniqueInput | MedicinePrescriptionWhereUniqueInput[]
  }

  export type CheckInCreateNestedManyWithoutMedicineInput = {
    create?: XOR<CheckInCreateWithoutMedicineInput, CheckInUncheckedCreateWithoutMedicineInput> | CheckInCreateWithoutMedicineInput[] | CheckInUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMedicineInput | CheckInCreateOrConnectWithoutMedicineInput[]
    createMany?: CheckInCreateManyMedicineInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type MedicineInventoryUncheckedCreateNestedOneWithoutMedicineInput = {
    create?: XOR<MedicineInventoryCreateWithoutMedicineInput, MedicineInventoryUncheckedCreateWithoutMedicineInput>
    connectOrCreate?: MedicineInventoryCreateOrConnectWithoutMedicineInput
    connect?: MedicineInventoryWhereUniqueInput
  }

  export type MedicinePrescriptionUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<MedicinePrescriptionCreateWithoutMedicineInput, MedicinePrescriptionUncheckedCreateWithoutMedicineInput> | MedicinePrescriptionCreateWithoutMedicineInput[] | MedicinePrescriptionUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicinePrescriptionCreateOrConnectWithoutMedicineInput | MedicinePrescriptionCreateOrConnectWithoutMedicineInput[]
    createMany?: MedicinePrescriptionCreateManyMedicineInputEnvelope
    connect?: MedicinePrescriptionWhereUniqueInput | MedicinePrescriptionWhereUniqueInput[]
  }

  export type CheckInUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<CheckInCreateWithoutMedicineInput, CheckInUncheckedCreateWithoutMedicineInput> | CheckInCreateWithoutMedicineInput[] | CheckInUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMedicineInput | CheckInCreateOrConnectWithoutMedicineInput[]
    createMany?: CheckInCreateManyMedicineInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMedicinesNestedInput = {
    create?: XOR<UserCreateWithoutMedicinesInput, UserUncheckedCreateWithoutMedicinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicinesInput
    upsert?: UserUpsertWithoutMedicinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedicinesInput, UserUpdateWithoutMedicinesInput>, UserUncheckedUpdateWithoutMedicinesInput>
  }

  export type MedicineInventoryUpdateOneWithoutMedicineNestedInput = {
    create?: XOR<MedicineInventoryCreateWithoutMedicineInput, MedicineInventoryUncheckedCreateWithoutMedicineInput>
    connectOrCreate?: MedicineInventoryCreateOrConnectWithoutMedicineInput
    upsert?: MedicineInventoryUpsertWithoutMedicineInput
    disconnect?: MedicineInventoryWhereInput | boolean
    delete?: MedicineInventoryWhereInput | boolean
    connect?: MedicineInventoryWhereUniqueInput
    update?: XOR<XOR<MedicineInventoryUpdateToOneWithWhereWithoutMedicineInput, MedicineInventoryUpdateWithoutMedicineInput>, MedicineInventoryUncheckedUpdateWithoutMedicineInput>
  }

  export type MedicinePrescriptionUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<MedicinePrescriptionCreateWithoutMedicineInput, MedicinePrescriptionUncheckedCreateWithoutMedicineInput> | MedicinePrescriptionCreateWithoutMedicineInput[] | MedicinePrescriptionUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicinePrescriptionCreateOrConnectWithoutMedicineInput | MedicinePrescriptionCreateOrConnectWithoutMedicineInput[]
    upsert?: MedicinePrescriptionUpsertWithWhereUniqueWithoutMedicineInput | MedicinePrescriptionUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: MedicinePrescriptionCreateManyMedicineInputEnvelope
    set?: MedicinePrescriptionWhereUniqueInput | MedicinePrescriptionWhereUniqueInput[]
    disconnect?: MedicinePrescriptionWhereUniqueInput | MedicinePrescriptionWhereUniqueInput[]
    delete?: MedicinePrescriptionWhereUniqueInput | MedicinePrescriptionWhereUniqueInput[]
    connect?: MedicinePrescriptionWhereUniqueInput | MedicinePrescriptionWhereUniqueInput[]
    update?: MedicinePrescriptionUpdateWithWhereUniqueWithoutMedicineInput | MedicinePrescriptionUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: MedicinePrescriptionUpdateManyWithWhereWithoutMedicineInput | MedicinePrescriptionUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: MedicinePrescriptionScalarWhereInput | MedicinePrescriptionScalarWhereInput[]
  }

  export type CheckInUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<CheckInCreateWithoutMedicineInput, CheckInUncheckedCreateWithoutMedicineInput> | CheckInCreateWithoutMedicineInput[] | CheckInUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMedicineInput | CheckInCreateOrConnectWithoutMedicineInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutMedicineInput | CheckInUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: CheckInCreateManyMedicineInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutMedicineInput | CheckInUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutMedicineInput | CheckInUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type MedicineInventoryUncheckedUpdateOneWithoutMedicineNestedInput = {
    create?: XOR<MedicineInventoryCreateWithoutMedicineInput, MedicineInventoryUncheckedCreateWithoutMedicineInput>
    connectOrCreate?: MedicineInventoryCreateOrConnectWithoutMedicineInput
    upsert?: MedicineInventoryUpsertWithoutMedicineInput
    disconnect?: MedicineInventoryWhereInput | boolean
    delete?: MedicineInventoryWhereInput | boolean
    connect?: MedicineInventoryWhereUniqueInput
    update?: XOR<XOR<MedicineInventoryUpdateToOneWithWhereWithoutMedicineInput, MedicineInventoryUpdateWithoutMedicineInput>, MedicineInventoryUncheckedUpdateWithoutMedicineInput>
  }

  export type MedicinePrescriptionUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<MedicinePrescriptionCreateWithoutMedicineInput, MedicinePrescriptionUncheckedCreateWithoutMedicineInput> | MedicinePrescriptionCreateWithoutMedicineInput[] | MedicinePrescriptionUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicinePrescriptionCreateOrConnectWithoutMedicineInput | MedicinePrescriptionCreateOrConnectWithoutMedicineInput[]
    upsert?: MedicinePrescriptionUpsertWithWhereUniqueWithoutMedicineInput | MedicinePrescriptionUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: MedicinePrescriptionCreateManyMedicineInputEnvelope
    set?: MedicinePrescriptionWhereUniqueInput | MedicinePrescriptionWhereUniqueInput[]
    disconnect?: MedicinePrescriptionWhereUniqueInput | MedicinePrescriptionWhereUniqueInput[]
    delete?: MedicinePrescriptionWhereUniqueInput | MedicinePrescriptionWhereUniqueInput[]
    connect?: MedicinePrescriptionWhereUniqueInput | MedicinePrescriptionWhereUniqueInput[]
    update?: MedicinePrescriptionUpdateWithWhereUniqueWithoutMedicineInput | MedicinePrescriptionUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: MedicinePrescriptionUpdateManyWithWhereWithoutMedicineInput | MedicinePrescriptionUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: MedicinePrescriptionScalarWhereInput | MedicinePrescriptionScalarWhereInput[]
  }

  export type CheckInUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<CheckInCreateWithoutMedicineInput, CheckInUncheckedCreateWithoutMedicineInput> | CheckInCreateWithoutMedicineInput[] | CheckInUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutMedicineInput | CheckInCreateOrConnectWithoutMedicineInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutMedicineInput | CheckInUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: CheckInCreateManyMedicineInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutMedicineInput | CheckInUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutMedicineInput | CheckInUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type MedicineCreateNestedOneWithoutInventoryInput = {
    create?: XOR<MedicineCreateWithoutInventoryInput, MedicineUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutInventoryInput
    connect?: MedicineWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MedicineUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<MedicineCreateWithoutInventoryInput, MedicineUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutInventoryInput
    upsert?: MedicineUpsertWithoutInventoryInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutInventoryInput, MedicineUpdateWithoutInventoryInput>, MedicineUncheckedUpdateWithoutInventoryInput>
  }

  export type MedicineCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<MedicineCreateWithoutPrescriptionsInput, MedicineUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutPrescriptionsInput
    connect?: MedicineWhereUniqueInput
  }

  export type MedicineUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<MedicineCreateWithoutPrescriptionsInput, MedicineUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutPrescriptionsInput
    upsert?: MedicineUpsertWithoutPrescriptionsInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutPrescriptionsInput, MedicineUpdateWithoutPrescriptionsInput>, MedicineUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type UserCreateNestedOneWithoutCheckInsInput = {
    create?: XOR<UserCreateWithoutCheckInsInput, UserUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckInsInput
    connect?: UserWhereUniqueInput
  }

  export type MedicineCreateNestedOneWithoutCheckInsInput = {
    create?: XOR<MedicineCreateWithoutCheckInsInput, MedicineUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutCheckInsInput
    connect?: MedicineWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCheckInsNestedInput = {
    create?: XOR<UserCreateWithoutCheckInsInput, UserUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckInsInput
    upsert?: UserUpsertWithoutCheckInsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheckInsInput, UserUpdateWithoutCheckInsInput>, UserUncheckedUpdateWithoutCheckInsInput>
  }

  export type MedicineUpdateOneRequiredWithoutCheckInsNestedInput = {
    create?: XOR<MedicineCreateWithoutCheckInsInput, MedicineUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutCheckInsInput
    upsert?: MedicineUpsertWithoutCheckInsInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutCheckInsInput, MedicineUpdateWithoutCheckInsInput>, MedicineUncheckedUpdateWithoutCheckInsInput>
  }

  export type UserCreateNestedOneWithoutSoapRecordsInput = {
    create?: XOR<UserCreateWithoutSoapRecordsInput, UserUncheckedCreateWithoutSoapRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoapRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSoapRecordsNestedInput = {
    create?: XOR<UserCreateWithoutSoapRecordsInput, UserUncheckedCreateWithoutSoapRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoapRecordsInput
    upsert?: UserUpsertWithoutSoapRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSoapRecordsInput, UserUpdateWithoutSoapRecordsInput>, UserUncheckedUpdateWithoutSoapRecordsInput>
  }

  export type UserCreateNestedOneWithoutAlertsInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTriggeredAlertsInput = {
    create?: XOR<UserCreateWithoutTriggeredAlertsInput, UserUncheckedCreateWithoutTriggeredAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTriggeredAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    upsert?: UserUpsertWithoutAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlertsInput, UserUpdateWithoutAlertsInput>, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type UserUpdateOneRequiredWithoutTriggeredAlertsNestedInput = {
    create?: XOR<UserCreateWithoutTriggeredAlertsInput, UserUncheckedCreateWithoutTriggeredAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTriggeredAlertsInput
    upsert?: UserUpsertWithoutTriggeredAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTriggeredAlertsInput, UserUpdateWithoutTriggeredAlertsInput>, UserUncheckedUpdateWithoutTriggeredAlertsInput>
  }

  export type UserCreateNestedOneWithoutAlertSubscriptionsInput = {
    create?: XOR<UserCreateWithoutAlertSubscriptionsInput, UserUncheckedCreateWithoutAlertSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAlertSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutAlertSubscriptionsInput, UserUncheckedCreateWithoutAlertSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertSubscriptionsInput
    upsert?: UserUpsertWithoutAlertSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlertSubscriptionsInput, UserUpdateWithoutAlertSubscriptionsInput>, UserUncheckedUpdateWithoutAlertSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutDeviceTokensInput = {
    create?: XOR<UserCreateWithoutDeviceTokensInput, UserUncheckedCreateWithoutDeviceTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeviceTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDeviceTokensNestedInput = {
    create?: XOR<UserCreateWithoutDeviceTokensInput, UserUncheckedCreateWithoutDeviceTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeviceTokensInput
    upsert?: UserUpsertWithoutDeviceTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeviceTokensInput, UserUpdateWithoutDeviceTokensInput>, UserUncheckedUpdateWithoutDeviceTokensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FamilyBindingCreateWithoutPatientInput = {
    id?: string
    verified?: boolean
    createdAt?: Date | string
    family: UserCreateNestedOneWithoutBindingsAsFamilyInput
  }

  export type FamilyBindingUncheckedCreateWithoutPatientInput = {
    id?: string
    familyId: string
    verified?: boolean
    createdAt?: Date | string
  }

  export type FamilyBindingCreateOrConnectWithoutPatientInput = {
    where: FamilyBindingWhereUniqueInput
    create: XOR<FamilyBindingCreateWithoutPatientInput, FamilyBindingUncheckedCreateWithoutPatientInput>
  }

  export type FamilyBindingCreateManyPatientInputEnvelope = {
    data: FamilyBindingCreateManyPatientInput | FamilyBindingCreateManyPatientInput[]
  }

  export type FamilyBindingCreateWithoutFamilyInput = {
    id?: string
    verified?: boolean
    createdAt?: Date | string
    patient: UserCreateNestedOneWithoutBindingsAsPatientInput
  }

  export type FamilyBindingUncheckedCreateWithoutFamilyInput = {
    id?: string
    patientId: string
    verified?: boolean
    createdAt?: Date | string
  }

  export type FamilyBindingCreateOrConnectWithoutFamilyInput = {
    where: FamilyBindingWhereUniqueInput
    create: XOR<FamilyBindingCreateWithoutFamilyInput, FamilyBindingUncheckedCreateWithoutFamilyInput>
  }

  export type FamilyBindingCreateManyFamilyInputEnvelope = {
    data: FamilyBindingCreateManyFamilyInput | FamilyBindingCreateManyFamilyInput[]
  }

  export type MedicineCreateWithoutUserInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: MedicineInventoryCreateNestedOneWithoutMedicineInput
    prescriptions?: MedicinePrescriptionCreateNestedManyWithoutMedicineInput
    checkIns?: CheckInCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: MedicineInventoryUncheckedCreateNestedOneWithoutMedicineInput
    prescriptions?: MedicinePrescriptionUncheckedCreateNestedManyWithoutMedicineInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutUserInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutUserInput, MedicineUncheckedCreateWithoutUserInput>
  }

  export type MedicineCreateManyUserInputEnvelope = {
    data: MedicineCreateManyUserInput | MedicineCreateManyUserInput[]
  }

  export type CheckInCreateWithoutUserInput = {
    id?: string
    scheduledTime: Date | string
    actualTime?: Date | string | null
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: string | null
    createdAt?: Date | string
    medicine: MedicineCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateWithoutUserInput = {
    id?: string
    medicineId: string
    scheduledTime: Date | string
    actualTime?: Date | string | null
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: string | null
    createdAt?: Date | string
  }

  export type CheckInCreateOrConnectWithoutUserInput = {
    where: CheckInWhereUniqueInput
    create: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput>
  }

  export type CheckInCreateManyUserInputEnvelope = {
    data: CheckInCreateManyUserInput | CheckInCreateManyUserInput[]
  }

  export type SOAPRecordCreateWithoutUserInput = {
    id?: string
    subjectiveNote?: string | null
    symptomSeverity?: string | null
    symptomTags?: string | null
    bloodPressure?: string | null
    bloodSugar?: number | null
    heartRate?: number | null
    weight?: number | null
    temperature?: number | null
    assessmentNote?: string | null
    adherenceRate?: number | null
    reportJson?: string | null
    recordedAt?: Date | string
    createdAt?: Date | string
  }

  export type SOAPRecordUncheckedCreateWithoutUserInput = {
    id?: string
    subjectiveNote?: string | null
    symptomSeverity?: string | null
    symptomTags?: string | null
    bloodPressure?: string | null
    bloodSugar?: number | null
    heartRate?: number | null
    weight?: number | null
    temperature?: number | null
    assessmentNote?: string | null
    adherenceRate?: number | null
    reportJson?: string | null
    recordedAt?: Date | string
    createdAt?: Date | string
  }

  export type SOAPRecordCreateOrConnectWithoutUserInput = {
    where: SOAPRecordWhereUniqueInput
    create: XOR<SOAPRecordCreateWithoutUserInput, SOAPRecordUncheckedCreateWithoutUserInput>
  }

  export type SOAPRecordCreateManyUserInputEnvelope = {
    data: SOAPRecordCreateManyUserInput | SOAPRecordCreateManyUserInput[]
  }

  export type AlertSubscriptionCreateWithoutUserInput = {
    id?: string
    missAlertEnabled?: boolean
    inventoryAlertEnabled?: boolean
    sideEffectAlertEnabled?: boolean
    missThresholdMinutes?: number
  }

  export type AlertSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    missAlertEnabled?: boolean
    inventoryAlertEnabled?: boolean
    sideEffectAlertEnabled?: boolean
    missThresholdMinutes?: number
  }

  export type AlertSubscriptionCreateOrConnectWithoutUserInput = {
    where: AlertSubscriptionWhereUniqueInput
    create: XOR<AlertSubscriptionCreateWithoutUserInput, AlertSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type AlertSubscriptionCreateManyUserInputEnvelope = {
    data: AlertSubscriptionCreateManyUserInput | AlertSubscriptionCreateManyUserInput[]
  }

  export type DeviceTokenCreateWithoutUserInput = {
    id?: string
    token: string
    platform: string
    createdAt?: Date | string
  }

  export type DeviceTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    platform: string
    createdAt?: Date | string
  }

  export type DeviceTokenCreateOrConnectWithoutUserInput = {
    where: DeviceTokenWhereUniqueInput
    create: XOR<DeviceTokenCreateWithoutUserInput, DeviceTokenUncheckedCreateWithoutUserInput>
  }

  export type DeviceTokenCreateManyUserInputEnvelope = {
    data: DeviceTokenCreateManyUserInput | DeviceTokenCreateManyUserInput[]
  }

  export type AlertCreateWithoutTargetUserInput = {
    id?: string
    level: string
    title: string
    message: string
    status?: string
    relatedCheckInId?: string | null
    relatedMedicineId?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
    sourceUser: UserCreateNestedOneWithoutTriggeredAlertsInput
  }

  export type AlertUncheckedCreateWithoutTargetUserInput = {
    id?: string
    sourceUserId: string
    level: string
    title: string
    message: string
    status?: string
    relatedCheckInId?: string | null
    relatedMedicineId?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
  }

  export type AlertCreateOrConnectWithoutTargetUserInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutTargetUserInput, AlertUncheckedCreateWithoutTargetUserInput>
  }

  export type AlertCreateManyTargetUserInputEnvelope = {
    data: AlertCreateManyTargetUserInput | AlertCreateManyTargetUserInput[]
  }

  export type AlertCreateWithoutSourceUserInput = {
    id?: string
    level: string
    title: string
    message: string
    status?: string
    relatedCheckInId?: string | null
    relatedMedicineId?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
    targetUser: UserCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutSourceUserInput = {
    id?: string
    targetUserId: string
    level: string
    title: string
    message: string
    status?: string
    relatedCheckInId?: string | null
    relatedMedicineId?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
  }

  export type AlertCreateOrConnectWithoutSourceUserInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutSourceUserInput, AlertUncheckedCreateWithoutSourceUserInput>
  }

  export type AlertCreateManySourceUserInputEnvelope = {
    data: AlertCreateManySourceUserInput | AlertCreateManySourceUserInput[]
  }

  export type FamilyBindingUpsertWithWhereUniqueWithoutPatientInput = {
    where: FamilyBindingWhereUniqueInput
    update: XOR<FamilyBindingUpdateWithoutPatientInput, FamilyBindingUncheckedUpdateWithoutPatientInput>
    create: XOR<FamilyBindingCreateWithoutPatientInput, FamilyBindingUncheckedCreateWithoutPatientInput>
  }

  export type FamilyBindingUpdateWithWhereUniqueWithoutPatientInput = {
    where: FamilyBindingWhereUniqueInput
    data: XOR<FamilyBindingUpdateWithoutPatientInput, FamilyBindingUncheckedUpdateWithoutPatientInput>
  }

  export type FamilyBindingUpdateManyWithWhereWithoutPatientInput = {
    where: FamilyBindingScalarWhereInput
    data: XOR<FamilyBindingUpdateManyMutationInput, FamilyBindingUncheckedUpdateManyWithoutPatientInput>
  }

  export type FamilyBindingScalarWhereInput = {
    AND?: FamilyBindingScalarWhereInput | FamilyBindingScalarWhereInput[]
    OR?: FamilyBindingScalarWhereInput[]
    NOT?: FamilyBindingScalarWhereInput | FamilyBindingScalarWhereInput[]
    id?: StringFilter<"FamilyBinding"> | string
    patientId?: StringFilter<"FamilyBinding"> | string
    familyId?: StringFilter<"FamilyBinding"> | string
    verified?: BoolFilter<"FamilyBinding"> | boolean
    createdAt?: DateTimeFilter<"FamilyBinding"> | Date | string
  }

  export type FamilyBindingUpsertWithWhereUniqueWithoutFamilyInput = {
    where: FamilyBindingWhereUniqueInput
    update: XOR<FamilyBindingUpdateWithoutFamilyInput, FamilyBindingUncheckedUpdateWithoutFamilyInput>
    create: XOR<FamilyBindingCreateWithoutFamilyInput, FamilyBindingUncheckedCreateWithoutFamilyInput>
  }

  export type FamilyBindingUpdateWithWhereUniqueWithoutFamilyInput = {
    where: FamilyBindingWhereUniqueInput
    data: XOR<FamilyBindingUpdateWithoutFamilyInput, FamilyBindingUncheckedUpdateWithoutFamilyInput>
  }

  export type FamilyBindingUpdateManyWithWhereWithoutFamilyInput = {
    where: FamilyBindingScalarWhereInput
    data: XOR<FamilyBindingUpdateManyMutationInput, FamilyBindingUncheckedUpdateManyWithoutFamilyInput>
  }

  export type MedicineUpsertWithWhereUniqueWithoutUserInput = {
    where: MedicineWhereUniqueInput
    update: XOR<MedicineUpdateWithoutUserInput, MedicineUncheckedUpdateWithoutUserInput>
    create: XOR<MedicineCreateWithoutUserInput, MedicineUncheckedCreateWithoutUserInput>
  }

  export type MedicineUpdateWithWhereUniqueWithoutUserInput = {
    where: MedicineWhereUniqueInput
    data: XOR<MedicineUpdateWithoutUserInput, MedicineUncheckedUpdateWithoutUserInput>
  }

  export type MedicineUpdateManyWithWhereWithoutUserInput = {
    where: MedicineScalarWhereInput
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyWithoutUserInput>
  }

  export type MedicineScalarWhereInput = {
    AND?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
    OR?: MedicineScalarWhereInput[]
    NOT?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
    id?: StringFilter<"Medicine"> | string
    userId?: StringFilter<"Medicine"> | string
    name?: StringFilter<"Medicine"> | string
    dosage?: StringFilter<"Medicine"> | string
    frequency?: StringFilter<"Medicine"> | string
    scheduleJson?: StringFilter<"Medicine"> | string
    note?: StringNullableFilter<"Medicine"> | string | null
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
  }

  export type CheckInUpsertWithWhereUniqueWithoutUserInput = {
    where: CheckInWhereUniqueInput
    update: XOR<CheckInUpdateWithoutUserInput, CheckInUncheckedUpdateWithoutUserInput>
    create: XOR<CheckInCreateWithoutUserInput, CheckInUncheckedCreateWithoutUserInput>
  }

  export type CheckInUpdateWithWhereUniqueWithoutUserInput = {
    where: CheckInWhereUniqueInput
    data: XOR<CheckInUpdateWithoutUserInput, CheckInUncheckedUpdateWithoutUserInput>
  }

  export type CheckInUpdateManyWithWhereWithoutUserInput = {
    where: CheckInScalarWhereInput
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyWithoutUserInput>
  }

  export type CheckInScalarWhereInput = {
    AND?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    OR?: CheckInScalarWhereInput[]
    NOT?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    id?: StringFilter<"CheckIn"> | string
    userId?: StringFilter<"CheckIn"> | string
    medicineId?: StringFilter<"CheckIn"> | string
    scheduledTime?: DateTimeFilter<"CheckIn"> | Date | string
    actualTime?: DateTimeNullableFilter<"CheckIn"> | Date | string | null
    missed?: BoolFilter<"CheckIn"> | boolean
    missedAlertSent?: BoolFilter<"CheckIn"> | boolean
    confirmType?: StringNullableFilter<"CheckIn"> | string | null
    createdAt?: DateTimeFilter<"CheckIn"> | Date | string
  }

  export type SOAPRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: SOAPRecordWhereUniqueInput
    update: XOR<SOAPRecordUpdateWithoutUserInput, SOAPRecordUncheckedUpdateWithoutUserInput>
    create: XOR<SOAPRecordCreateWithoutUserInput, SOAPRecordUncheckedCreateWithoutUserInput>
  }

  export type SOAPRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: SOAPRecordWhereUniqueInput
    data: XOR<SOAPRecordUpdateWithoutUserInput, SOAPRecordUncheckedUpdateWithoutUserInput>
  }

  export type SOAPRecordUpdateManyWithWhereWithoutUserInput = {
    where: SOAPRecordScalarWhereInput
    data: XOR<SOAPRecordUpdateManyMutationInput, SOAPRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type SOAPRecordScalarWhereInput = {
    AND?: SOAPRecordScalarWhereInput | SOAPRecordScalarWhereInput[]
    OR?: SOAPRecordScalarWhereInput[]
    NOT?: SOAPRecordScalarWhereInput | SOAPRecordScalarWhereInput[]
    id?: StringFilter<"SOAPRecord"> | string
    userId?: StringFilter<"SOAPRecord"> | string
    subjectiveNote?: StringNullableFilter<"SOAPRecord"> | string | null
    symptomSeverity?: StringNullableFilter<"SOAPRecord"> | string | null
    symptomTags?: StringNullableFilter<"SOAPRecord"> | string | null
    bloodPressure?: StringNullableFilter<"SOAPRecord"> | string | null
    bloodSugar?: FloatNullableFilter<"SOAPRecord"> | number | null
    heartRate?: IntNullableFilter<"SOAPRecord"> | number | null
    weight?: FloatNullableFilter<"SOAPRecord"> | number | null
    temperature?: FloatNullableFilter<"SOAPRecord"> | number | null
    assessmentNote?: StringNullableFilter<"SOAPRecord"> | string | null
    adherenceRate?: FloatNullableFilter<"SOAPRecord"> | number | null
    reportJson?: StringNullableFilter<"SOAPRecord"> | string | null
    recordedAt?: DateTimeFilter<"SOAPRecord"> | Date | string
    createdAt?: DateTimeFilter<"SOAPRecord"> | Date | string
  }

  export type AlertSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: AlertSubscriptionWhereUniqueInput
    update: XOR<AlertSubscriptionUpdateWithoutUserInput, AlertSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<AlertSubscriptionCreateWithoutUserInput, AlertSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type AlertSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: AlertSubscriptionWhereUniqueInput
    data: XOR<AlertSubscriptionUpdateWithoutUserInput, AlertSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type AlertSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: AlertSubscriptionScalarWhereInput
    data: XOR<AlertSubscriptionUpdateManyMutationInput, AlertSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type AlertSubscriptionScalarWhereInput = {
    AND?: AlertSubscriptionScalarWhereInput | AlertSubscriptionScalarWhereInput[]
    OR?: AlertSubscriptionScalarWhereInput[]
    NOT?: AlertSubscriptionScalarWhereInput | AlertSubscriptionScalarWhereInput[]
    id?: StringFilter<"AlertSubscription"> | string
    userId?: StringFilter<"AlertSubscription"> | string
    missAlertEnabled?: BoolFilter<"AlertSubscription"> | boolean
    inventoryAlertEnabled?: BoolFilter<"AlertSubscription"> | boolean
    sideEffectAlertEnabled?: BoolFilter<"AlertSubscription"> | boolean
    missThresholdMinutes?: IntFilter<"AlertSubscription"> | number
  }

  export type DeviceTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceTokenWhereUniqueInput
    update: XOR<DeviceTokenUpdateWithoutUserInput, DeviceTokenUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceTokenCreateWithoutUserInput, DeviceTokenUncheckedCreateWithoutUserInput>
  }

  export type DeviceTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceTokenWhereUniqueInput
    data: XOR<DeviceTokenUpdateWithoutUserInput, DeviceTokenUncheckedUpdateWithoutUserInput>
  }

  export type DeviceTokenUpdateManyWithWhereWithoutUserInput = {
    where: DeviceTokenScalarWhereInput
    data: XOR<DeviceTokenUpdateManyMutationInput, DeviceTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceTokenScalarWhereInput = {
    AND?: DeviceTokenScalarWhereInput | DeviceTokenScalarWhereInput[]
    OR?: DeviceTokenScalarWhereInput[]
    NOT?: DeviceTokenScalarWhereInput | DeviceTokenScalarWhereInput[]
    id?: StringFilter<"DeviceToken"> | string
    userId?: StringFilter<"DeviceToken"> | string
    token?: StringFilter<"DeviceToken"> | string
    platform?: StringFilter<"DeviceToken"> | string
    createdAt?: DateTimeFilter<"DeviceToken"> | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutTargetUserInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutTargetUserInput, AlertUncheckedUpdateWithoutTargetUserInput>
    create: XOR<AlertCreateWithoutTargetUserInput, AlertUncheckedCreateWithoutTargetUserInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutTargetUserInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutTargetUserInput, AlertUncheckedUpdateWithoutTargetUserInput>
  }

  export type AlertUpdateManyWithWhereWithoutTargetUserInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutTargetUserInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    targetUserId?: StringFilter<"Alert"> | string
    sourceUserId?: StringFilter<"Alert"> | string
    level?: StringFilter<"Alert"> | string
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    status?: StringFilter<"Alert"> | string
    relatedCheckInId?: StringNullableFilter<"Alert"> | string | null
    relatedMedicineId?: StringNullableFilter<"Alert"> | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    readAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
  }

  export type AlertUpsertWithWhereUniqueWithoutSourceUserInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutSourceUserInput, AlertUncheckedUpdateWithoutSourceUserInput>
    create: XOR<AlertCreateWithoutSourceUserInput, AlertUncheckedCreateWithoutSourceUserInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutSourceUserInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutSourceUserInput, AlertUncheckedUpdateWithoutSourceUserInput>
  }

  export type AlertUpdateManyWithWhereWithoutSourceUserInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutSourceUserInput>
  }

  export type UserCreateWithoutBindingsAsPatientInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsFamily?: FamilyBindingCreateNestedManyWithoutFamilyInput
    medicines?: MedicineCreateNestedManyWithoutUserInput
    checkIns?: CheckInCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertCreateNestedManyWithoutSourceUserInput
  }

  export type UserUncheckedCreateWithoutBindingsAsPatientInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsFamily?: FamilyBindingUncheckedCreateNestedManyWithoutFamilyInput
    medicines?: MedicineUncheckedCreateNestedManyWithoutUserInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordUncheckedCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertUncheckedCreateNestedManyWithoutSourceUserInput
  }

  export type UserCreateOrConnectWithoutBindingsAsPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBindingsAsPatientInput, UserUncheckedCreateWithoutBindingsAsPatientInput>
  }

  export type UserCreateWithoutBindingsAsFamilyInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingCreateNestedManyWithoutPatientInput
    medicines?: MedicineCreateNestedManyWithoutUserInput
    checkIns?: CheckInCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertCreateNestedManyWithoutSourceUserInput
  }

  export type UserUncheckedCreateWithoutBindingsAsFamilyInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingUncheckedCreateNestedManyWithoutPatientInput
    medicines?: MedicineUncheckedCreateNestedManyWithoutUserInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordUncheckedCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertUncheckedCreateNestedManyWithoutSourceUserInput
  }

  export type UserCreateOrConnectWithoutBindingsAsFamilyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBindingsAsFamilyInput, UserUncheckedCreateWithoutBindingsAsFamilyInput>
  }

  export type UserUpsertWithoutBindingsAsPatientInput = {
    update: XOR<UserUpdateWithoutBindingsAsPatientInput, UserUncheckedUpdateWithoutBindingsAsPatientInput>
    create: XOR<UserCreateWithoutBindingsAsPatientInput, UserUncheckedCreateWithoutBindingsAsPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBindingsAsPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBindingsAsPatientInput, UserUncheckedUpdateWithoutBindingsAsPatientInput>
  }

  export type UserUpdateWithoutBindingsAsPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsFamily?: FamilyBindingUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUpdateManyWithoutSourceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBindingsAsPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsFamily?: FamilyBindingUncheckedUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUncheckedUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUncheckedUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUncheckedUpdateManyWithoutSourceUserNestedInput
  }

  export type UserUpsertWithoutBindingsAsFamilyInput = {
    update: XOR<UserUpdateWithoutBindingsAsFamilyInput, UserUncheckedUpdateWithoutBindingsAsFamilyInput>
    create: XOR<UserCreateWithoutBindingsAsFamilyInput, UserUncheckedCreateWithoutBindingsAsFamilyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBindingsAsFamilyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBindingsAsFamilyInput, UserUncheckedUpdateWithoutBindingsAsFamilyInput>
  }

  export type UserUpdateWithoutBindingsAsFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUpdateManyWithoutPatientNestedInput
    medicines?: MedicineUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUpdateManyWithoutSourceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBindingsAsFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUncheckedUpdateManyWithoutPatientNestedInput
    medicines?: MedicineUncheckedUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUncheckedUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUncheckedUpdateManyWithoutSourceUserNestedInput
  }

  export type UserCreateWithoutMedicinesInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingCreateNestedManyWithoutFamilyInput
    checkIns?: CheckInCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertCreateNestedManyWithoutSourceUserInput
  }

  export type UserUncheckedCreateWithoutMedicinesInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingUncheckedCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingUncheckedCreateNestedManyWithoutFamilyInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordUncheckedCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertUncheckedCreateNestedManyWithoutSourceUserInput
  }

  export type UserCreateOrConnectWithoutMedicinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedicinesInput, UserUncheckedCreateWithoutMedicinesInput>
  }

  export type MedicineInventoryCreateWithoutMedicineInput = {
    id?: string
    totalCount: number
    remainingCount: number
    unit: string
    alertThreshold?: number
    updatedAt?: Date | string
  }

  export type MedicineInventoryUncheckedCreateWithoutMedicineInput = {
    id?: string
    totalCount: number
    remainingCount: number
    unit: string
    alertThreshold?: number
    updatedAt?: Date | string
  }

  export type MedicineInventoryCreateOrConnectWithoutMedicineInput = {
    where: MedicineInventoryWhereUniqueInput
    create: XOR<MedicineInventoryCreateWithoutMedicineInput, MedicineInventoryUncheckedCreateWithoutMedicineInput>
  }

  export type MedicinePrescriptionCreateWithoutMedicineInput = {
    id?: string
    imageUrl?: string | null
    ocrRawText?: string | null
    ocrResultJson?: string | null
    doctorName?: string | null
    hospitalName?: string | null
    prescribedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MedicinePrescriptionUncheckedCreateWithoutMedicineInput = {
    id?: string
    imageUrl?: string | null
    ocrRawText?: string | null
    ocrResultJson?: string | null
    doctorName?: string | null
    hospitalName?: string | null
    prescribedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MedicinePrescriptionCreateOrConnectWithoutMedicineInput = {
    where: MedicinePrescriptionWhereUniqueInput
    create: XOR<MedicinePrescriptionCreateWithoutMedicineInput, MedicinePrescriptionUncheckedCreateWithoutMedicineInput>
  }

  export type MedicinePrescriptionCreateManyMedicineInputEnvelope = {
    data: MedicinePrescriptionCreateManyMedicineInput | MedicinePrescriptionCreateManyMedicineInput[]
  }

  export type CheckInCreateWithoutMedicineInput = {
    id?: string
    scheduledTime: Date | string
    actualTime?: Date | string | null
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateWithoutMedicineInput = {
    id?: string
    userId: string
    scheduledTime: Date | string
    actualTime?: Date | string | null
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: string | null
    createdAt?: Date | string
  }

  export type CheckInCreateOrConnectWithoutMedicineInput = {
    where: CheckInWhereUniqueInput
    create: XOR<CheckInCreateWithoutMedicineInput, CheckInUncheckedCreateWithoutMedicineInput>
  }

  export type CheckInCreateManyMedicineInputEnvelope = {
    data: CheckInCreateManyMedicineInput | CheckInCreateManyMedicineInput[]
  }

  export type UserUpsertWithoutMedicinesInput = {
    update: XOR<UserUpdateWithoutMedicinesInput, UserUncheckedUpdateWithoutMedicinesInput>
    create: XOR<UserCreateWithoutMedicinesInput, UserUncheckedCreateWithoutMedicinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedicinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedicinesInput, UserUncheckedUpdateWithoutMedicinesInput>
  }

  export type UserUpdateWithoutMedicinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUpdateManyWithoutFamilyNestedInput
    checkIns?: CheckInUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUpdateManyWithoutSourceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedicinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUncheckedUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUncheckedUpdateManyWithoutFamilyNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUncheckedUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUncheckedUpdateManyWithoutSourceUserNestedInput
  }

  export type MedicineInventoryUpsertWithoutMedicineInput = {
    update: XOR<MedicineInventoryUpdateWithoutMedicineInput, MedicineInventoryUncheckedUpdateWithoutMedicineInput>
    create: XOR<MedicineInventoryCreateWithoutMedicineInput, MedicineInventoryUncheckedCreateWithoutMedicineInput>
    where?: MedicineInventoryWhereInput
  }

  export type MedicineInventoryUpdateToOneWithWhereWithoutMedicineInput = {
    where?: MedicineInventoryWhereInput
    data: XOR<MedicineInventoryUpdateWithoutMedicineInput, MedicineInventoryUncheckedUpdateWithoutMedicineInput>
  }

  export type MedicineInventoryUpdateWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    remainingCount?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    alertThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineInventoryUncheckedUpdateWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    remainingCount?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    alertThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicinePrescriptionUpsertWithWhereUniqueWithoutMedicineInput = {
    where: MedicinePrescriptionWhereUniqueInput
    update: XOR<MedicinePrescriptionUpdateWithoutMedicineInput, MedicinePrescriptionUncheckedUpdateWithoutMedicineInput>
    create: XOR<MedicinePrescriptionCreateWithoutMedicineInput, MedicinePrescriptionUncheckedCreateWithoutMedicineInput>
  }

  export type MedicinePrescriptionUpdateWithWhereUniqueWithoutMedicineInput = {
    where: MedicinePrescriptionWhereUniqueInput
    data: XOR<MedicinePrescriptionUpdateWithoutMedicineInput, MedicinePrescriptionUncheckedUpdateWithoutMedicineInput>
  }

  export type MedicinePrescriptionUpdateManyWithWhereWithoutMedicineInput = {
    where: MedicinePrescriptionScalarWhereInput
    data: XOR<MedicinePrescriptionUpdateManyMutationInput, MedicinePrescriptionUncheckedUpdateManyWithoutMedicineInput>
  }

  export type MedicinePrescriptionScalarWhereInput = {
    AND?: MedicinePrescriptionScalarWhereInput | MedicinePrescriptionScalarWhereInput[]
    OR?: MedicinePrescriptionScalarWhereInput[]
    NOT?: MedicinePrescriptionScalarWhereInput | MedicinePrescriptionScalarWhereInput[]
    id?: StringFilter<"MedicinePrescription"> | string
    medicineId?: StringFilter<"MedicinePrescription"> | string
    imageUrl?: StringNullableFilter<"MedicinePrescription"> | string | null
    ocrRawText?: StringNullableFilter<"MedicinePrescription"> | string | null
    ocrResultJson?: StringNullableFilter<"MedicinePrescription"> | string | null
    doctorName?: StringNullableFilter<"MedicinePrescription"> | string | null
    hospitalName?: StringNullableFilter<"MedicinePrescription"> | string | null
    prescribedAt?: DateTimeNullableFilter<"MedicinePrescription"> | Date | string | null
    createdAt?: DateTimeFilter<"MedicinePrescription"> | Date | string
  }

  export type CheckInUpsertWithWhereUniqueWithoutMedicineInput = {
    where: CheckInWhereUniqueInput
    update: XOR<CheckInUpdateWithoutMedicineInput, CheckInUncheckedUpdateWithoutMedicineInput>
    create: XOR<CheckInCreateWithoutMedicineInput, CheckInUncheckedCreateWithoutMedicineInput>
  }

  export type CheckInUpdateWithWhereUniqueWithoutMedicineInput = {
    where: CheckInWhereUniqueInput
    data: XOR<CheckInUpdateWithoutMedicineInput, CheckInUncheckedUpdateWithoutMedicineInput>
  }

  export type CheckInUpdateManyWithWhereWithoutMedicineInput = {
    where: CheckInScalarWhereInput
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyWithoutMedicineInput>
  }

  export type MedicineCreateWithoutInventoryInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicinesInput
    prescriptions?: MedicinePrescriptionCreateNestedManyWithoutMedicineInput
    checkIns?: CheckInCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutInventoryInput = {
    id?: string
    userId: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: MedicinePrescriptionUncheckedCreateNestedManyWithoutMedicineInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutInventoryInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutInventoryInput, MedicineUncheckedCreateWithoutInventoryInput>
  }

  export type MedicineUpsertWithoutInventoryInput = {
    update: XOR<MedicineUpdateWithoutInventoryInput, MedicineUncheckedUpdateWithoutInventoryInput>
    create: XOR<MedicineCreateWithoutInventoryInput, MedicineUncheckedCreateWithoutInventoryInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutInventoryInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutInventoryInput, MedicineUncheckedUpdateWithoutInventoryInput>
  }

  export type MedicineUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicinesNestedInput
    prescriptions?: MedicinePrescriptionUpdateManyWithoutMedicineNestedInput
    checkIns?: CheckInUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: MedicinePrescriptionUncheckedUpdateManyWithoutMedicineNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateWithoutPrescriptionsInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicinesInput
    inventory?: MedicineInventoryCreateNestedOneWithoutMedicineInput
    checkIns?: CheckInCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    userId: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: MedicineInventoryUncheckedCreateNestedOneWithoutMedicineInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutPrescriptionsInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutPrescriptionsInput, MedicineUncheckedCreateWithoutPrescriptionsInput>
  }

  export type MedicineUpsertWithoutPrescriptionsInput = {
    update: XOR<MedicineUpdateWithoutPrescriptionsInput, MedicineUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<MedicineCreateWithoutPrescriptionsInput, MedicineUncheckedCreateWithoutPrescriptionsInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutPrescriptionsInput, MedicineUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type MedicineUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicinesNestedInput
    inventory?: MedicineInventoryUpdateOneWithoutMedicineNestedInput
    checkIns?: CheckInUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: MedicineInventoryUncheckedUpdateOneWithoutMedicineNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type UserCreateWithoutCheckInsInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingCreateNestedManyWithoutFamilyInput
    medicines?: MedicineCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertCreateNestedManyWithoutSourceUserInput
  }

  export type UserUncheckedCreateWithoutCheckInsInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingUncheckedCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingUncheckedCreateNestedManyWithoutFamilyInput
    medicines?: MedicineUncheckedCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordUncheckedCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertUncheckedCreateNestedManyWithoutSourceUserInput
  }

  export type UserCreateOrConnectWithoutCheckInsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckInsInput, UserUncheckedCreateWithoutCheckInsInput>
  }

  export type MedicineCreateWithoutCheckInsInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicinesInput
    inventory?: MedicineInventoryCreateNestedOneWithoutMedicineInput
    prescriptions?: MedicinePrescriptionCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutCheckInsInput = {
    id?: string
    userId: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: MedicineInventoryUncheckedCreateNestedOneWithoutMedicineInput
    prescriptions?: MedicinePrescriptionUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutCheckInsInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutCheckInsInput, MedicineUncheckedCreateWithoutCheckInsInput>
  }

  export type UserUpsertWithoutCheckInsInput = {
    update: XOR<UserUpdateWithoutCheckInsInput, UserUncheckedUpdateWithoutCheckInsInput>
    create: XOR<UserCreateWithoutCheckInsInput, UserUncheckedCreateWithoutCheckInsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheckInsInput, UserUncheckedUpdateWithoutCheckInsInput>
  }

  export type UserUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUpdateManyWithoutSourceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUncheckedUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUncheckedUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUncheckedUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUncheckedUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUncheckedUpdateManyWithoutSourceUserNestedInput
  }

  export type MedicineUpsertWithoutCheckInsInput = {
    update: XOR<MedicineUpdateWithoutCheckInsInput, MedicineUncheckedUpdateWithoutCheckInsInput>
    create: XOR<MedicineCreateWithoutCheckInsInput, MedicineUncheckedCreateWithoutCheckInsInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutCheckInsInput, MedicineUncheckedUpdateWithoutCheckInsInput>
  }

  export type MedicineUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicinesNestedInput
    inventory?: MedicineInventoryUpdateOneWithoutMedicineNestedInput
    prescriptions?: MedicinePrescriptionUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: MedicineInventoryUncheckedUpdateOneWithoutMedicineNestedInput
    prescriptions?: MedicinePrescriptionUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type UserCreateWithoutSoapRecordsInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingCreateNestedManyWithoutFamilyInput
    medicines?: MedicineCreateNestedManyWithoutUserInput
    checkIns?: CheckInCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertCreateNestedManyWithoutSourceUserInput
  }

  export type UserUncheckedCreateWithoutSoapRecordsInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingUncheckedCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingUncheckedCreateNestedManyWithoutFamilyInput
    medicines?: MedicineUncheckedCreateNestedManyWithoutUserInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertUncheckedCreateNestedManyWithoutSourceUserInput
  }

  export type UserCreateOrConnectWithoutSoapRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSoapRecordsInput, UserUncheckedCreateWithoutSoapRecordsInput>
  }

  export type UserUpsertWithoutSoapRecordsInput = {
    update: XOR<UserUpdateWithoutSoapRecordsInput, UserUncheckedUpdateWithoutSoapRecordsInput>
    create: XOR<UserCreateWithoutSoapRecordsInput, UserUncheckedCreateWithoutSoapRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSoapRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSoapRecordsInput, UserUncheckedUpdateWithoutSoapRecordsInput>
  }

  export type UserUpdateWithoutSoapRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUpdateManyWithoutSourceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSoapRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUncheckedUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUncheckedUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUncheckedUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUncheckedUpdateManyWithoutSourceUserNestedInput
  }

  export type UserCreateWithoutAlertsInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingCreateNestedManyWithoutFamilyInput
    medicines?: MedicineCreateNestedManyWithoutUserInput
    checkIns?: CheckInCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenCreateNestedManyWithoutUserInput
    triggeredAlerts?: AlertCreateNestedManyWithoutSourceUserInput
  }

  export type UserUncheckedCreateWithoutAlertsInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingUncheckedCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingUncheckedCreateNestedManyWithoutFamilyInput
    medicines?: MedicineUncheckedCreateNestedManyWithoutUserInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordUncheckedCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenUncheckedCreateNestedManyWithoutUserInput
    triggeredAlerts?: AlertUncheckedCreateNestedManyWithoutSourceUserInput
  }

  export type UserCreateOrConnectWithoutAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
  }

  export type UserCreateWithoutTriggeredAlertsInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingCreateNestedManyWithoutFamilyInput
    medicines?: MedicineCreateNestedManyWithoutUserInput
    checkIns?: CheckInCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutTriggeredAlertsInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingUncheckedCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingUncheckedCreateNestedManyWithoutFamilyInput
    medicines?: MedicineUncheckedCreateNestedManyWithoutUserInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordUncheckedCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutTriggeredAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTriggeredAlertsInput, UserUncheckedCreateWithoutTriggeredAlertsInput>
  }

  export type UserUpsertWithoutAlertsInput = {
    update: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type UserUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUpdateManyWithoutUserNestedInput
    triggeredAlerts?: AlertUpdateManyWithoutSourceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUncheckedUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUncheckedUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUncheckedUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUncheckedUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUncheckedUpdateManyWithoutUserNestedInput
    triggeredAlerts?: AlertUncheckedUpdateManyWithoutSourceUserNestedInput
  }

  export type UserUpsertWithoutTriggeredAlertsInput = {
    update: XOR<UserUpdateWithoutTriggeredAlertsInput, UserUncheckedUpdateWithoutTriggeredAlertsInput>
    create: XOR<UserCreateWithoutTriggeredAlertsInput, UserUncheckedCreateWithoutTriggeredAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTriggeredAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTriggeredAlertsInput, UserUncheckedUpdateWithoutTriggeredAlertsInput>
  }

  export type UserUpdateWithoutTriggeredAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTriggeredAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUncheckedUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUncheckedUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUncheckedUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUncheckedUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserCreateWithoutAlertSubscriptionsInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingCreateNestedManyWithoutFamilyInput
    medicines?: MedicineCreateNestedManyWithoutUserInput
    checkIns?: CheckInCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertCreateNestedManyWithoutSourceUserInput
  }

  export type UserUncheckedCreateWithoutAlertSubscriptionsInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingUncheckedCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingUncheckedCreateNestedManyWithoutFamilyInput
    medicines?: MedicineUncheckedCreateNestedManyWithoutUserInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordUncheckedCreateNestedManyWithoutUserInput
    deviceTokens?: DeviceTokenUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertUncheckedCreateNestedManyWithoutSourceUserInput
  }

  export type UserCreateOrConnectWithoutAlertSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlertSubscriptionsInput, UserUncheckedCreateWithoutAlertSubscriptionsInput>
  }

  export type UserUpsertWithoutAlertSubscriptionsInput = {
    update: XOR<UserUpdateWithoutAlertSubscriptionsInput, UserUncheckedUpdateWithoutAlertSubscriptionsInput>
    create: XOR<UserCreateWithoutAlertSubscriptionsInput, UserUncheckedCreateWithoutAlertSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlertSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlertSubscriptionsInput, UserUncheckedUpdateWithoutAlertSubscriptionsInput>
  }

  export type UserUpdateWithoutAlertSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUpdateManyWithoutSourceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlertSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUncheckedUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUncheckedUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUncheckedUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUncheckedUpdateManyWithoutUserNestedInput
    deviceTokens?: DeviceTokenUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUncheckedUpdateManyWithoutSourceUserNestedInput
  }

  export type UserCreateWithoutDeviceTokensInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingCreateNestedManyWithoutFamilyInput
    medicines?: MedicineCreateNestedManyWithoutUserInput
    checkIns?: CheckInCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertCreateNestedManyWithoutSourceUserInput
  }

  export type UserUncheckedCreateWithoutDeviceTokensInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role: string
    gender?: string | null
    birthDate?: Date | string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bindingsAsPatient?: FamilyBindingUncheckedCreateNestedManyWithoutPatientInput
    bindingsAsFamily?: FamilyBindingUncheckedCreateNestedManyWithoutFamilyInput
    medicines?: MedicineUncheckedCreateNestedManyWithoutUserInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput
    soapRecords?: SOAPRecordUncheckedCreateNestedManyWithoutUserInput
    alertSubscriptions?: AlertSubscriptionUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTargetUserInput
    triggeredAlerts?: AlertUncheckedCreateNestedManyWithoutSourceUserInput
  }

  export type UserCreateOrConnectWithoutDeviceTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeviceTokensInput, UserUncheckedCreateWithoutDeviceTokensInput>
  }

  export type UserUpsertWithoutDeviceTokensInput = {
    update: XOR<UserUpdateWithoutDeviceTokensInput, UserUncheckedUpdateWithoutDeviceTokensInput>
    create: XOR<UserCreateWithoutDeviceTokensInput, UserUncheckedCreateWithoutDeviceTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeviceTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeviceTokensInput, UserUncheckedUpdateWithoutDeviceTokensInput>
  }

  export type UserUpdateWithoutDeviceTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUpdateManyWithoutSourceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeviceTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindingsAsPatient?: FamilyBindingUncheckedUpdateManyWithoutPatientNestedInput
    bindingsAsFamily?: FamilyBindingUncheckedUpdateManyWithoutFamilyNestedInput
    medicines?: MedicineUncheckedUpdateManyWithoutUserNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput
    soapRecords?: SOAPRecordUncheckedUpdateManyWithoutUserNestedInput
    alertSubscriptions?: AlertSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTargetUserNestedInput
    triggeredAlerts?: AlertUncheckedUpdateManyWithoutSourceUserNestedInput
  }

  export type FamilyBindingCreateManyPatientInput = {
    id?: string
    familyId: string
    verified?: boolean
    createdAt?: Date | string
  }

  export type FamilyBindingCreateManyFamilyInput = {
    id?: string
    patientId: string
    verified?: boolean
    createdAt?: Date | string
  }

  export type MedicineCreateManyUserInput = {
    id?: string
    name: string
    dosage: string
    frequency: string
    scheduleJson: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckInCreateManyUserInput = {
    id?: string
    medicineId: string
    scheduledTime: Date | string
    actualTime?: Date | string | null
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: string | null
    createdAt?: Date | string
  }

  export type SOAPRecordCreateManyUserInput = {
    id?: string
    subjectiveNote?: string | null
    symptomSeverity?: string | null
    symptomTags?: string | null
    bloodPressure?: string | null
    bloodSugar?: number | null
    heartRate?: number | null
    weight?: number | null
    temperature?: number | null
    assessmentNote?: string | null
    adherenceRate?: number | null
    reportJson?: string | null
    recordedAt?: Date | string
    createdAt?: Date | string
  }

  export type AlertSubscriptionCreateManyUserInput = {
    id?: string
    missAlertEnabled?: boolean
    inventoryAlertEnabled?: boolean
    sideEffectAlertEnabled?: boolean
    missThresholdMinutes?: number
  }

  export type DeviceTokenCreateManyUserInput = {
    id?: string
    token: string
    platform: string
    createdAt?: Date | string
  }

  export type AlertCreateManyTargetUserInput = {
    id?: string
    sourceUserId: string
    level: string
    title: string
    message: string
    status?: string
    relatedCheckInId?: string | null
    relatedMedicineId?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
  }

  export type AlertCreateManySourceUserInput = {
    id?: string
    targetUserId: string
    level: string
    title: string
    message: string
    status?: string
    relatedCheckInId?: string | null
    relatedMedicineId?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
  }

  export type FamilyBindingUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: UserUpdateOneRequiredWithoutBindingsAsFamilyNestedInput
  }

  export type FamilyBindingUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyId?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyBindingUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyId?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyBindingUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UserUpdateOneRequiredWithoutBindingsAsPatientNestedInput
  }

  export type FamilyBindingUncheckedUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyBindingUncheckedUpdateManyWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: MedicineInventoryUpdateOneWithoutMedicineNestedInput
    prescriptions?: MedicinePrescriptionUpdateManyWithoutMedicineNestedInput
    checkIns?: CheckInUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: MedicineInventoryUncheckedUpdateOneWithoutMedicineNestedInput
    prescriptions?: MedicinePrescriptionUncheckedUpdateManyWithoutMedicineNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missed?: BoolFieldUpdateOperationsInput | boolean
    missedAlertSent?: BoolFieldUpdateOperationsInput | boolean
    confirmType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: MedicineUpdateOneRequiredWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missed?: BoolFieldUpdateOperationsInput | boolean
    missedAlertSent?: BoolFieldUpdateOperationsInput | boolean
    confirmType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missed?: BoolFieldUpdateOperationsInput | boolean
    missedAlertSent?: BoolFieldUpdateOperationsInput | boolean
    confirmType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOAPRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectiveNote?: NullableStringFieldUpdateOperationsInput | string | null
    symptomSeverity?: NullableStringFieldUpdateOperationsInput | string | null
    symptomTags?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    assessmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    reportJson?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOAPRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectiveNote?: NullableStringFieldUpdateOperationsInput | string | null
    symptomSeverity?: NullableStringFieldUpdateOperationsInput | string | null
    symptomTags?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    assessmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    reportJson?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOAPRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectiveNote?: NullableStringFieldUpdateOperationsInput | string | null
    symptomSeverity?: NullableStringFieldUpdateOperationsInput | string | null
    symptomTags?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    assessmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    reportJson?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    missAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    inventoryAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    sideEffectAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    missThresholdMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type AlertSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    missAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    inventoryAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    sideEffectAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    missThresholdMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type AlertSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    missAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    inventoryAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    sideEffectAlertEnabled?: BoolFieldUpdateOperationsInput | boolean
    missThresholdMinutes?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedCheckInId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMedicineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUser?: UserUpdateOneRequiredWithoutTriggeredAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUserId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedCheckInId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMedicineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUserId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedCheckInId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMedicineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUpdateWithoutSourceUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedCheckInId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMedicineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetUser?: UserUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutSourceUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedCheckInId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMedicineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyWithoutSourceUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedCheckInId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMedicineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MedicinePrescriptionCreateManyMedicineInput = {
    id?: string
    imageUrl?: string | null
    ocrRawText?: string | null
    ocrResultJson?: string | null
    doctorName?: string | null
    hospitalName?: string | null
    prescribedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CheckInCreateManyMedicineInput = {
    id?: string
    userId: string
    scheduledTime: Date | string
    actualTime?: Date | string | null
    missed?: boolean
    missedAlertSent?: boolean
    confirmType?: string | null
    createdAt?: Date | string
  }

  export type MedicinePrescriptionUpdateWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRawText?: NullableStringFieldUpdateOperationsInput | string | null
    ocrResultJson?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalName?: NullableStringFieldUpdateOperationsInput | string | null
    prescribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicinePrescriptionUncheckedUpdateWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRawText?: NullableStringFieldUpdateOperationsInput | string | null
    ocrResultJson?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalName?: NullableStringFieldUpdateOperationsInput | string | null
    prescribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicinePrescriptionUncheckedUpdateManyWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRawText?: NullableStringFieldUpdateOperationsInput | string | null
    ocrResultJson?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalName?: NullableStringFieldUpdateOperationsInput | string | null
    prescribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUpdateWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missed?: BoolFieldUpdateOperationsInput | boolean
    missedAlertSent?: BoolFieldUpdateOperationsInput | boolean
    confirmType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missed?: BoolFieldUpdateOperationsInput | boolean
    missedAlertSent?: BoolFieldUpdateOperationsInput | boolean
    confirmType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUncheckedUpdateManyWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missed?: BoolFieldUpdateOperationsInput | boolean
    missedAlertSent?: BoolFieldUpdateOperationsInput | boolean
    confirmType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicineCountOutputTypeDefaultArgs instead
     */
    export type MedicineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicineCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FamilyBindingDefaultArgs instead
     */
    export type FamilyBindingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamilyBindingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicineDefaultArgs instead
     */
    export type MedicineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicineInventoryDefaultArgs instead
     */
    export type MedicineInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicineInventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicinePrescriptionDefaultArgs instead
     */
    export type MedicinePrescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicinePrescriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CheckInDefaultArgs instead
     */
    export type CheckInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CheckInDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SOAPRecordDefaultArgs instead
     */
    export type SOAPRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SOAPRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlertDefaultArgs instead
     */
    export type AlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlertSubscriptionDefaultArgs instead
     */
    export type AlertSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlertSubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceTokenDefaultArgs instead
     */
    export type DeviceTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceTokenDefaultArgs<ExtArgs>

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