﻿// 框架名称：Fur
// 框架作者：百小僧
// 框架版本：1.0.0
// 开源协议：MIT
// 项目地址：https://gitee.com/monksoul/Fur

using System;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

namespace Fur.DatabaseAccessor
{
    /// <summary>
    /// 可读仓储
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    public interface IReadableRepository<TEntity>
        where TEntity : class, IDbEntityBase, new()
    {
        /// <summary>
        /// 根据主键查找
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        TEntity Find(object key);

        /// <summary>
        /// 根据多个主键查找
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        TEntity Find(params object[] keyValues);

        /// <summary>
        /// 根据主键查找
        /// </summary>
        /// <param name="key"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        Task<TEntity> FindAsync(object key, CancellationToken cancellationToken = default);

        /// <summary>
        /// 根据多个主键查找
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        Task<TEntity> FindAsync(params object[] keyValues);

        /// <summary>
        /// 根据多个主键查找
        /// </summary>
        /// <param name="keyValues"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        Task<TEntity> FindAsync(object[] keyValues, CancellationToken cancellationToken = default);

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <returns></returns>
        TEntity Single();

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        TEntity Single(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <returns></returns>
        TEntity SingleOrDefault();

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        Task<TEntity> SingleAsync(CancellationToken cancellationToken = default);

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <param name="predicate"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        Task<TEntity> SingleAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);
    }
}